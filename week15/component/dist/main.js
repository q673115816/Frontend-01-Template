/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Carousel.view":
/*!***********************!*\
  !*** ./Carousel.view ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Carousel_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Carousel.view */ "./Carousel.view");
/* harmony import */ var _Carousel_view__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Carousel_view__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function createElement(Cls, attributes) {
  var o;

  if (typeof Cls === 'string') {
    o = new Wrap(Cls);
  } else {
    o = new Cls();
  }

  for (var name in attributes) {
    o.setAttribute(name, attributes[name]); // o[name] = attributes[name]
  }

  var visit = function visit(children) {
    var _iterator = _createForOfIteratorHelper(children),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var child = _step.value;

        if (typeof child === 'string') {
          return o.appendChildren(new Text(child));
        } else if (child instanceof Array) {
          visit(child);
          continue;
        }

        o.appendChildren(child);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  visit(children); // console.log(arguments)

  return o;
} // class Div {
//     constructor(props) {
//         this.children = []
//         this.root = document.createElement('div')
//     }
//     setAttribute(name, attr) {
//         this.root.setAttribute(name, attr)
//     }
//     appendChildren(child) {
//         this.children.push(child)
//     }
//     mount(parent) {
//         parent.append(this.root)
//         for (let child of this.children) {
//             child.mount(this.root)
//         }
//     }
// }


var Wrap = /*#__PURE__*/function () {
  function Wrap(type) {
    _classCallCheck(this, Wrap);

    this.children = [];
    this.root = document.createElement(type);
  }

  _createClass(Wrap, [{
    key: "setAttribute",
    value: function setAttribute(name, attr) {
      this.root.setAttribute(name, attr);
    }
  }, {
    key: "appendChildren",
    value: function appendChildren(child) {
      this.children.push(child);
    }
  }, {
    key: "addEventListener",
    value: function addEventListener() {
      var _this$root;

      (_this$root = this.root).addEventListener.apply(_this$root, arguments);
    }
  }, {
    key: "mount",
    value: function mount(parent) {
      parent.append(this.root);

      var _iterator2 = _createForOfIteratorHelper(this.children),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var child = _step2.value;
          child.mount(this.root);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "style",
    get: function get() {
      return this.root.style;
    }
  }, {
    key: "clientWidth",
    get: function get() {
      return this.root.clientWidth;
    }
  }]);

  return Wrap;
}();

var Text = /*#__PURE__*/function () {
  function Text(text) {
    _classCallCheck(this, Text);

    this.root = document.createTextNode(text);
  }

  _createClass(Text, [{
    key: "mount",
    value: function mount(parent) {
      parent.append(this.root);
    }
  }]);

  return Text;
}(); // class Carousel {
//     constructor() {
//         this.children = []
//         this.attrs = new Map
//         this.props = new Map
//     }
//     setAttribute(name, attr) {
//         this[name] = attr
//         // this.root.setAttribute(name, attr)
//     }
//     appendChildren(child) {
//         this.children.push(child)
//     }
//     mount(parent) {
//         // parent.append(this.root)
//         // for (let child of this.children) {
//             //     child.mount(this.root)
//             // }
//         this.render().mount(parent)    
//     }
//     render() {
//         let child = this.data.map(url => {
//                         let ele = <img src={url} />
//                         ele.addEventListener('dragstart', (e) => e.preventDefault())
//                         return ele
//                     })
//         let root = (
//             <div class="carousel">
//                 {
//                     child
//                 }
//             </div>
//         )
//         let position = 0
//         let nexPic = () => {
//             let nextPostion = (position + 1) % child.length
//             let curr = child[position]
//             let next = child[nextPostion]
//             curr.style.transition = 'ease 0s'
//             next.style.transition = 'ease 0s'
//             curr.style.transform = `translateX(${- 100 * position}%)`
//             next.style.transform = `translateX(${100 - 100 * nextPostion}%)`
//             // window.innerWidth
//             setTimeout(() => {
//                 curr.style.transition = 'ease 0.4s'
//                 next.style.transition = 'ease 0.4s'
//                 curr.style.transform = `translateX(${-100 - 100 * position}%)`
//                 next.style.transform = `translateX(${-100 * nextPostion}%)`
//                 position = nextPostion
//             }, 16);
//             setTimeout(nexPic, 3000);
//         }
//         // setTimeout(nexPic, 3000)
//         root.addEventListener('mousedown', (e) => {
//             let startX = e.clientX, startY = e.clientY
//             let length = child.length
//             let lastPosition = (position - 1 + length) % length
//             let nextPosition = (position + 1) % length
//             let curr = child[position]
//             let width = curr.clientWidth
//             let last = child[lastPosition]
//             let next = child[nextPosition]
//             curr.style.transition = 'ease 0s'
//             last.style.transition = 'ease 0s'
//             next.style.transition = 'ease 0s'
//             curr.style.transform = `translateX(${- width * position}px)`
//             last.style.transform = `translateX(${-width - width * lastPosition}px)`
//             next.style.transform = `translateX(${width - width * nextPosition}px)`
//             let move = e => {
//                 curr.style.transform = `translateX(${- width * position + e.clientX - startX}px)`
//                 last.style.transform = `translateX(${-width - width * lastPosition + e.clientX - startX}px)`
//                 next.style.transform = `translateX(${width - width * nextPosition + e.clientX - startX}px)`
//             }
//             let up = e => {
//                 let offset = 0
//                 if (e.clientX - startX > width / 3) {
//                     offset = -1
//                 } else if (e.clientX - startX < -width / 3) {
//                     offset = 1
//                 }
//                 console.log(offset)
//                 // curr.style.transition = 'ease 0.4s'
//                 // last.style.transition = 'ease 0.4s'
//                 // next.style.transition = 'ease 0.4s'
//                 curr.style.transform = `translateX(${- width * position - offset * width}px)`
//                 last.style.transform = `translateX(${-width - width * lastPosition - offset * width}px)`
//                 next.style.transform = `translateX(${width - width * nextPosition - offset * width}px)`
//                 position = (position + offset + length) % length
//                 console.log(position)
//                 document.removeEventListener('mousemove', move)
//                 document.removeEventListener('mouseup', up)
//             }
//             document.addEventListener('mousemove', move)
//             document.addEventListener('mouseup', up)
//         })
//         return root
//     }
// }

/** @jsx createElement  */


var carousel = createElement(_Carousel_view__WEBPACK_IMPORTED_MODULE_0___default.a, {
  data: ['./img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg']
});
carousel.mount(document.body);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5qcyJdLCJuYW1lcyI6WyJjcmVhdGVFbGVtZW50IiwiQ2xzIiwiYXR0cmlidXRlcyIsIm8iLCJXcmFwIiwibmFtZSIsInNldEF0dHJpYnV0ZSIsInZpc2l0IiwiY2hpbGRyZW4iLCJjaGlsZCIsImFwcGVuZENoaWxkcmVuIiwiVGV4dCIsIkFycmF5IiwidHlwZSIsInJvb3QiLCJkb2N1bWVudCIsImF0dHIiLCJwdXNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFyZ3VtZW50cyIsInBhcmVudCIsImFwcGVuZCIsIm1vdW50Iiwic3R5bGUiLCJjbGllbnRXaWR0aCIsInRleHQiLCJjcmVhdGVUZXh0Tm9kZSIsImNhcm91c2VsIiwiYm9keSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7OztBQUNBLElBQUlhLFFBQVEsR0FBRyxjQUFDLHFEQUFEO0FBQVUsTUFBSSxFQUFFLENBQzNCLGFBRDJCLEVBRTNCLGFBRjJCLEVBRzNCLGFBSDJCLEVBSTNCLGFBSjJCO0FBQWhCLEVBQWY7QUFPQUEsUUFBUSxDQUFDTCxLQUFULENBQWVQLFFBQVEsQ0FBQ2EsSUFBeEIsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9tYWluLmpzXCIpO1xuIiwiaW1wb3J0IENhcm91c2VsIGZyb20gJy4vQ2Fyb3VzZWwudmlldydcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoQ2xzLCBhdHRyaWJ1dGVzLCAuLi5jaGlsZHJlbikge1xyXG4gICAgdmFyIG9cclxuICAgIGlmKHR5cGVvZiBDbHMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgbyA9IG5ldyBXcmFwKENscylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbyA9IG5ldyBDbHNcclxuICAgIH1cclxuICAgIGZvciAobGV0IG5hbWUgaW4gYXR0cmlidXRlcykge1xyXG4gICAgICAgIG8uc2V0QXR0cmlidXRlKG5hbWUsIGF0dHJpYnV0ZXNbbmFtZV0pXHJcbiAgICAgICAgLy8gb1tuYW1lXSA9IGF0dHJpYnV0ZXNbbmFtZV1cclxuICAgIH1cclxuICAgIGNvbnN0IHZpc2l0ID0gKGNoaWxkcmVuKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgaWYodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG8uYXBwZW5kQ2hpbGRyZW4obmV3IFRleHQoY2hpbGQpKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYoY2hpbGQgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgdmlzaXQoY2hpbGQpXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG8uYXBwZW5kQ2hpbGRyZW4oY2hpbGQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmlzaXQoY2hpbGRyZW4pXHJcbiAgICAvLyBjb25zb2xlLmxvZyhhcmd1bWVudHMpXHJcbiAgICByZXR1cm4gb1xyXG59XHJcblxyXG4vLyBjbGFzcyBEaXYge1xyXG4vLyAgICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuLy8gICAgICAgICB0aGlzLmNoaWxkcmVuID0gW11cclxuLy8gICAgICAgICB0aGlzLnJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHNldEF0dHJpYnV0ZShuYW1lLCBhdHRyKSB7XHJcbi8vICAgICAgICAgdGhpcy5yb290LnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyKVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGFwcGVuZENoaWxkcmVuKGNoaWxkKSB7XHJcbi8vICAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIG1vdW50KHBhcmVudCkge1xyXG4vLyAgICAgICAgIHBhcmVudC5hcHBlbmQodGhpcy5yb290KVxyXG4vLyAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuY2hpbGRyZW4pIHtcclxuLy8gICAgICAgICAgICAgY2hpbGQubW91bnQodGhpcy5yb290KVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuY2xhc3MgV3JhcCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlKSB7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdXHJcbiAgICAgICAgdGhpcy5yb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKVxyXG4gICAgfVxyXG5cclxuICAgIHNldEF0dHJpYnV0ZShuYW1lLCBhdHRyKSB7XHJcbiAgICAgICAgdGhpcy5yb290LnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyKVxyXG4gICAgfVxyXG5cclxuICAgIGFwcGVuZENoaWxkcmVuKGNoaWxkKSB7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBzdHlsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb290LnN0eWxlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNsaWVudFdpZHRoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvb3QuY2xpZW50V2lkdGhcclxuICAgIH1cclxuXHJcbiAgICBhZGRFdmVudExpc3RlbmVyKCkge1xyXG4gICAgICAgIHRoaXMucm9vdC5hZGRFdmVudExpc3RlbmVyKC4uLmFyZ3VtZW50cylcclxuICAgIH1cclxuXHJcbiAgICBtb3VudChwYXJlbnQpIHtcclxuICAgICAgICBwYXJlbnQuYXBwZW5kKHRoaXMucm9vdClcclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLm1vdW50KHRoaXMucm9vdClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFRleHQge1xyXG4gICAgY29uc3RydWN0b3IodGV4dCkge1xyXG4gICAgICAgIHRoaXMucm9vdCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpXHJcbiAgICB9XHJcbiAgICBtb3VudChwYXJlbnQpIHtcclxuICAgICAgICBwYXJlbnQuYXBwZW5kKHRoaXMucm9vdClcclxuICAgIH1cclxufVxyXG5cclxuLy8gY2xhc3MgQ2Fyb3VzZWwge1xyXG4vLyAgICAgY29uc3RydWN0b3IoKSB7XHJcbi8vICAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdXHJcbi8vICAgICAgICAgdGhpcy5hdHRycyA9IG5ldyBNYXBcclxuLy8gICAgICAgICB0aGlzLnByb3BzID0gbmV3IE1hcFxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHNldEF0dHJpYnV0ZShuYW1lLCBhdHRyKSB7XHJcbi8vICAgICAgICAgdGhpc1tuYW1lXSA9IGF0dHJcclxuLy8gICAgICAgICAvLyB0aGlzLnJvb3Quc2V0QXR0cmlidXRlKG5hbWUsIGF0dHIpXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgYXBwZW5kQ2hpbGRyZW4oY2hpbGQpIHtcclxuLy8gICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgbW91bnQocGFyZW50KSB7XHJcbi8vICAgICAgICAgLy8gcGFyZW50LmFwcGVuZCh0aGlzLnJvb3QpXHJcbi8vICAgICAgICAgLy8gZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5jaGlsZHJlbikge1xyXG4vLyAgICAgICAgICAgICAvLyAgICAgY2hpbGQubW91bnQodGhpcy5yb290KVxyXG4vLyAgICAgICAgICAgICAvLyB9XHJcbi8vICAgICAgICAgdGhpcy5yZW5kZXIoKS5tb3VudChwYXJlbnQpICAgIFxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHJlbmRlcigpIHtcclxuLy8gICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmRhdGEubWFwKHVybCA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbGUgPSA8aW1nIHNyYz17dXJsfSAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBlbGUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSlcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgbGV0IHJvb3QgPSAoXHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbFwiPlxyXG4vLyAgICAgICAgICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNoaWxkXHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgIClcclxuLy8gICAgICAgICBsZXQgcG9zaXRpb24gPSAwXHJcblxyXG4vLyAgICAgICAgIGxldCBuZXhQaWMgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgICAgIGxldCBuZXh0UG9zdGlvbiA9IChwb3NpdGlvbiArIDEpICUgY2hpbGQubGVuZ3RoXHJcbi8vICAgICAgICAgICAgIGxldCBjdXJyID0gY2hpbGRbcG9zaXRpb25dXHJcbi8vICAgICAgICAgICAgIGxldCBuZXh0ID0gY2hpbGRbbmV4dFBvc3Rpb25dXHJcbi8vICAgICAgICAgICAgIGN1cnIuc3R5bGUudHJhbnNpdGlvbiA9ICdlYXNlIDBzJ1xyXG4vLyAgICAgICAgICAgICBuZXh0LnN0eWxlLnRyYW5zaXRpb24gPSAnZWFzZSAwcydcclxuLy8gICAgICAgICAgICAgY3Vyci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkey0gMTAwICogcG9zaXRpb259JSlgXHJcbi8vICAgICAgICAgICAgIG5leHQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHsxMDAgLSAxMDAgKiBuZXh0UG9zdGlvbn0lKWBcclxuLy8gICAgICAgICAgICAgLy8gd2luZG93LmlubmVyV2lkdGhcclxuLy8gICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBjdXJyLnN0eWxlLnRyYW5zaXRpb24gPSAnZWFzZSAwLjRzJ1xyXG4vLyAgICAgICAgICAgICAgICAgbmV4dC5zdHlsZS50cmFuc2l0aW9uID0gJ2Vhc2UgMC40cydcclxuLy8gICAgICAgICAgICAgICAgIGN1cnIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHstMTAwIC0gMTAwICogcG9zaXRpb259JSlgXHJcbi8vICAgICAgICAgICAgICAgICBuZXh0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7LTEwMCAqIG5leHRQb3N0aW9ufSUpYFxyXG4vLyAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSBuZXh0UG9zdGlvblxyXG4vLyAgICAgICAgICAgICB9LCAxNik7XHJcbi8vICAgICAgICAgICAgIHNldFRpbWVvdXQobmV4UGljLCAzMDAwKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgLy8gc2V0VGltZW91dChuZXhQaWMsIDMwMDApXHJcblxyXG4vLyAgICAgICAgIHJvb3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcclxuLy8gICAgICAgICAgICAgbGV0IHN0YXJ0WCA9IGUuY2xpZW50WCwgc3RhcnRZID0gZS5jbGllbnRZXHJcbi8vICAgICAgICAgICAgIGxldCBsZW5ndGggPSBjaGlsZC5sZW5ndGhcclxuLy8gICAgICAgICAgICAgbGV0IGxhc3RQb3NpdGlvbiA9IChwb3NpdGlvbiAtIDEgKyBsZW5ndGgpICUgbGVuZ3RoXHJcbi8vICAgICAgICAgICAgIGxldCBuZXh0UG9zaXRpb24gPSAocG9zaXRpb24gKyAxKSAlIGxlbmd0aFxyXG4vLyAgICAgICAgICAgICBsZXQgY3VyciA9IGNoaWxkW3Bvc2l0aW9uXVxyXG4vLyAgICAgICAgICAgICBsZXQgd2lkdGggPSBjdXJyLmNsaWVudFdpZHRoXHJcbi8vICAgICAgICAgICAgIGxldCBsYXN0ID0gY2hpbGRbbGFzdFBvc2l0aW9uXVxyXG4vLyAgICAgICAgICAgICBsZXQgbmV4dCA9IGNoaWxkW25leHRQb3NpdGlvbl1cclxuXHJcbi8vICAgICAgICAgICAgIGN1cnIuc3R5bGUudHJhbnNpdGlvbiA9ICdlYXNlIDBzJ1xyXG4vLyAgICAgICAgICAgICBsYXN0LnN0eWxlLnRyYW5zaXRpb24gPSAnZWFzZSAwcydcclxuLy8gICAgICAgICAgICAgbmV4dC5zdHlsZS50cmFuc2l0aW9uID0gJ2Vhc2UgMHMnXHJcblxyXG4vLyAgICAgICAgICAgICBjdXJyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7LSB3aWR0aCAqIHBvc2l0aW9ufXB4KWBcclxuLy8gICAgICAgICAgICAgbGFzdC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkey13aWR0aCAtIHdpZHRoICogbGFzdFBvc2l0aW9ufXB4KWBcclxuLy8gICAgICAgICAgICAgbmV4dC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3dpZHRoIC0gd2lkdGggKiBuZXh0UG9zaXRpb259cHgpYFxyXG5cclxuLy8gICAgICAgICAgICAgbGV0IG1vdmUgPSBlID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIGN1cnIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHstIHdpZHRoICogcG9zaXRpb24gKyBlLmNsaWVudFggLSBzdGFydFh9cHgpYFxyXG4vLyAgICAgICAgICAgICAgICAgbGFzdC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkey13aWR0aCAtIHdpZHRoICogbGFzdFBvc2l0aW9uICsgZS5jbGllbnRYIC0gc3RhcnRYfXB4KWBcclxuLy8gICAgICAgICAgICAgICAgIG5leHQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt3aWR0aCAtIHdpZHRoICogbmV4dFBvc2l0aW9uICsgZS5jbGllbnRYIC0gc3RhcnRYfXB4KWBcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICBsZXQgdXAgPSBlID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSAwXHJcbi8vICAgICAgICAgICAgICAgICBpZiAoZS5jbGllbnRYIC0gc3RhcnRYID4gd2lkdGggLyAzKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gLTFcclxuLy8gICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5jbGllbnRYIC0gc3RhcnRYIDwgLXdpZHRoIC8gMykge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IDFcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9mZnNldClcclxuLy8gICAgICAgICAgICAgICAgIC8vIGN1cnIuc3R5bGUudHJhbnNpdGlvbiA9ICdlYXNlIDAuNHMnXHJcbi8vICAgICAgICAgICAgICAgICAvLyBsYXN0LnN0eWxlLnRyYW5zaXRpb24gPSAnZWFzZSAwLjRzJ1xyXG4vLyAgICAgICAgICAgICAgICAgLy8gbmV4dC5zdHlsZS50cmFuc2l0aW9uID0gJ2Vhc2UgMC40cydcclxuXHJcbi8vICAgICAgICAgICAgICAgICBjdXJyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7LSB3aWR0aCAqIHBvc2l0aW9uIC0gb2Zmc2V0ICogd2lkdGh9cHgpYFxyXG4vLyAgICAgICAgICAgICAgICAgbGFzdC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkey13aWR0aCAtIHdpZHRoICogbGFzdFBvc2l0aW9uIC0gb2Zmc2V0ICogd2lkdGh9cHgpYFxyXG4vLyAgICAgICAgICAgICAgICAgbmV4dC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3dpZHRoIC0gd2lkdGggKiBuZXh0UG9zaXRpb24gLSBvZmZzZXQgKiB3aWR0aH1weClgXHJcbi8vICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IChwb3NpdGlvbiArIG9mZnNldCArIGxlbmd0aCkgJSBsZW5ndGhcclxuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvc2l0aW9uKVxyXG4vLyAgICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW92ZSlcclxuLy8gICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB1cClcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3ZlKVxyXG4vLyAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdXApXHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgICAgICByZXR1cm4gcm9vdFxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5cclxuLyoqIEBqc3ggY3JlYXRlRWxlbWVudCAgKi9cclxubGV0IGNhcm91c2VsID0gPENhcm91c2VsIGRhdGE9e1tcclxuICAgICcuL2ltZy8xLmpwZycsXHJcbiAgICAnLi9pbWcvMi5qcGcnLFxyXG4gICAgJy4vaW1nLzMuanBnJyxcclxuICAgICcuL2ltZy80LmpwZycsXHJcbl19Lz5cclxuXHJcbmNhcm91c2VsLm1vdW50KGRvY3VtZW50LmJvZHkpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=