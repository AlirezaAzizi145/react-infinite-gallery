"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./InfiniteGallery.css");
var _excluded = ["className", "style", "children"],
  _excluded2 = ["className", "style", "children"],
  _excluded3 = ["className", "style", "children"];
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Inline video player with thumbnail and centered round play button overlay
var InlineVideo = function InlineVideo(_ref) {
  var src = _ref.src,
    style = _ref.style,
    _ref$playButtonProps = _ref.playButtonProps,
    playButtonProps = _ref$playButtonProps === void 0 ? {} : _ref$playButtonProps;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    playing = _useState2[0],
    setPlaying = _useState2[1];
  var videoRef = (0, _react.useRef)(null);
  var handleToggle = function handleToggle(e) {
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
  var _playButtonProps$clas = playButtonProps.className,
    playBtnClassName = _playButtonProps$clas === void 0 ? '' : _playButtonProps$clas,
    _playButtonProps$styl = playButtonProps.style,
    playBtnStyle = _playButtonProps$styl === void 0 ? {} : _playButtonProps$styl,
    playBtnChildren = playButtonProps.children,
    playBtnRest = _objectWithoutProperties(playButtonProps, _excluded);
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      position: 'relative'
    },
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/_react["default"].createElement("video", {
    ref: videoRef,
    src: src,
    style: style,
    loop: true,
    muted: true,
    playsInline: true,
    preload: "metadata",
    onClick: handleToggle
  }), !playing && /*#__PURE__*/_react["default"].createElement("button", _extends({
    onClick: handleToggle,
    className: "ig-play-btn ".concat(playBtnClassName),
    style: playBtnStyle
  }, playBtnRest), playBtnChildren || '▶'));
};
var InfiniteGallery = function InfiniteGallery(_ref2) {
  var _ref2$itemsData = _ref2.itemsData,
    itemsData = _ref2$itemsData === void 0 ? [] : _ref2$itemsData,
    _ref2$cardWidth = _ref2.cardWidth,
    cardWidth = _ref2$cardWidth === void 0 ? 280 : _ref2$cardWidth,
    _ref2$cardHeight = _ref2.cardHeight,
    cardHeight = _ref2$cardHeight === void 0 ? 380 : _ref2$cardHeight,
    _ref2$playButtonProps = _ref2.playButtonProps,
    playButtonProps = _ref2$playButtonProps === void 0 ? {} : _ref2$playButtonProps,
    _ref2$expandButtonPro = _ref2.expandButtonProps,
    expandButtonProps = _ref2$expandButtonPro === void 0 ? {} : _ref2$expandButtonPro,
    _ref2$badgeClass = _ref2.badgeClass,
    badgeClass = _ref2$badgeClass === void 0 ? '' : _ref2$badgeClass,
    _ref2$stackInDuration = _ref2.stackInDuration,
    stackInDuration = _ref2$stackInDuration === void 0 ? 1500 : _ref2$stackInDuration,
    _ref2$stackOutDuratio = _ref2.stackOutDuration,
    stackOutDuration = _ref2$stackOutDuratio === void 0 ? 1000 : _ref2$stackOutDuratio,
    _ref2$headerContent = _ref2.headerContent,
    headerContent = _ref2$headerContent === void 0 ? null : _ref2$headerContent,
    _ref2$footerContent = _ref2.footerContent,
    footerContent = _ref2$footerContent === void 0 ? null : _ref2$footerContent,
    _ref2$infoButton = _ref2.infoButton,
    infoButton = _ref2$infoButton === void 0 ? null : _ref2$infoButton,
    _ref2$galleryAnimate = _ref2.galleryAnimate,
    galleryAnimate = _ref2$galleryAnimate === void 0 ? true : _ref2$galleryAnimate;
  var defaultItemsCount = 60;

  // State & Refs
  var _useState3 = (0, _react.useState)(galleryAnimate ? 'loading' : 'interacting'),
    _useState4 = _slicedToArray(_useState3, 2),
    phase = _useState4[0],
    setPhase = _useState4[1];
  var _useState5 = (0, _react.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    loadingProgress = _useState6[0],
    setLoadingProgress = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    items = _useState8[0],
    setItems = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState0 = _slicedToArray(_useState9, 2),
    fullscreenItem = _useState0[0],
    setFullscreenItem = _useState0[1];
  var _useState1 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    isInfoVisible = _useState10[0],
    setInfoVisible = _useState10[1];
  var _useState11 = (0, _react.useState)(new Set()),
    _useState12 = _slicedToArray(_useState11, 2),
    playingVideos = _useState12[0],
    setPlayingVideos = _useState12[1];
  var rootRef = (0, _react.useRef)(null);
  var galleryRef = (0, _react.useRef)(null);
  var position = (0, _react.useRef)({
    x: 0,
    y: 0
  });
  var velocity = (0, _react.useRef)({
    x: 0,
    y: 0
  });
  var isDragging = (0, _react.useRef)(false);
  var pointerMoved = (0, _react.useRef)(false);
  var lastPointer = (0, _react.useRef)({
    x: 0,
    y: 0
  });
  var rafId = (0, _react.useRef)(null);
  var animationPhase = (0, _react.useRef)('initial');
  var config = (0, _react.useMemo)(function () {
    // Calculate optimal grid size based on number of items
    var totalItems = itemsData.length || defaultItemsCount;
    var minItems = 20;
    var actualItems = Math.max(totalItems, minItems);

    // Calculate grid dimensions to fit all items optimally
    var gridX, gridY;
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
      gridSize: {
        x: gridX,
        y: gridY
      },
      dragSpeed: 1.5,
      inertiaFactor: 0.92,
      viewportBuffer: 2.5,
      colors: ['#EF5350', '#EC407A', '#AB47BC', '#7E57C2', '#5C6BC0', '#42A5F5', '#29B6F6', '#26C6DA', '#26A69A', '#66BB6A', '#9CCC65', '#D4E157', '#FFEE58', '#FFCA28', '#FFA726', '#FF7043']
    };
  }, [cardWidth, cardHeight, itemsData.length, defaultItemsCount]);
  var useFallback = (0, _react.useMemo)(function () {
    return itemsData.length === 0;
  }, [itemsData.length]);
  var baseTemplates = (0, _react.useMemo)(function () {
    return useFallback ? Array.from({
      length: defaultItemsCount
    }).map(function (_, i) {
      return {
        id: i + 1,
        type: 'html',
        content: '',
        color: config.colors[i % config.colors.length],
        rotation: (Math.random() - 0.5) * 4,
        scale: 0.95 + Math.random() * 0.1,
        isTemplate: true
      };
    }) : itemsData.map(function (item, i) {
      var _item$id, _item$color, _item$rotation, _item$scale;
      return {
        id: (_item$id = item.id) !== null && _item$id !== void 0 ? _item$id : i + 1,
        type: item.type,
        content: item.content,
        badgeText: item.badgeText,
        color: (_item$color = item.color) !== null && _item$color !== void 0 ? _item$color : config.colors[i % config.colors.length],
        rotation: (_item$rotation = item.rotation) !== null && _item$rotation !== void 0 ? _item$rotation : (Math.random() - 0.5) * 4,
        scale: (_item$scale = item.scale) !== null && _item$scale !== void 0 ? _item$scale : 0.95 + Math.random() * 0.1,
        isTemplate: true
      };
    });
  }, [useFallback, itemsData, defaultItemsCount, config.colors]);

  // Initial loading and tiling effect
  (0, _react.useEffect)(function () {
    var totalItemsToLoad = baseTemplates.length;
    var loaded = 0;
    var loadingInterval = setInterval(function () {
      loaded++;
      setLoadingProgress(Math.min(100, Math.round(loaded / totalItemsToLoad * 100)));
      if (loaded >= totalItemsToLoad) {
        clearInterval(loadingInterval);
        if (galleryAnimate) {
          setTimeout(function () {
            return setPhase('animating');
          }, 500);
        }
      }
    }, 30);

    // Calculate module dimensions
    var moduleW = config.gridSize.x * (config.itemWidth + config.gridSpacing);
    var moduleH = config.gridSize.y * (config.itemHeight + config.gridSpacing);

    // Ensure we have enough modules to cover the viewport with buffer zone
    var modulesX = Math.max(3, Math.ceil(window.innerWidth * config.viewportBuffer * 2 / moduleW) + 1);
    var modulesY = Math.max(3, Math.ceil(window.innerHeight * config.viewportBuffer * 2 / moduleH) + 1);

    // console.log(`Creating ${modulesX}x${modulesY} modules for infinite scrolling`);

    // Create items in a grid pattern that repeats
    var allItems = [];
    var k = 0;

    // Position modules so they're centered around the origin
    var offsetX = -Math.floor(modulesX / 2) * moduleW;
    var offsetY = -Math.floor(modulesY / 2) * moduleH;

    // Generate a unique grid-based position for each card
    var _loop = function _loop(my) {
      var _loop2 = function _loop2(mx) {
        baseTemplates.forEach(function (t, idx) {
          // Calculate grid position within module
          var itemsPerRow = config.gridSize.x;

          // Simple grid layout - items fill rows completely before moving to next row
          var gx = idx % itemsPerRow;
          var gy = Math.floor(idx / itemsPerRow);

          // Calculate absolute position with adjusted spacing
          var x = offsetX + mx * moduleW + gx * (config.itemWidth + config.gridSpacing);
          var y = offsetY + my * moduleH + gy * (config.itemHeight + config.gridSpacing);
          var newItem = _objectSpread(_objectSpread({}, t), {}, {
            key: k++,
            moduleX: mx,
            moduleY: my,
            gridX: gx,
            gridY: gy,
            baseTransform: "translate(".concat(x, "px,").concat(y, "px) rotate(").concat(t.rotation, "deg) scale(").concat(t.scale, ")")
          });
          allItems.push(newItem);
        });
      };
      for (var mx = 0; mx < modulesX; mx++) {
        _loop2(mx);
      }
    };
    for (var my = 0; my < modulesY; my++) {
      _loop(my);
    }
    setItems(allItems);
    if (!galleryAnimate) {
      setPhase('interacting');
      setLoadingProgress(100);
    }
    return function () {
      return clearInterval(loadingInterval);
    };
  }, [baseTemplates, config, galleryAnimate]);

  // Animation choreographer
  (0, _react.useEffect)(function () {
    if (!galleryAnimate) {
      // For non-animated case, ensure all items are visible immediately
      if (galleryRef.current) {
        var _allCards = Array.from(galleryRef.current.children);
        _allCards.forEach(function (card) {
          card.style.opacity = '1';
          card.style.transition = 'none';
        });
      }
      return;
    }
    if (phase !== 'animating' || !galleryRef.current) return;
    var templateCount = baseTemplates.length;
    var allCards = Array.from(galleryRef.current.children);
    var templateCards = allCards.slice(0, templateCount);
    var restCards = allCards.slice(templateCount);

    // Hide all non-template cards initially
    restCards.forEach(function (card) {
      card.style.opacity = '0';
    });

    // IMPORTANT: Store the final positions from our items data
    templateCards.forEach(function (card, idx) {
      // Get the corresponding item data
      var item = items[idx];
      card._finalTransform = item.baseTransform;
    });

    // Now position cards off-screen (with no transition)
    templateCards.forEach(function (card, idx) {
      var angle = idx / templateCount * Math.PI * 2;
      var radius = Math.max(window.innerWidth, window.innerHeight) * 0.7;
      var x = Math.cos(angle) * radius;
      var y = Math.sin(angle) * radius;
      card.style.transition = 'none';
      card.style.transform = "translate(".concat(x, "px, ").concat(y, "px) scale(0.3)");
    });

    // Force browser to apply the initial positions before starting animation
    var forceReflow = galleryRef.current.offsetHeight; // This triggers a reflow

    // Step 2: After a short delay, animate cards to center
    setTimeout(function () {
      templateCards.forEach(function (card, idx) {
        card.style.transition = "transform ".concat(stackInDuration, "ms cubic-bezier(0.34, 1.56, 0.64, 1) ").concat(idx * 30, "ms");
        card.style.transform = "translate(calc(50vw - 50%), calc(50vh - 50%)) rotate(".concat((idx % 2 - 0.5) * 4, "deg) scale(1)");
      });

      // Step 3: After stack-in completes, animate to final positions
      setTimeout(function () {
        templateCards.forEach(function (card, idx) {
          // Use the stored final transform
          card.style.transition = "transform ".concat(stackOutDuration, "ms cubic-bezier(0.34, 1.56, 0.64, 1) ").concat(idx * 30, "ms");
          card.style.transform = card._finalTransform;
        });

        // Fade in the rest of the cards
        setTimeout(function () {
          restCards.forEach(function (card) {
            card.style.transition = 'opacity 0.5s ease-in';
            card.style.opacity = '1';
          });

          // Finally, set to interactive mode
          setTimeout(function () {
            // IMPORTANT: Freeze all card positions where they are
            // and reset container transform to enable dragging
            var allCards = Array.from(galleryRef.current.children);
            allCards.forEach(function (card, idx) {
              // Instead of using computed style which might be inaccurate,
              // directly use the baseTransform from our items data
              var item = items[idx];
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
              position.current = {
                x: 0,
                y: 0
              };
              velocity.current = {
                x: 0,
                y: 0
              };
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
  var handleDown = (0, _react.useCallback)(function (e) {
    if (phase !== 'interacting') return; // Only allow dragging in interactive phase

    isDragging.current = true;
    pointerMoved.current = false;
    lastPointer.current = {
      x: e.clientX,
      y: e.clientY
    };
    if (rootRef.current) rootRef.current.style.cursor = 'grabbing';
    e.preventDefault();
  }, [phase]);
  var handleMove = (0, _react.useCallback)(function (e) {
    if (!isDragging.current || phase !== 'interacting') return;
    pointerMoved.current = true;
    var dx = e.clientX - lastPointer.current.x;
    var dy = e.clientY - lastPointer.current.y;
    position.current.x += dx * config.dragSpeed;
    position.current.y += dy * config.dragSpeed;
    velocity.current = {
      x: dx * config.dragSpeed,
      y: dy * config.dragSpeed
    };
    lastPointer.current = {
      x: e.clientX,
      y: e.clientY
    };

    // Apply the transform to the gallery container directly
    if (galleryRef.current) {
      galleryRef.current.style.transform = "translate(".concat(position.current.x, "px, ").concat(position.current.y, "px)");
    }
  }, [phase, config.dragSpeed]);
  var handleUp = (0, _react.useCallback)(function () {
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
  var animate = (0, _react.useCallback)(function () {
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
  var update = (0, _react.useCallback)(function () {
    velocity.current.x *= config.inertiaFactor;
    velocity.current.y *= config.inertiaFactor;
    position.current.x += velocity.current.x;
    position.current.y += velocity.current.y;

    // Calculate the module width and height for wrapping
    var moduleW = config.gridSize.x * (config.itemWidth + config.gridSpacing);
    var moduleH = config.gridSize.y * (config.itemHeight + config.gridSpacing);

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
      galleryRef.current.style.transform = "translate(".concat(position.current.x, "px, ").concat(position.current.y, "px)");
    }

    // Stop animation if velocity is very low
    if (Math.abs(velocity.current.x) < 0.1 && Math.abs(velocity.current.y) < 0.1) {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
    }
  }, [config.inertiaFactor, config.gridSize, config.itemWidth, config.itemHeight, config.gridSpacing]);
  (0, _react.useEffect)(function () {
    var r = rootRef.current;
    if (!r) return;

    // Only set up event listeners in interactive phase
    if (phase === 'interacting') {
      r.addEventListener('mousedown', handleDown);
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleUp);
      r.addEventListener('touchstart', handleDown, {
        passive: false
      });
      window.addEventListener('touchmove', handleMove, {
        passive: false
      });
      window.addEventListener('touchend', handleUp);
      return function () {
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
  (0, _react.useEffect)(function () {
    if (phase === 'interacting' && galleryRef.current) {
      // Make sure we only apply container transform in interacting phase
      galleryRef.current.style.pointerEvents = 'auto';

      // Apply transform to container (not to individual items)
      requestAnimationFrame(function () {
        if (galleryRef.current) {
          galleryRef.current.style.transition = 'none';
          galleryRef.current.style.transform = "translate(".concat(position.current.x, "px, ").concat(position.current.y, "px)");
        }
      });
    }
  }, [phase]);

  // Click and control
  var handleItemClick = function handleItemClick(item, e) {
    if (!pointerMoved.current) {
      setFullscreenItem(item);
      e.stopPropagation();
    }
  };
  var closeFullscreen = function closeFullscreen() {
    return setFullscreenItem(null);
  };
  var showInfoPanel = function showInfoPanel() {
    setInfoVisible(true);
    setTimeout(function () {
      return setInfoVisible(false);
    }, 3000);
  };
  var resetView = function resetView() {
    position.current = {
      x: 0,
      y: 0
    };
    velocity.current = {
      x: 0,
      y: 0
    };
  };
  // Destructure customization props for badge and expand button
  var _playButtonProps$clas2 = playButtonProps.className,
    playBtnClassName = _playButtonProps$clas2 === void 0 ? '' : _playButtonProps$clas2,
    _playButtonProps$styl2 = playButtonProps.style,
    playBtnStyle = _playButtonProps$styl2 === void 0 ? {} : _playButtonProps$styl2,
    playBtnChildren = playButtonProps.children,
    playBtnRest = _objectWithoutProperties(playButtonProps, _excluded2);
  var _expandButtonProps$cl = expandButtonProps.className,
    expandBtnClassName = _expandButtonProps$cl === void 0 ? '' : _expandButtonProps$cl,
    _expandButtonProps$st = expandButtonProps.style,
    expandBtnStyle = _expandButtonProps$st === void 0 ? {} : _expandButtonProps$st,
    expandBtnChildren = expandButtonProps.children,
    expandBtnRest = _objectWithoutProperties(expandButtonProps, _excluded3);

  // Helper for SVG patterns
  var createSVGPattern = function createSVGPattern(i) {
    var types = [function (i) {
      var c = [];
      var count = 3 + i % 4;
      for (var j = 0; j < count; j++) {
        var r = 40 - j * 10;
        var o = 0.1 + j * 0.1;
        c.push("<circle cx=\"50\" cy=\"50\" r=\"".concat(r, "\" fill=\"rgba(255,255,255,").concat(o, ")\"/>"));
      }
      return "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\">".concat(c.join(''), "</svg>");
    }, function (i) {
      var l = [];
      var count = 3 + i % 5;
      var s = 100 / (count + 1);
      for (var j = 0; j < count; j++) {
        var y = s * (j + 1);
        l.push("<line x1=\"0\" y1=\"".concat(y, "\" x2=\"100\" y2=\"").concat(y, "\" stroke=\"rgba(255,255,255,0.2)\" stroke-width=\"2\"/>"));
      }
      return "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\">".concat(l.join(''), "</svg>");
    }, function (i) {
      var d = [];
      var m = 2 + i % 4;
      var s = 100 / m;
      for (var k = 1; k < m; k++) {
        d.push("<line x1=\"0\" y1=\"".concat(k * s, "\" x2=\"100\" y2=\"").concat(k * s, "\" stroke=\"rgba(255,255,255,0.2)\" stroke-width=\"1\"/>"));
        d.push("<line x1=\"".concat(k * s, "\" y1=\"0\" x2=\"").concat(k * s, "\" y2=\"100\" stroke=\"rgba(255,255,255,0.2)\" stroke-width=\"1\"/>"));
      }
      return "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\">".concat(d.join(''), "</svg>");
    }];
    return types[i % types.length](i);
  };

  // Video playback handlers
  var handleVideoPlay = function handleVideoPlay(videoId) {
    setPlayingVideos(function (prev) {
      return new Set([].concat(_toConsumableArray(prev), [videoId]));
    });
  };
  var handleVideoPause = function handleVideoPause(videoId) {
    setPlayingVideos(function (prev) {
      var next = new Set(prev);
      next["delete"](videoId);
      return next;
    });
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "ig-root",
    ref: rootRef,
    style: {
      cursor: phase === 'interacting' ? 'grab' : 'default',
      overflow: 'hidden'
    }
  }, phase === 'loading' && /*#__PURE__*/_react["default"].createElement("div", {
    className: "ig-loader"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "ig-loader-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "ig-loader-spinner"
  }), /*#__PURE__*/_react["default"].createElement("p", null, "Loading gallery... ", loadingProgress, "%"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "ig-gallery-container",
    ref: galleryRef,
    style: {
      opacity: phase === 'loading' ? 0 : 1,
      transition: 'opacity 0.5s ease-in'
    }
  }, items.map(function (item, idx) {
    var isTemplate = idx < baseTemplates.length;

    // Keep styling simple - let the animation useEffect handle all transforms
    var style = {
      width: "".concat(config.itemWidth, "px"),
      height: "".concat(config.itemHeight, "px"),
      transform: item.baseTransform,
      // Initial position
      opacity: phase === 'animating' && !isTemplate ? 0 : 1 // Hide non-templates during animation
    };
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: item.key,
      className: "ig-gallery-item",
      style: style,
      onClick: function onClick(e) {
        if (item.type !== 'video' && phase === 'interacting') handleItemClick(item, e);
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "ig-gallery-item-content"
    }, useFallback && /*#__PURE__*/_react["default"].createElement("div", {
      dangerouslySetInnerHTML: {
        __html: createSVGPattern(item.id)
      }
    }), item.type === 'html' && !useFallback && /*#__PURE__*/_react["default"].createElement("div", {
      dangerouslySetInnerHTML: {
        __html: item.content
      }
    }), item.type === 'image' && /*#__PURE__*/_react["default"].createElement("img", {
      src: item.content,
      alt: "Item ".concat(item.id),
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      },
      draggable: "false"
    }), item.type === 'video' && /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        position: 'relative'
      },
      onClick: function onClick(e) {
        e.stopPropagation();
        var video = e.currentTarget.querySelector('video');
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      }
    }, /*#__PURE__*/_react["default"].createElement("video", {
      src: item.content,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      },
      muted: true,
      loop: true,
      playsInline: true,
      preload: "metadata",
      draggable: "false",
      onPlay: function onPlay() {
        return handleVideoPlay(item.id);
      },
      onPause: function onPause() {
        return handleVideoPause(item.id);
      }
    }), !playingVideos.has(item.id) && /*#__PURE__*/_react["default"].createElement("button", _extends({
      className: "ig-btn ig-play-btn ".concat(playBtnClassName),
      style: _objectSpread({
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
        zIndex: 2
      }, playBtnStyle)
    }, playBtnRest), playBtnChildren || /*#__PURE__*/_react["default"].createElement("svg", {
      viewBox: "0 0 24 24",
      width: "32",
      height: "32"
    }, /*#__PURE__*/_react["default"].createElement("path", {
      fill: "currentColor",
      d: "M8 5v14l11-7z"
    }))), /*#__PURE__*/_react["default"].createElement("button", _extends({
      className: "ig-btn ig-expand-btn ".concat(expandBtnClassName),
      style: _objectSpread({
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
        zIndex: 2
      }, expandBtnStyle),
      onClick: function onClick(e) {
        e.stopPropagation();
        handleItemClick(item, e);
      }
    }, expandBtnRest), expandBtnChildren || /*#__PURE__*/_react["default"].createElement("svg", {
      viewBox: "0 0 24 24",
      width: "16",
      height: "16"
    }, /*#__PURE__*/_react["default"].createElement("path", {
      fill: "currentColor",
      d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
    })))), item.badgeText && /*#__PURE__*/_react["default"].createElement("div", {
      className: "ig-gallery-item-number ".concat(badgeClass),
      style: {
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
      }
    }, item.badgeText)));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "ig-ui-layer ".concat(phase === 'interacting' ? 'visible' : '')
  }, headerContent && /*#__PURE__*/_react["default"].createElement("div", {
    className: "ig-header"
  }, headerContent), footerContent && /*#__PURE__*/_react["default"].createElement("div", {
    className: "ig-footer"
  }, footerContent)), fullscreenItem && /*#__PURE__*/_react["default"].createElement("div", {
    className: "ig-fullscreen-view active",
    onClick: closeFullscreen
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "ig-fullscreen-content",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, fullscreenItem.type === 'image' && /*#__PURE__*/_react["default"].createElement("img", {
    src: fullscreenItem.content,
    alt: "Fullscreen ".concat(fullscreenItem.id),
    style: {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'cover'
    }
  }), fullscreenItem.type === 'video' && /*#__PURE__*/_react["default"].createElement("video", {
    src: fullscreenItem.content,
    controls: true,
    autoPlay: true,
    style: {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain'
    }
  }), fullscreenItem.type === 'html' && /*#__PURE__*/_react["default"].createElement("div", {
    dangerouslySetInnerHTML: {
      __html: fullscreenItem.content
    },
    style: {
      maxWidth: '100%',
      maxHeight: '100%',
      background: '#fff',
      padding: '20px'
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "ig-fullscreen-close",
    onClick: closeFullscreen
  })));
};
var _default = exports["default"] = InfiniteGallery;
