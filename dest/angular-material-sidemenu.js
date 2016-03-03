/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { throw err; };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _template = __webpack_require__(6);
	
	var _template2 = _interopRequireDefault(_template);
	
	var _link = __webpack_require__(5);
	
	var _link2 = _interopRequireDefault(_link);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var directive = function directive() {
	
	  return {
	    restrict: 'E',
	    scope: {
	      locked: '@?mdLocked'
	    },
	    replace: true,
	    transclude: true,
	    template: _template2.default,
	    link: _link2.default
	  };
	};
	
	exports.default = {
	  name: 'mdSidemenu',
	  directive: directive
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _controller = __webpack_require__(7);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _template = __webpack_require__(8);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var directive = function directive() {
	
	  return {
	    restrict: 'E',
	    scope: {
	      uiSref: '@?',
	      href: '@?',
	      target: '@?'
	    },
	    transclude: true,
	    template: _template2.default,
	    controller: _controller2.default,
	    controllerAs: '$mdSidemenuButton',
	    bindToController: true
	  };
	};
	
	exports.default = {
	  name: 'mdSidemenuButton',
	  directive: directive
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _controller = __webpack_require__(9);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _template = __webpack_require__(10);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var directive = function directive() {
	
	  return {
	    restrict: 'E',
	    scope: {
	      heading: '@mdHeading',
	      icon: '@?mdIcon',
	      arrow: '@?mdArrow'
	    },
	    replace: true,
	    transclude: true,
	    template: _template2.default,
	    controller: _controller2.default,
	    controllerAs: '$mdSidemenuContent',
	    bindToController: true
	  };
	};
	
	exports.default = {
	  name: 'mdSidemenuContent',
	  directive: directive
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _template = __webpack_require__(11);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var directive = function directive() {
	
	  return {
	    restrict: 'E',
	    replace: true,
	    transclude: true,
	    template: _template2.default
	  };
	};
	
	exports.default = {
	  name: 'mdSidemenuGroup',
	  directive: directive
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _mdSidemenu = __webpack_require__(0);
	
	var _mdSidemenu2 = _interopRequireDefault(_mdSidemenu);
	
	var _mdSidemenuGroup = __webpack_require__(3);
	
	var _mdSidemenuGroup2 = _interopRequireDefault(_mdSidemenuGroup);
	
	var _mdSidemenuContent = __webpack_require__(2);
	
	var _mdSidemenuContent2 = _interopRequireDefault(_mdSidemenuContent);
	
	var _mdSidemenuButton = __webpack_require__(1);
	
	var _mdSidemenuButton2 = _interopRequireDefault(_mdSidemenuButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(function (angular) {
	
	  angular.module('ngMaterialSidemenu', ['ngMaterial']).directive(_mdSidemenu2.default.name, _mdSidemenu2.default.directive).directive(_mdSidemenuGroup2.default.name, _mdSidemenuGroup2.default.directive).directive(_mdSidemenuContent2.default.name, _mdSidemenuContent2.default.directive).directive(_mdSidemenuButton2.default.name, _mdSidemenuButton2.default.directive);
	})(angular);

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function ($scope, $element, $attributes) {
	
	  $scope.$watch(function () {
	    return $attributes.locked;
	  }, function (locked) {
	    if (locked) {
	      $element[0].classList.add('md-sidemenu-locked');
	    } else {
	      $element[0].classList.remove('md-sidemenu-locked');
	    }
	  });
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function ($element, $attributes) {
	
	  var locked = $attributes.locked && 'md-sidemenu-locked';
	
	  return '<div class="md-sidemenu ' + locked + '" ng-transclude></div>';
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {};

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	
	  return "\n    <md-button class=\"md-sidemenu-button\" layout=\"column\" ng-attr-href=\"{{ $mdSidemenuButton.href }}\" ng-attr-uiSref=\"{{ $mdSidemenuButton.uiSref }}\" ng-attr-target=\"{{ $mdSidemenuButton.target }}\">\n      <div layout=\"row\" layout-fill layout-align=\"start center\" ng-transclude></div>\n    </md-button>\n  ";
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	
	  this.visible = false;
	
	  this.changeState = function () {
	    this.visible = !this.visible;
	  };
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	
	  return "\n    <div class=\"md-sidemenu-content\" layout=\"column\">\n      <md-button class=\"md-sidemenu-toggle\" ng-if=\"$mdSidemenuContent.heading\" ng-click=\"$mdSidemenuContent.changeState();\" ng-class=\"{ 'md-active': $mdSidemenuContent.visible }\">\n        <div layout=\"row\">\n          <md-icon ng-if=\"$mdSidemenuContent.icon\">{{ $mdSidemenuContent.icon }}</md-icon>\n          <span flex>{{ $mdSidemenuContent.heading }}</span>\n          <md-icon ng-if=\"$mdSidemenuContent.arrow\">keyboard_arrow_down</md-icon>\n        </div>\n      </md-button>\n\n      <div class=\"md-sidemenu-wrapper\" md-sidemenu-disable-animate ng-class=\"{ 'md-active': $mdSidemenuContent.visible, 'md-sidemenu-wrapper-icons':  $mdSidemenuContent.icon }\" layout=\"column\" ng-transclude></div>\n    </div>\n  ";
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	
	  return '<div class="md-sidemenu-group" flex layout="column" layout-align="start start" ng-transclude></div>';
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODMxZmFhODM1ZDNhZmQxNDc4ZjQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51QnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVDb250ZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVHcm91cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudS90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51QnV0dG9uL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUJ1dHRvbi90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51Q29udGVudC9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVDb250ZW50L3RlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVHcm91cC90ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0RBQTBDLFdBQVc7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7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MkJBQWlCO0lBRXBELFM7Ozs7OztBQ2hCSDs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0dBQzNDLE9BQU87OztBQUdULFNBQVEsVUFOTyxVQUFTLFFBQVEsVUFBVSxhQUFhOztHQUVyRCxPQUFPLE9BQU8sWUFBVztLQUN2QixPQUFPLFlBQVk7TUFDbEIsVUFBUyxRQUFRO0tBQ2xCLElBQUksUUFBUTtPQUNWLFNBQVMsR0FBRyxVQUFVLElBQUk7WUFDckI7T0FDTCxTQUFTLEdBQUcsVUFBVSxPQUFPOzs7Ozs7Ozs7QUNSbkM7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztHQUMzQyxPQUFPOzs7QUFHVCxTQUFRLFVBTk8sVUFBUyxVQUFVLGFBQWE7O0dBRTdDLElBQUksU0FBUyxZQUFZLFVBQVU7O0dBRW5DLG9DQUFtQzs7Ozs7OztBQ0pyQzs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0dBQzNDLE9BQU87OztBQUdULFNBQVEsVUFOTyxZQUFXLEc7Ozs7OztBQ0ExQjs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0dBQzNDLE9BQU87OztBQUdULFNBQVEsVUFOTyxZQUFXOztHQUV4Qjs7Ozs7OztBQ0ZGOztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7R0FDM0MsT0FBTzs7O0FBR1QsU0FBUSxVQU5PLFlBQVc7O0dBRXhCLEtBQUssVUFBVTs7R0FFZixLQUFLLGNBQWMsWUFBVztLQUM1QixLQUFLLFVBQVUsQ0FBQyxLQUFLOzs7Ozs7OztBQ0x6Qjs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0dBQzNDLE9BQU87OztBQUdULFNBQVEsVUFOTyxZQUFXOztHQUV4Qjs7Ozs7OztBQ0ZGOztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7R0FDM0MsT0FBTzs7O0FBR1QsU0FBUSxVQU5PLFlBQVc7O0dBRXhCLE9BQU8iLCJmaWxlIjoiYW5ndWxhci1tYXRlcmlhbC1zaWRlbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IHRocm93IGVycjsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgODMxZmFhODM1ZDNhZmQxNDc4ZjRcbiAqKi8iLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZSc7XG5pbXBvcnQgbGluayBmcm9tICcuL2xpbmsnO1xuXG5sZXQgZGlyZWN0aXZlID0gKCkgPT4ge1xuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgbG9ja2VkOiAnQD9tZExvY2tlZCdcbiAgICB9LFxuICAgIHJlcGxhY2U6IHRydWUsXG4gICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICB0ZW1wbGF0ZSxcbiAgICBsaW5rXG4gIH07XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kU2lkZW1lbnUnLFxuICBkaXJlY3RpdmVcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zY3JpcHRzL21kU2lkZW1lbnUvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgY29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUnO1xuXG5sZXQgZGlyZWN0aXZlID0gKCkgPT4ge1xuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgdWlTcmVmOiAnQD8nLFxuICAgICAgaHJlZjogJ0A/JyxcbiAgICAgIHRhcmdldDogJ0A/J1xuICAgIH0sXG4gICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICB0ZW1wbGF0ZSxcbiAgICBjb250cm9sbGVyLFxuICAgIGNvbnRyb2xsZXJBczogJyRtZFNpZGVtZW51QnV0dG9uJyxcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4gIH07XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kU2lkZW1lbnVCdXR0b24nLFxuICBkaXJlY3RpdmVcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVCdXR0b24vaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgY29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUnO1xuXG5sZXQgZGlyZWN0aXZlID0gKCkgPT4ge1xuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgaGVhZGluZzogJ0BtZEhlYWRpbmcnLFxuICAgICAgaWNvbjogJ0A/bWRJY29uJyxcbiAgICAgIGFycm93OiAnQD9tZEFycm93J1xuICAgIH0sXG4gICAgcmVwbGFjZTogdHJ1ZSxcbiAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgIHRlbXBsYXRlLFxuICAgIGNvbnRyb2xsZXIsXG4gICAgY29udHJvbGxlckFzOiAnJG1kU2lkZW1lbnVDb250ZW50JyxcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4gIH07XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kU2lkZW1lbnVDb250ZW50JyxcbiAgZGlyZWN0aXZlXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51Q29udGVudC9pbmRleC5qc1xuICoqLyIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlJztcblxubGV0IGRpcmVjdGl2ZSA9ICgpID0+IHtcblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgcmVwbGFjZTogdHJ1ZSxcbiAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgIHRlbXBsYXRlXG4gIH07XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kU2lkZW1lbnVHcm91cCcsXG4gIGRpcmVjdGl2ZVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUdyb3VwL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IG1kU2lkZW1lbnUgZnJvbSAnLi9zY3JpcHRzL21kU2lkZW1lbnUnO1xuaW1wb3J0IG1kU2lkZW1lbnVHcm91cCBmcm9tICcuL3NjcmlwdHMvbWRTaWRlbWVudUdyb3VwJztcbmltcG9ydCBtZFNpZGVtZW51Q29udGVudCBmcm9tICcuL3NjcmlwdHMvbWRTaWRlbWVudUNvbnRlbnQnO1xuaW1wb3J0IG1kU2lkZW1lbnVCdXR0b24gZnJvbSAnLi9zY3JpcHRzL21kU2lkZW1lbnVCdXR0b24nO1xuXG4oKGFuZ3VsYXIpID0+IHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnbmdNYXRlcmlhbFNpZGVtZW51JywgW1xuICAgICAgJ25nTWF0ZXJpYWwnXG4gICAgXSlcbiAgICAuZGlyZWN0aXZlKG1kU2lkZW1lbnUubmFtZSwgbWRTaWRlbWVudS5kaXJlY3RpdmUpXG4gICAgLmRpcmVjdGl2ZShtZFNpZGVtZW51R3JvdXAubmFtZSwgbWRTaWRlbWVudUdyb3VwLmRpcmVjdGl2ZSlcbiAgICAuZGlyZWN0aXZlKG1kU2lkZW1lbnVDb250ZW50Lm5hbWUsIG1kU2lkZW1lbnVDb250ZW50LmRpcmVjdGl2ZSlcbiAgICAuZGlyZWN0aXZlKG1kU2lkZW1lbnVCdXR0b24ubmFtZSwgbWRTaWRlbWVudUJ1dHRvbi5kaXJlY3RpdmUpO1xuXG59KShhbmd1bGFyKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21haW4uanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigkc2NvcGUsICRlbGVtZW50LCAkYXR0cmlidXRlcykge1xuXG4gICRzY29wZS4kd2F0Y2goZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICRhdHRyaWJ1dGVzLmxvY2tlZDtcbiAgfSwgZnVuY3Rpb24obG9ja2VkKSB7XG4gICAgaWYgKGxvY2tlZCkge1xuICAgICAgJGVsZW1lbnRbMF0uY2xhc3NMaXN0LmFkZCgnbWQtc2lkZW1lbnUtbG9ja2VkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICRlbGVtZW50WzBdLmNsYXNzTGlzdC5yZW1vdmUoJ21kLXNpZGVtZW51LWxvY2tlZCcpO1xuICAgIH1cbiAgfSk7XG5cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudS9saW5rLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oJGVsZW1lbnQsICRhdHRyaWJ1dGVzKSB7XG5cbiAgbGV0IGxvY2tlZCA9ICRhdHRyaWJ1dGVzLmxvY2tlZCAmJiAnbWQtc2lkZW1lbnUtbG9ja2VkJztcblxuICByZXR1cm4gYDxkaXYgY2xhc3M9XCJtZC1zaWRlbWVudSAkeyBsb2NrZWQgfVwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+YDtcblxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51L3RlbXBsYXRlLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUJ1dHRvbi9jb250cm9sbGVyLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbiAgcmV0dXJuIGBcbiAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtc2lkZW1lbnUtYnV0dG9uXCIgbGF5b3V0PVwiY29sdW1uXCIgbmctYXR0ci1ocmVmPVwie3sgJG1kU2lkZW1lbnVCdXR0b24uaHJlZiB9fVwiIG5nLWF0dHItdWlTcmVmPVwie3sgJG1kU2lkZW1lbnVCdXR0b24udWlTcmVmIH19XCIgbmctYXR0ci10YXJnZXQ9XCJ7eyAkbWRTaWRlbWVudUJ1dHRvbi50YXJnZXQgfX1cIj5cbiAgICAgIDxkaXYgbGF5b3V0PVwicm93XCIgbGF5b3V0LWZpbGwgbGF5b3V0LWFsaWduPVwic3RhcnQgY2VudGVyXCIgbmctdHJhbnNjbHVkZT48L2Rpdj5cbiAgICA8L21kLWJ1dHRvbj5cbiAgYDtcblxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51QnV0dG9uL3RlbXBsYXRlLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbiAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG5cbiAgdGhpcy5jaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMudmlzaWJsZSA9ICF0aGlzLnZpc2libGU7XG4gIH07XG5cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUNvbnRlbnQvY29udHJvbGxlci5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gIHJldHVybiBgXG4gICAgPGRpdiBjbGFzcz1cIm1kLXNpZGVtZW51LWNvbnRlbnRcIiBsYXlvdXQ9XCJjb2x1bW5cIj5cbiAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1zaWRlbWVudS10b2dnbGVcIiBuZy1pZj1cIiRtZFNpZGVtZW51Q29udGVudC5oZWFkaW5nXCIgbmctY2xpY2s9XCIkbWRTaWRlbWVudUNvbnRlbnQuY2hhbmdlU3RhdGUoKTtcIiBuZy1jbGFzcz1cInsgJ21kLWFjdGl2ZSc6ICRtZFNpZGVtZW51Q29udGVudC52aXNpYmxlIH1cIj5cbiAgICAgICAgPGRpdiBsYXlvdXQ9XCJyb3dcIj5cbiAgICAgICAgICA8bWQtaWNvbiBuZy1pZj1cIiRtZFNpZGVtZW51Q29udGVudC5pY29uXCI+e3sgJG1kU2lkZW1lbnVDb250ZW50Lmljb24gfX08L21kLWljb24+XG4gICAgICAgICAgPHNwYW4gZmxleD57eyAkbWRTaWRlbWVudUNvbnRlbnQuaGVhZGluZyB9fTwvc3Bhbj5cbiAgICAgICAgICA8bWQtaWNvbiBuZy1pZj1cIiRtZFNpZGVtZW51Q29udGVudC5hcnJvd1wiPmtleWJvYXJkX2Fycm93X2Rvd248L21kLWljb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tZC1idXR0b24+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJtZC1zaWRlbWVudS13cmFwcGVyXCIgbWQtc2lkZW1lbnUtZGlzYWJsZS1hbmltYXRlIG5nLWNsYXNzPVwieyAnbWQtYWN0aXZlJzogJG1kU2lkZW1lbnVDb250ZW50LnZpc2libGUsICdtZC1zaWRlbWVudS13cmFwcGVyLWljb25zJzogICRtZFNpZGVtZW51Q29udGVudC5pY29uIH1cIiBsYXlvdXQ9XCJjb2x1bW5cIiBuZy10cmFuc2NsdWRlPjwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVDb250ZW50L3RlbXBsYXRlLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbiAgcmV0dXJuICc8ZGl2IGNsYXNzPVwibWQtc2lkZW1lbnUtZ3JvdXBcIiBmbGV4IGxheW91dD1cImNvbHVtblwiIGxheW91dC1hbGlnbj1cInN0YXJ0IHN0YXJ0XCIgbmctdHJhbnNjbHVkZT48L2Rpdj4nO1xuXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVHcm91cC90ZW1wbGF0ZS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=