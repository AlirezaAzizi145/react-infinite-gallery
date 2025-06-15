import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import './InfiniteGallery.css';

// Inline video player with thumbnail and centered round play button overlay
const InlineVideo = ({ src, style, playButtonProps = {} }) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleToggle = e => {
    e.stopPropagation();
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  // Destructure customization props for play button
  const { className: playBtnClassName = '', style: playBtnStyle = {}, children: playBtnChildren, ...playBtnRest } = playButtonProps;
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }} onClick={e => e.stopPropagation()}>
      {/* show paused thumbnail from video */}
      <video ref={videoRef} src={src} style={style} loop muted playsInline preload="metadata" onClick={handleToggle} />
      {!playing && (
        <button onClick={handleToggle} className={`ig-play-btn ${playBtnClassName}`} style={playBtnStyle} {...playBtnRest}>
          {playBtnChildren || '▶'}
        </button>
      )}
    </div>
  );
};

const InfiniteGallery = ({
  itemsData = [],
  cardWidth = 280,
  cardHeight = 380,
  playButtonProps = {},
  expandButtonProps = {},
  badgeClass = '',
  stackInDuration = 1500,
  stackOutDuration = 1000,
  headerContent = null,
  footerContent = null,
  infoButton = null,
  galleryAnimate = true
}) => {
  const defaultItemsCount = 60;

  // State & Refs
  const [phase, setPhase] = useState(galleryAnimate ? 'loading' : 'interacting');
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [items, setItems] = useState([]);
  const [fullscreenItem, setFullscreenItem] = useState(null);
  const [isInfoVisible, setInfoVisible] = useState(false);
  const [playingVideos, setPlayingVideos] = useState(new Set());

  const rootRef = useRef(null);
  const galleryRef = useRef(null);
  const position = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const pointerMoved = useRef(false);
  const lastPointer = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);
  const animationPhase = useRef('initial');

  const config = useMemo(() => {
    // Calculate optimal grid size based on number of items
    const totalItems = itemsData.length || defaultItemsCount;
    const minItems = 20;
    const actualItems = Math.max(totalItems, minItems);
    
    // Calculate grid dimensions to fit all items optimally
    let gridX, gridY;
    
    if (actualItems === 20) {
      // For exactly 20 items, use the optimal 5x4 grid
      gridX = 5;
      gridY = 4;
    } else {
      // For more items, find the most square-like arrangement
      // that can fit all items without gaps
      gridY = Math.floor(Math.sqrt(actualItems));
      while (actualItems % gridY !== 0 && gridY > 1) {
        gridY--;
      }
      gridX = Math.ceil(actualItems / gridY);
    }
    
    return {
      itemWidth: cardWidth,
      itemHeight: cardHeight,
      gridSpacing: 120,
      gridSize: { x: gridX, y: gridY },
      dragSpeed: 1.5,
      inertiaFactor: 0.92,
      viewportBuffer: 2.5,
      colors: ['#EF5350', '#EC407A', '#AB47BC', '#7E57C2', '#5C6BC0', '#42A5F5', '#29B6F6', '#26C6DA', '#26A69A', '#66BB6A', '#9CCC65', '#D4E157', '#FFEE58', '#FFCA28', '#FFA726', '#FF7043']
    };
  }, [cardWidth, cardHeight, itemsData.length, defaultItemsCount]);

  const useFallback = useMemo(() => itemsData.length === 0, [itemsData.length]);

  const baseTemplates = useMemo(() => {
    return useFallback
      ? Array.from({ length: defaultItemsCount }).map((_, i) => ({
          id: i + 1,
          type: 'html',
          content: '', 
          color: config.colors[i % config.colors.length],
          rotation: (Math.random() - 0.5) * 4,
          scale: 0.95 + Math.random() * 0.1,
          isTemplate: true
        }))
      : itemsData.map((item, i) => ({
          id: item.id ?? i + 1,
          type: item.type,
          content: item.content,
          badgeText: item.badgeText,
          color: item.color ?? config.colors[i % config.colors.length],
          rotation: item.rotation ?? ((Math.random() - 0.5) * 4),
          scale: item.scale ?? (0.95 + Math.random() * 0.1),
          isTemplate: true
        }));
  }, [useFallback, itemsData, defaultItemsCount, config.colors]);

  // Initial loading and tiling effect
  useEffect(() => {
    const totalItemsToLoad = baseTemplates.length;
    let loaded = 0;
    const loadingInterval = setInterval(() => {
      loaded++;
      setLoadingProgress(Math.min(100, Math.round((loaded / totalItemsToLoad) * 100)));
      if (loaded >= totalItemsToLoad) {
        clearInterval(loadingInterval);
        if (galleryAnimate) {
          setTimeout(() => setPhase('animating'), 500);
        }
      }
    }, 30);

    // Calculate module dimensions
    const moduleW = config.gridSize.x * (config.itemWidth + config.gridSpacing);
    const moduleH = config.gridSize.y * (config.itemHeight + config.gridSpacing);
    
    // Ensure we have enough modules to cover the viewport with buffer zone
    const modulesX = Math.max(3, Math.ceil((window.innerWidth * config.viewportBuffer * 2) / moduleW) + 1);
    const modulesY = Math.max(3, Math.ceil((window.innerHeight * config.viewportBuffer * 2) / moduleH) + 1);
    
    // console.log(`Creating ${modulesX}x${modulesY} modules for infinite scrolling`);
    
    // Create items in a grid pattern that repeats
    const allItems = [];
    let k = 0;
    
    // Position modules so they're centered around the origin
    const offsetX = -Math.floor(modulesX / 2) * moduleW;
    const offsetY = -Math.floor(modulesY / 2) * moduleH;
    
    // Generate a unique grid-based position for each card
    for (let my = 0; my < modulesY; my++) {
      for (let mx = 0; mx < modulesX; mx++) {
        baseTemplates.forEach((t, idx) => {
          // Calculate grid position within module
          const itemsPerRow = config.gridSize.x;
          
          // Simple grid layout - items fill rows completely before moving to next row
          const gx = idx % itemsPerRow;
          const gy = Math.floor(idx / itemsPerRow);
          
          // Calculate absolute position with adjusted spacing
          const x = offsetX + mx * moduleW + gx * (config.itemWidth + config.gridSpacing);
          const y = offsetY + my * moduleH + gy * (config.itemHeight + config.gridSpacing);
          
          const newItem = {
            ...t,
            key: k++,
            moduleX: mx,
            moduleY: my,
            gridX: gx,
            gridY: gy,
            baseTransform: `translate(${x}px,${y}px) rotate(${t.rotation}deg) scale(${t.scale})`
          };
          
       
          
          allItems.push(newItem);
        });
      }
    }
    setItems(allItems);

    if (!galleryAnimate) {
      setPhase('interacting');
      setLoadingProgress(100);
    }

    return () => clearInterval(loadingInterval);
  }, [baseTemplates, config, galleryAnimate]);

  // Animation choreographer
  useEffect(() => {
    if (!galleryAnimate) {
      // For non-animated case, ensure all items are visible immediately
      if (galleryRef.current) {
        const allCards = Array.from(galleryRef.current.children);
        allCards.forEach(card => {
          card.style.opacity = '1';
          card.style.transition = 'none';
        });
      }
      return;
    }
    
    if (phase !== 'animating' || !galleryRef.current) return;
        
    const templateCount = baseTemplates.length;
    const allCards = Array.from(galleryRef.current.children);
    const templateCards = allCards.slice(0, templateCount);
    const restCards = allCards.slice(templateCount);
    
    // Hide all non-template cards initially
    restCards.forEach(card => {
      card.style.opacity = '0';
    });
    
    // IMPORTANT: Store the final positions from our items data
    templateCards.forEach((card, idx) => {
      // Get the corresponding item data
      const item = items[idx];
      card._finalTransform = item.baseTransform;
    });
    
    // Now position cards off-screen (with no transition)
    templateCards.forEach((card, idx) => {
      const angle = (idx / templateCount) * Math.PI * 2;
      const radius = Math.max(window.innerWidth, window.innerHeight) * 0.7;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      card.style.transition = 'none';
      card.style.transform = `translate(${x}px, ${y}px) scale(0.3)`;
    });
    
    // Force browser to apply the initial positions before starting animation
    const forceReflow = galleryRef.current.offsetHeight; // This triggers a reflow
    
    
    // Step 2: After a short delay, animate cards to center
    setTimeout(() => {
      
      templateCards.forEach((card, idx) => {
        card.style.transition = `transform ${stackInDuration}ms cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 30}ms`;
        card.style.transform = `translate(calc(50vw - 50%), calc(50vh - 50%)) rotate(${(idx % 2 - 0.5) * 4}deg) scale(1)`;
      });
      
      // Step 3: After stack-in completes, animate to final positions
      setTimeout(() => {
        
        templateCards.forEach((card, idx) => {
          // Use the stored final transform
          card.style.transition = `transform ${stackOutDuration}ms cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 30}ms`;
          card.style.transform = card._finalTransform;
        });
        
        // Fade in the rest of the cards
        setTimeout(() => {
          
          restCards.forEach(card => {
            card.style.transition = 'opacity 0.5s ease-in';
            card.style.opacity = '1';
          });
          
          // Finally, set to interactive mode
          setTimeout(() => {
            
            // IMPORTANT: Freeze all card positions where they are
            // and reset container transform to enable dragging
            const allCards = Array.from(galleryRef.current.children);
            allCards.forEach((card, idx) => {
              // Instead of using computed style which might be inaccurate,
              // directly use the baseTransform from our items data
              const item = items[idx];
              if (!item) return; // Safety check
              
              // Apply the exact transform from our data structure
              card.style.transition = 'none';
              card.style.transform = item.baseTransform;
              card.style.opacity = '1'; // <-- Ensure visible
            });
            
            // Reset container position to prepare for dragging
            // But keep it centered on the module grid
            if (galleryRef.current) {
              // Start at the center of the grid
              position.current = { x: 0, y: 0 };
              velocity.current = { x: 0, y: 0 };
              galleryRef.current.style.transition = 'none';
              galleryRef.current.style.transform = 'translate(0px, 0px)';
              galleryRef.current.style.opacity = '1'; // <-- Ensure visible
              
              // Make sure pointer events are enabled for dragging
              galleryRef.current.style.pointerEvents = 'auto';
            }
            
            setPhase('interacting');
          }, 500);
        }, stackOutDuration / 2);
      }, stackInDuration + 100);
    }, 100);
    
    // No cleanup needed for this animation as it will be overridden if phase changes
  }, [phase, baseTemplates.length, stackInDuration, stackOutDuration, items, galleryAnimate]);

  // Drag handlers
  const handleDown = useCallback(e => {
    if (phase !== 'interacting') return; // Only allow dragging in interactive phase
    
    isDragging.current = true;
    pointerMoved.current = false;
    lastPointer.current = { x: e.clientX, y: e.clientY };
    if (rootRef.current) rootRef.current.style.cursor = 'grabbing';
    e.preventDefault();
  }, [phase]);
  
  const handleMove = useCallback(e => {
    if (!isDragging.current || phase !== 'interacting') return;
    
    pointerMoved.current = true;
    const dx = e.clientX - lastPointer.current.x;
    const dy = e.clientY - lastPointer.current.y;
    position.current.x += dx * config.dragSpeed;
    position.current.y += dy * config.dragSpeed;
    velocity.current = { x: dx * config.dragSpeed, y: dy * config.dragSpeed };
    lastPointer.current = { x: e.clientX, y: e.clientY };
    
    // Apply the transform to the gallery container directly
    if (galleryRef.current) {
      galleryRef.current.style.transform = `translate(${position.current.x}px, ${position.current.y}px)`;
    }
  }, [phase, config.dragSpeed]);
  
  const handleUp = useCallback(() => {
    if (phase !== 'interacting') return;
    
    isDragging.current = false;
    if (rootRef.current) rootRef.current.style.cursor = 'grab';
    
    // Start inertia animation if we have velocity
    if (Math.abs(velocity.current.x) > 0.1 || Math.abs(velocity.current.y) > 0.1) {
      if (!rafId.current) {
        rafId.current = requestAnimationFrame(animate);
      }
    }
  }, [phase]);
  
  const animate = useCallback(() => {
    if (phase !== 'interacting') {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
      return;
    }
    
    update();
    rafId.current = requestAnimationFrame(animate);
  }, [phase]);
  
  const update = useCallback(() => {
    velocity.current.x *= config.inertiaFactor;
    velocity.current.y *= config.inertiaFactor;
    position.current.x += velocity.current.x;
    position.current.y += velocity.current.y;
    
    // Calculate the module width and height for wrapping
    const moduleW = config.gridSize.x * (config.itemWidth + config.gridSpacing);
    const moduleH = config.gridSize.y * (config.itemHeight + config.gridSpacing);
    
    // Apply proper wrapping for infinite effect
    // We need to use a different approach than simple modulo
    // to ensure smooth wrapping in both directions
    
    // For X axis
    if (position.current.x > 0) {
      // Moving right - wrap when exceeding one module to the right
      if (position.current.x > moduleW) {
        position.current.x -= moduleW;
      }
    } else {
      // Moving left - wrap when exceeding one module to the left
      if (Math.abs(position.current.x) > moduleW) {
        position.current.x += moduleW;
      }
    }
    
    // For Y axis
    if (position.current.y > 0) {
      // Moving down - wrap when exceeding one module down
      if (position.current.y > moduleH) {
        position.current.y -= moduleH;
      }
    } else {
      // Moving up - wrap when exceeding one module up
      if (Math.abs(position.current.y) > moduleH) {
        position.current.y += moduleH;
      }
    }
    
    // Apply the transform to the gallery container directly
    if (galleryRef.current) {
      galleryRef.current.style.transform = `translate(${position.current.x}px, ${position.current.y}px)`;
    }
    
    // Stop animation if velocity is very low
    if (Math.abs(velocity.current.x) < 0.1 && Math.abs(velocity.current.y) < 0.1) {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
    }
  }, [config.inertiaFactor, config.gridSize, config.itemWidth, config.itemHeight, config.gridSpacing]);
  
  useEffect(() => {
    const r = rootRef.current;
    if (!r) return;
    
    // Only set up event listeners in interactive phase
    if (phase === 'interacting') {
      r.addEventListener('mousedown', handleDown);
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleUp);
      r.addEventListener('touchstart', handleDown, { passive: false });
      window.addEventListener('touchmove', handleMove, { passive: false });
      window.addEventListener('touchend', handleUp);
      
      return () => {
        r.removeEventListener('mousedown', handleDown);
        window.removeEventListener('mousemove', handleMove);
        window.removeEventListener('mouseup', handleUp);
        r.removeEventListener('touchstart', handleDown);
        window.removeEventListener('touchmove', handleMove);
        window.removeEventListener('touchend', handleUp);
      };
    }
  }, [phase, handleDown, handleMove, handleUp]);
  
  // Update the gallery position whenever the position ref changes
  useEffect(() => {
    if (phase === 'interacting' && galleryRef.current) {
      
      // Make sure we only apply container transform in interacting phase
      galleryRef.current.style.pointerEvents = 'auto';
      
      // Apply transform to container (not to individual items)
      requestAnimationFrame(() => {
        if (galleryRef.current) {
          galleryRef.current.style.transition = 'none';
          galleryRef.current.style.transform = `translate(${position.current.x}px, ${position.current.y}px)`;
        }
      });
    }
  }, [phase]);

  // Click and control
  const handleItemClick = (item, e) => { if (!pointerMoved.current) { setFullscreenItem(item); e.stopPropagation(); }};
  const closeFullscreen = () => setFullscreenItem(null);
  const showInfoPanel = () => { setInfoVisible(true); setTimeout(() => setInfoVisible(false), 3000); };
  const resetView = () => { position.current = { x:0,y:0 }; velocity.current = { x:0,y:0 }; };
  // Destructure customization props for badge and expand button
  const { className: playBtnClassName = '', style: playBtnStyle = {}, children: playBtnChildren, ...playBtnRest } = playButtonProps;
  const { className: expandBtnClassName = '', style: expandBtnStyle = {}, children: expandBtnChildren, ...expandBtnRest } = expandButtonProps;

  // Helper for SVG patterns
  const createSVGPattern = (i) => {
    const types = [
      (i) => { const c=[]; const count=3+(i%4); for(let j=0;j<count;j++){ const r=40-j*10; const o=0.1+j*0.1; c.push(`<circle cx="50" cy="50" r="${r}" fill="rgba(255,255,255,${o})"/>`);} return `<svg width="100%" height="100%" viewBox="0 0 100 100">${c.join('')}</svg>`; },
      (i) => { const l=[]; const count=3+(i%5); const s=100/(count+1); for(let j=0;j<count;j++){ const y=s*(j+1); l.push(`<line x1="0" y1="${y}" x2="100" y2="${y}" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>`);} return `<svg width="100%" height="100%" viewBox="0 0 100 100">${l.join('')}</svg>`; },
      (i) => { const d=[]; const m=2+(i%4); const s=100/m; for(let k=1;k<m;k++){ d.push(`<line x1="0" y1="${k*s}" x2="100" y2="${k*s}" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>`); d.push(`<line x1="${k*s}" y1="0" x2="${k*s}" y2="100" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>`);} return `<svg width="100%" height="100%" viewBox="0 0 100 100">${d.join('')}</svg>`; }
    ];
    return types[i%types.length](i);
  };

  // Video playback handlers
  const handleVideoPlay = (videoId) => {
    setPlayingVideos(prev => new Set([...prev, videoId]));
  };

  const handleVideoPause = (videoId) => {
    setPlayingVideos(prev => {
      const next = new Set(prev);
      next.delete(videoId);
      return next;
    });
  };

  return (
    <div className="ig-root" ref={rootRef} style={{ cursor: phase === 'interacting' ? 'grab' : 'default', overflow: 'hidden' }}>
      {phase === 'loading' && (
        <div className="ig-loader">
          <div className="ig-loader-content">
            <div className="ig-loader-spinner"></div>
            <p>Loading gallery... {loadingProgress}%</p>
          </div>
        </div>
      )}

      <div className="ig-gallery-container" ref={galleryRef} style={{ opacity: phase === 'loading' ? 0 : 1, transition: 'opacity 0.5s ease-in' }}>
        {items.map((item, idx) => {
          const isTemplate = idx < baseTemplates.length;
          
          // Keep styling simple - let the animation useEffect handle all transforms
          const style = {
            width: `${config.itemWidth}px`,
            height: `${config.itemHeight}px`,
            transform: item.baseTransform, // Initial position
            opacity: phase === 'animating' && !isTemplate ? 0 : 1 // Hide non-templates during animation
          };
          
          return (
            <div
              key={item.key}
              className="ig-gallery-item"
              style={style}
              onClick={e => { if (item.type !== 'video' && phase === 'interacting') handleItemClick(item, e); }}
            >
              <div className="ig-gallery-item-content">
                {useFallback && <div dangerouslySetInnerHTML={{ __html: createSVGPattern(item.id) }} />}
                {item.type === 'html' && !useFallback && <div dangerouslySetInnerHTML={{ __html: item.content }} />}
                {item.type === 'image' && <img src={item.content} alt={`Item ${item.id}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} draggable="false" />}
                {item.type === 'video' && (
                  <div 
                    style={{ width: '100%', height: '100%', position: 'relative' }}
                    onClick={e => {
                      e.stopPropagation();
                      const video = e.currentTarget.querySelector('video');
                      if (video.paused) {
                        video.play();
                      } else {
                        video.pause();
                      }
                    }}
                  >
                    <video 
                      src={item.content} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      muted 
                      loop 
                      playsInline 
                      preload="metadata" 
                      draggable="false"
                      onPlay={() => handleVideoPlay(item.id)}
                      onPause={() => handleVideoPause(item.id)}
                    />
                    {!playingVideos.has(item.id) && (
                      <button 
                        className={`ig-btn ig-play-btn ${playBtnClassName}`} 
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: '70px',
                          height: '70px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(0, 0, 0, 0.5)',
                          border: 'none',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          zIndex: 2,
                          ...playBtnStyle
                        }}
                        {...playBtnRest}
                      >
                        {playBtnChildren || <svg viewBox="0 0 24 24" width="32" height="32"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>}
                      </button>
                    )}
                    <button 
                      className={`ig-btn ig-expand-btn ${expandBtnClassName}`} 
                      style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        border: 'none',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: 2,
                        ...expandBtnStyle
                      }} 
                      onClick={e => {
                        e.stopPropagation();
                        handleItemClick(item, e);
                      }}
                      {...expandBtnRest}
                    >
                      {expandBtnChildren || <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>}
                    </button>
                  </div>
                )}
                {item.badgeText && (
                  <div 
                    className={`ig-gallery-item-number ${badgeClass}`}
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '10px',
                      backgroundColor: 'rgba(0, 0, 0, 0.85)',
                      color: 'white',
                      padding: '5px 10px',
                      borderRadius: '4px',
                      fontSize: '13px',
                      fontWeight: 'bold',
                      zIndex: 999,
                      display: 'block'
                    }}
                  >
                    {item.badgeText}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className={`ig-ui-layer ${phase === 'interacting' ? 'visible' : ''}`}>
        {headerContent && (
          <div className="ig-header">{headerContent}</div>
        )}
        {footerContent && (
          <div className="ig-footer">{footerContent}</div>
        )}
      </div>

      {/* Fullscreen view */}
      {fullscreenItem && (
        <div className="ig-fullscreen-view active" onClick={closeFullscreen}>
          <div className="ig-fullscreen-content" onClick={e => e.stopPropagation()}>
            {fullscreenItem.type === 'image' && (
              <img 
                src={fullscreenItem.content} 
                alt={`Fullscreen ${fullscreenItem.id}`} 
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} 
              />
            )}
            {fullscreenItem.type === 'video' && (
              <video 
                src={fullscreenItem.content} 
                controls 
                autoPlay 
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
              />
            )}
            {fullscreenItem.type === 'html' && (
              <div 
                dangerouslySetInnerHTML={{ __html: fullscreenItem.content }}
                style={{ maxWidth: '100%', maxHeight: '100%', background: '#fff', padding: '20px' }}
              />
            )}
          </div>
          <div className="ig-fullscreen-close" onClick={closeFullscreen}></div>
        </div>
      )}
    </div>
  );
};

export default InfiniteGallery;