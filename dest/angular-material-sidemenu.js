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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _mdSidemenu = __webpack_require__(1);
	
	var _mdSidemenu2 = _interopRequireDefault(_mdSidemenu);
	
	var _mdSidemenuGroup = __webpack_require__(4);
	
	var _mdSidemenuGroup2 = _interopRequireDefault(_mdSidemenuGroup);
	
	var _mdSidemenuContent = __webpack_require__(6);
	
	var _mdSidemenuContent2 = _interopRequireDefault(_mdSidemenuContent);
	
	var _mdSidemenuButton = __webpack_require__(10);
	
	var _mdSidemenuButton2 = _interopRequireDefault(_mdSidemenuButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(function (angular) {
	
	  angular.module('ngMaterialSidemenu', ['ngMaterial']).directive(_mdSidemenu2.default.name, _mdSidemenu2.default.directive).directive(_mdSidemenuGroup2.default.name, _mdSidemenuGroup2.default.directive).directive(_mdSidemenuContent2.default.name, _mdSidemenuContent2.default.directive).directive(_mdSidemenuButton2.default.name, _mdSidemenuButton2.default.directive);
	})(angular);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _template = __webpack_require__(2);
	
	var _template2 = _interopRequireDefault(_template);
	
	var _link = __webpack_require__(3);
	
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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function ($element, $attributes) {
	
	  var locked = $attributes.locked && 'md-sidemenu-locked';
	
	  return '<div class="md-sidemenu ' + locked + '" ng-transclude></div>';
	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _template = __webpack_require__(5);
	
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

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	
	  return '<div class="md-sidemenu-group" flex layout="column" layout-align="start start" ng-transclude></div>';
	};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _controller = __webpack_require__(7);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _template = __webpack_require__(8);
	
	var _template2 = _interopRequireDefault(_template);
	
	var _link = __webpack_require__(9);
	
	var _link2 = _interopRequireDefault(_link);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var directive = function directive() {
	
	  return {
	    restrict: 'E',
	    scope: {
	      heading: '@mdHeading',
	      icon: '@?mdIcon',
	      svgIcon: '@?mdSvgIcon',
	      arrow: '@?mdArrow',
	      onHover: '@onHover'
	    },
	    replace: true,
	    transclude: true,
	    template: _template2.default,
	    controller: _controller2.default,
	    controllerAs: '$mdSidemenuContent',
	    bindToController: true,
	    link: _link2.default
	  };
	};
	
	exports.default = {
	  name: 'mdSidemenuContent',
	  directive: directive
	};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

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

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	
	  return "\n    <div class=\"md-sidemenu-content\" layout=\"column\">\n      <md-button class=\"md-sidemenu-toggle\" ng-if=\"$mdSidemenuContent.heading\" ng-click=\"$mdSidemenuContent.changeState();\" ng-class=\"{ 'md-active': $mdSidemenuContent.visible }\">\n        <div layout=\"row\">\n          <md-icon ng-if=\"$mdSidemenuContent.svgIcon\" md-svg-icon=\"$mdSidemenuContent.svgIcon\"></md-icon>\n          <md-icon ng-if=\"$mdSidemenuContent.icon\">{{ $mdSidemenuContent.icon }}</md-icon>\n          <span flex>{{ $mdSidemenuContent.heading }}</span>\n          <md-icon ng-if=\"$mdSidemenuContent.arrow\">keyboard_arrow_down</md-icon>\n        </div>\n      </md-button>\n\n      <div class=\"md-sidemenu-wrapper\" md-sidemenu-disable-animate ng-class=\"{ 'md-active': $mdSidemenuContent.visible, 'md-sidemenu-wrapper-icons':  $mdSidemenuContent.icon }\" layout=\"column\" ng-transclude></div>\n    </div>\n  ";
	};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (scope, element, attrs) {
	
	  if (attrs.onHover) {
	    /*
	      Active or disable the menu on hover event.
	      @status: Boolean
	     */
	    var showOrHideMenu = function showOrHideMenu(status) {
	      scope.$apply(function () {
	        return scope.$mdSidemenuContent.visible = status;
	      });
	    };
	
	    element.on('mouseenter', function () {
	      showOrHideMenu(true);
	    });
	    element.on('mouseleave', function () {
	      showOrHideMenu(false);
	    });
	  }
	};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _controller = __webpack_require__(11);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _template = __webpack_require__(12);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var directive = function directive() {
	
	  return {
	    restrict: 'E',
	    scope: {
	      uiSref: '@?',
	      uiSrefActive: '@?',
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

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	
	  return "\n    <md-button\n      class=\"md-sidemenu-button\"\n      layout=\"column\"\n      ng-attr-href=\"{{ $mdSidemenuButton.href }}\"\n      ng-attr-ui-sref=\"{{ $mdSidemenuButton.uiSref }}\"\n      ng-attr-ui-sref-active=\"{{ $mdSidemenuButton.uiSrefActive }}\"\n      ng-attr-target=\"{{ $mdSidemenuButton.target }}\">\n      <div layout=\"row\" layout-fill layout-align=\"start center\" ng-transclude></div>\n    </md-button>\n  ";
	};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmJjZGEzMTQ5NGU1ZWU4MTA3ZWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51L3RlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnUvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51R3JvdXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUdyb3VwL3RlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVDb250ZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVDb250ZW50L2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUNvbnRlbnQvdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUNvbnRlbnQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51QnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVCdXR0b24vY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51QnV0dG9uL3RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJkaXJlY3RpdmUiLCJuYW1lIiwicmVzdHJpY3QiLCJzY29wZSIsImxvY2tlZCIsInJlcGxhY2UiLCJ0cmFuc2NsdWRlIiwidGVtcGxhdGUiLCJsaW5rIiwiJGVsZW1lbnQiLCIkYXR0cmlidXRlcyIsIiRzY29wZSIsIiR3YXRjaCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImhlYWRpbmciLCJpY29uIiwic3ZnSWNvbiIsImFycm93Iiwib25Ib3ZlciIsImNvbnRyb2xsZXIiLCJjb250cm9sbGVyQXMiLCJiaW5kVG9Db250cm9sbGVyIiwidmlzaWJsZSIsImNoYW5nZVN0YXRlIiwiZWxlbWVudCIsImF0dHJzIiwic2hvd09ySGlkZU1lbnUiLCJzdGF0dXMiLCIkYXBwbHkiLCIkbWRTaWRlbWVudUNvbnRlbnQiLCJvbiIsInVpU3JlZiIsInVpU3JlZkFjdGl2ZSIsImhyZWYiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBOztBQUFBOztBQUlBLEtBQUksZUFBZSx1QkFBdUI7O0FBSDFDOztBQU9BLEtBQUksb0JBQW9CLHVCQUF1Qjs7QUFOL0M7O0FBVUEsS0FBSSxzQkFBc0IsdUJBQXVCOztBQVRqRDs7QUFhQSxLQUFJLHFCQUFxQix1QkFBdUI7O0FBRWhELFVBQVMsdUJBQXVCLEtBQUssRUFBRSxPQUFPLE9BQU8sSUFBSSxhQUFhLE1BQU0sRUFBRSxTQUFTOztBQWJ2RixFQUFDLFVBQUNBLFNBQVk7O0dBRVpBLFFBQ0dDLE9BQU8sc0JBQXNCLENBQzVCLGVBRURDLFVBQVUscUJBQVdDLE1BQU0scUJBQVdELFdBQ3RDQSxVQUFVLDBCQUFnQkMsTUFBTSwwQkFBZ0JELFdBQ2hEQSxVQUFVLDRCQUFrQkMsTUFBTSw0QkFBa0JELFdBQ3BEQSxVQUFVLDJCQUFpQkMsTUFBTSwyQkFBaUJEO0lBRXBERixTOzs7Ozs7QUNoQkg7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztHQUMzQyxPQUFPOzs7QUFIVDs7QUFRQSxLQUFJLGFBQWEs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Ozs7O0tBRzNESCxRQUFRTSxHQUFHLGNBQWMsWUFBTTtPQUFFSixlQUFlOztLQUNoREYsUUFBUU0sR0FBRyxjQUFjLFlBQU07T0FBRUosZUFBZTs7Ozs7Ozs7O0FDWnBEOztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7R0FDM0MsT0FBTzs7O0FBSFQ7O0FBUUEsS0FBSSxlQUFlLHVCQUF1Qjs7QUFQMUM7O0FBV0EsS0FBSSxhQUFhLHVCQUF1Qjs7QUFFeEMsVUFBUyx1QkFBdUIsS0FBSyxFQUFFLE9BQU8sT0FBTyxJQUFJLGFBQWEsTUFBTSxFQUFFLFNBQVM7O0FBWHZGLEtBQUk1QixZQUFZLFNBQVpBLFlBQWtCOztHQUVwQixPQUFPO0tBQ0xFLFVBQVU7S0FDVkMsT0FBTztPQUNMOEIsUUFBUTtPQUNSQyxjQUFjO09BQ2RDLE1BQU07T0FDTkMsUUFBUTs7S0FFVjlCLFlBQVk7S0FDWkM7S0FDQWM7S0FDQUMsY0FBYztLQUNkQyxrQkFBa0I7Ozs7QUFpQnRCLFNBQVEsVUFaTztHQUNidEIsTUFBTTtHQUNORDs7Ozs7OztBQ3hCRjs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0dBQzNDLE9BQU87OztBQUdULFNBQVEsVUFOTyxZQUFXLEc7Ozs7OztBQ0ExQjs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0dBQzNDLE9BQU87OztBQUdULFNBQVEsVUFOTyxZQUFXOztHQUV4QiIsImZpbGUiOiJhbmd1bGFyLW1hdGVyaWFsLXNpZGVtZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZmJjZGEzMTQ5NGU1ZWU4MTA3ZWMiLCJpbXBvcnQgbWRTaWRlbWVudSBmcm9tICcuL3NjcmlwdHMvbWRTaWRlbWVudSc7XG5pbXBvcnQgbWRTaWRlbWVudUdyb3VwIGZyb20gJy4vc2NyaXB0cy9tZFNpZGVtZW51R3JvdXAnO1xuaW1wb3J0IG1kU2lkZW1lbnVDb250ZW50IGZyb20gJy4vc2NyaXB0cy9tZFNpZGVtZW51Q29udGVudCc7XG5pbXBvcnQgbWRTaWRlbWVudUJ1dHRvbiBmcm9tICcuL3NjcmlwdHMvbWRTaWRlbWVudUJ1dHRvbic7XG5cbigoYW5ndWxhcikgPT4ge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCduZ01hdGVyaWFsU2lkZW1lbnUnLCBbXG4gICAgICAnbmdNYXRlcmlhbCdcbiAgICBdKVxuICAgIC5kaXJlY3RpdmUobWRTaWRlbWVudS5uYW1lLCBtZFNpZGVtZW51LmRpcmVjdGl2ZSlcbiAgICAuZGlyZWN0aXZlKG1kU2lkZW1lbnVHcm91cC5uYW1lLCBtZFNpZGVtZW51R3JvdXAuZGlyZWN0aXZlKVxuICAgIC5kaXJlY3RpdmUobWRTaWRlbWVudUNvbnRlbnQubmFtZSwgbWRTaWRlbWVudUNvbnRlbnQuZGlyZWN0aXZlKVxuICAgIC5kaXJlY3RpdmUobWRTaWRlbWVudUJ1dHRvbi5uYW1lLCBtZFNpZGVtZW51QnV0dG9uLmRpcmVjdGl2ZSk7XG5cbn0pKGFuZ3VsYXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4uanMiLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZSc7XG5pbXBvcnQgbGluayBmcm9tICcuL2xpbmsnO1xuXG5sZXQgZGlyZWN0aXZlID0gKCkgPT4ge1xuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgbG9ja2VkOiAnQD9tZExvY2tlZCdcbiAgICB9LFxuICAgIHJlcGxhY2U6IHRydWUsXG4gICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICB0ZW1wbGF0ZSxcbiAgICBsaW5rXG4gIH07XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kU2lkZW1lbnUnLFxuICBkaXJlY3RpdmVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51L2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oJGVsZW1lbnQsICRhdHRyaWJ1dGVzKSB7XG5cbiAgbGV0IGxvY2tlZCA9ICRhdHRyaWJ1dGVzLmxvY2tlZCAmJiAnbWQtc2lkZW1lbnUtbG9ja2VkJztcblxuICByZXR1cm4gYDxkaXYgY2xhc3M9XCJtZC1zaWRlbWVudSAkeyBsb2NrZWQgfVwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+YDtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudS90ZW1wbGF0ZS5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCRzY29wZSwgJGVsZW1lbnQsICRhdHRyaWJ1dGVzKSB7XG5cbiAgJHNjb3BlLiR3YXRjaChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gJGF0dHJpYnV0ZXMubG9ja2VkO1xuICB9LCBmdW5jdGlvbihsb2NrZWQpIHtcbiAgICBpZiAobG9ja2VkKSB7XG4gICAgICAkZWxlbWVudFswXS5jbGFzc0xpc3QuYWRkKCdtZC1zaWRlbWVudS1sb2NrZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJGVsZW1lbnRbMF0uY2xhc3NMaXN0LnJlbW92ZSgnbWQtc2lkZW1lbnUtbG9ja2VkJyk7XG4gICAgfVxuICB9KTtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudS9saW5rLmpzIiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUnO1xuXG5sZXQgZGlyZWN0aXZlID0gKCkgPT4ge1xuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICByZXBsYWNlOiB0cnVlLFxuICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgdGVtcGxhdGVcbiAgfTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRTaWRlbWVudUdyb3VwJyxcbiAgZGlyZWN0aXZlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUdyb3VwL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbiAgcmV0dXJuICc8ZGl2IGNsYXNzPVwibWQtc2lkZW1lbnUtZ3JvdXBcIiBmbGV4IGxheW91dD1cImNvbHVtblwiIGxheW91dC1hbGlnbj1cInN0YXJ0IHN0YXJ0XCIgbmctdHJhbnNjbHVkZT48L2Rpdj4nO1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51R3JvdXAvdGVtcGxhdGUuanMiLCJpbXBvcnQgY29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUnO1xuaW1wb3J0IGxpbmsgZnJvbSAnLi9saW5rJztcblxubGV0IGRpcmVjdGl2ZSA9ICgpID0+IHtcblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgIGhlYWRpbmc6ICdAbWRIZWFkaW5nJyxcbiAgICAgIGljb246ICdAP21kSWNvbicsXG4gICAgICBzdmdJY29uOiAnQD9tZFN2Z0ljb24nLFxuICAgICAgYXJyb3c6ICdAP21kQXJyb3cnLFxuICAgICAgb25Ib3ZlcjogJ0BvbkhvdmVyJ1xuICAgIH0sXG4gICAgcmVwbGFjZTogdHJ1ZSxcbiAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgIHRlbXBsYXRlLFxuICAgIGNvbnRyb2xsZXIsXG4gICAgY29udHJvbGxlckFzOiAnJG1kU2lkZW1lbnVDb250ZW50JyxcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlLFxuICAgIGxpbmtcbiAgfTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRTaWRlbWVudUNvbnRlbnQnLFxuICBkaXJlY3RpdmVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51Q29udGVudC9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuXG4gIHRoaXMuY2hhbmdlU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnZpc2libGUgPSAhdGhpcy52aXNpYmxlO1xuICB9O1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51Q29udGVudC9jb250cm9sbGVyLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbiAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzPVwibWQtc2lkZW1lbnUtY29udGVudFwiIGxheW91dD1cImNvbHVtblwiPlxuICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXNpZGVtZW51LXRvZ2dsZVwiIG5nLWlmPVwiJG1kU2lkZW1lbnVDb250ZW50LmhlYWRpbmdcIiBuZy1jbGljaz1cIiRtZFNpZGVtZW51Q29udGVudC5jaGFuZ2VTdGF0ZSgpO1wiIG5nLWNsYXNzPVwieyAnbWQtYWN0aXZlJzogJG1kU2lkZW1lbnVDb250ZW50LnZpc2libGUgfVwiPlxuICAgICAgICA8ZGl2IGxheW91dD1cInJvd1wiPlxuICAgICAgICAgIDxtZC1pY29uIG5nLWlmPVwiJG1kU2lkZW1lbnVDb250ZW50LnN2Z0ljb25cIiBtZC1zdmctaWNvbj1cIiRtZFNpZGVtZW51Q29udGVudC5zdmdJY29uXCI+PC9tZC1pY29uPlxuICAgICAgICAgIDxtZC1pY29uIG5nLWlmPVwiJG1kU2lkZW1lbnVDb250ZW50Lmljb25cIj57eyAkbWRTaWRlbWVudUNvbnRlbnQuaWNvbiB9fTwvbWQtaWNvbj5cbiAgICAgICAgICA8c3BhbiBmbGV4Pnt7ICRtZFNpZGVtZW51Q29udGVudC5oZWFkaW5nIH19PC9zcGFuPlxuICAgICAgICAgIDxtZC1pY29uIG5nLWlmPVwiJG1kU2lkZW1lbnVDb250ZW50LmFycm93XCI+a2V5Ym9hcmRfYXJyb3dfZG93bjwvbWQtaWNvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21kLWJ1dHRvbj5cblxuICAgICAgPGRpdiBjbGFzcz1cIm1kLXNpZGVtZW51LXdyYXBwZXJcIiBtZC1zaWRlbWVudS1kaXNhYmxlLWFuaW1hdGUgbmctY2xhc3M9XCJ7ICdtZC1hY3RpdmUnOiAkbWRTaWRlbWVudUNvbnRlbnQudmlzaWJsZSwgJ21kLXNpZGVtZW51LXdyYXBwZXItaWNvbnMnOiAgJG1kU2lkZW1lbnVDb250ZW50Lmljb24gfVwiIGxheW91dD1cImNvbHVtblwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVDb250ZW50L3RlbXBsYXRlLmpzIiwiZXhwb3J0IGRlZmF1bHQgKHNjb3BlLCBlbGVtZW50LCBhdHRycykgPT4ge1xuXG4gIGlmKCBhdHRycy5vbkhvdmVyICl7XG4gICAgLypcbiAgICAgIEFjdGl2ZSBvciBkaXNhYmxlIHRoZSBtZW51IG9uIGhvdmVyIGV2ZW50LlxuICAgICAgQHN0YXR1czogQm9vbGVhblxuICAgICAqL1xuICAgIGxldCBzaG93T3JIaWRlTWVudSA9IChzdGF0dXMpID0+IHtcbiAgICAgICAgc2NvcGUuJGFwcGx5KCAoKSA9PiBzY29wZS4kbWRTaWRlbWVudUNvbnRlbnQudmlzaWJsZSA9IHN0YXR1cyApO1xuICAgIH07XG5cbiAgICBlbGVtZW50Lm9uKCdtb3VzZWVudGVyJywgKCkgPT4geyBzaG93T3JIaWRlTWVudSh0cnVlKTsgIH0pO1xuICAgIGVsZW1lbnQub24oJ21vdXNlbGVhdmUnLCAoKSA9PiB7IHNob3dPckhpZGVNZW51KGZhbHNlKTsgfSk7XG5cbiAgfVxuXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUNvbnRlbnQvbGluay5qcyIsImltcG9ydCBjb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcic7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZSc7XG5cbmxldCBkaXJlY3RpdmUgPSAoKSA9PiB7XG5cbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHNjb3BlOiB7XG4gICAgICB1aVNyZWY6ICdAPycsXG4gICAgICB1aVNyZWZBY3RpdmU6ICdAPycsXG4gICAgICBocmVmOiAnQD8nLFxuICAgICAgdGFyZ2V0OiAnQD8nXG4gICAgfSxcbiAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgIHRlbXBsYXRlLFxuICAgIGNvbnRyb2xsZXIsXG4gICAgY29udHJvbGxlckFzOiAnJG1kU2lkZW1lbnVCdXR0b24nLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiAgfTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRTaWRlbWVudUJ1dHRvbicsXG4gIGRpcmVjdGl2ZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVCdXR0b24vaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUJ1dHRvbi9jb250cm9sbGVyLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbiAgcmV0dXJuIGBcbiAgICA8bWQtYnV0dG9uXG4gICAgICBjbGFzcz1cIm1kLXNpZGVtZW51LWJ1dHRvblwiXG4gICAgICBsYXlvdXQ9XCJjb2x1bW5cIlxuICAgICAgbmctYXR0ci1ocmVmPVwie3sgJG1kU2lkZW1lbnVCdXR0b24uaHJlZiB9fVwiXG4gICAgICBuZy1hdHRyLXVpLXNyZWY9XCJ7eyAkbWRTaWRlbWVudUJ1dHRvbi51aVNyZWYgfX1cIlxuICAgICAgbmctYXR0ci11aS1zcmVmLWFjdGl2ZT1cInt7ICRtZFNpZGVtZW51QnV0dG9uLnVpU3JlZkFjdGl2ZSB9fVwiXG4gICAgICBuZy1hdHRyLXRhcmdldD1cInt7ICRtZFNpZGVtZW51QnV0dG9uLnRhcmdldCB9fVwiPlxuICAgICAgPGRpdiBsYXlvdXQ9XCJyb3dcIiBsYXlvdXQtZmlsbCBsYXlvdXQtYWxpZ249XCJzdGFydCBjZW50ZXJcIiBuZy10cmFuc2NsdWRlPjwvZGl2PlxuICAgIDwvbWQtYnV0dG9uPlxuICBgO1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51QnV0dG9uL3RlbXBsYXRlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==