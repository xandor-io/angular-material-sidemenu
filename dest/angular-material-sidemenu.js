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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _mdSidemenu = __webpack_require__(1);
	
	var _mdSidemenu2 = _interopRequireDefault(_mdSidemenu);
	
	var _mdSidemenuGroup = __webpack_require__(4);
	
	var _mdSidemenuGroup2 = _interopRequireDefault(_mdSidemenuGroup);
	
	var _mdSidemenuContent = __webpack_require__(6);
	
	var _mdSidemenuContent2 = _interopRequireDefault(_mdSidemenuContent);
	
	var _mdSidemenuButton = __webpack_require__(9);
	
	var _mdSidemenuButton2 = _interopRequireDefault(_mdSidemenuButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(function (angular) {
	
	  angular.module('ngMaterialSidemenu', ['ngMaterial']).directive(_mdSidemenu2.default.name, _mdSidemenu2.default.directive).directive(_mdSidemenuGroup2.default.name, _mdSidemenuGroup2.default.directive).directive(_mdSidemenuContent2.default.name, _mdSidemenuContent2.default.directive).directive(_mdSidemenuButton2.default.name, _mdSidemenuButton2.default.directive);
	})(angular);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 2 */
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
/* 3 */
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	
	  return '<div class="md-sidemenu-group" flex layout="column" layout-align="start start" ng-transclude></div>';
	};

/***/ },
/* 6 */
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
	      heading: '@mdHeading',
	      icon: '@?mdIcon',
	      svgIcon: '@?mdSvgIcon',
	      arrow: '@?mdArrow',
	      collapseOther: '@?collapseOther'
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
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	
	  this.visible = false;
	
	  this.changeState = function () {
	
	    if (!this.visible && this.collapseOther) {
	      var allmenu = document.querySelectorAll('.md-sidemenu-toggle');
	      for (var i = 0; i < allmenu.length; i++) {
	
	        angular.element(allmenu[i]).scope().$parent.$mdSidemenuContent.visible = false;
	      }
	    }
	    this.visible = !this.visible;
	  };
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	
	  return "\n    <div class=\"md-sidemenu-content\" layout=\"column\">\n      <md-button class=\"md-sidemenu-toggle\" ng-if=\"$mdSidemenuContent.heading\" ng-click=\"$mdSidemenuContent.changeState();\" ng-class=\"{ 'md-active': $mdSidemenuContent.visible }\">\n        <div layout=\"row\">\n          <md-icon ng-if=\"$mdSidemenuContent.svgIcon\" md-svg-icon=\"$mdSidemenuContent.svgIcon\"></md-icon>\n          <md-icon ng-if=\"$mdSidemenuContent.icon\">{{ $mdSidemenuContent.icon }}</md-icon>\n          <span flex>{{ $mdSidemenuContent.heading }}</span>\n          <md-icon ng-if=\"$mdSidemenuContent.arrow\">keyboard_arrow_down</md-icon>\n        </div>\n      </md-button>\n\n      <div class=\"md-sidemenu-wrapper\" md-sidemenu-disable-animate ng-class=\"{ 'md-active': $mdSidemenuContent.visible, 'md-sidemenu-wrapper-icons':  $mdSidemenuContent.icon }\" layout=\"column\" ng-transclude></div>\n    </div>\n  ";
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _controller = __webpack_require__(10);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _template = __webpack_require__(11);
	
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

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {};

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	
	  return "\n    <md-button\n      class=\"md-sidemenu-button\"\n      layout=\"column\"\n      ng-attr-href=\"{{ $mdSidemenuButton.href }}\"\n      ng-attr-ui-sref=\"{{ $mdSidemenuButton.uiSref }}\"\n      ng-attr-ui-sref-active=\"{{ $mdSidemenuButton.uiSrefActive }}\"\n      ng-attr-target=\"{{ $mdSidemenuButton.target }}\">\n      <div layout=\"row\" layout-fill layout-align=\"start center\" ng-transclude></div>\n    </md-button>\n  ";
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWQ2ODAxZTkwMTA4ZjczZjAxZGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51L3RlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnUvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51R3JvdXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUdyb3VwL3RlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVDb250ZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVDb250ZW50L2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUNvbnRlbnQvdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUJ1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51QnV0dG9uL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUJ1dHRvbi90ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiZGlyZWN0aXZlIiwibmFtZSIsInJlc3RyaWN0Iiwic2NvcGUiLCJsb2NrZWQiLCJyZXBsYWNlIiwidHJhbnNjbHVkZSIsInRlbXBsYXRlIiwibGluayIsIiRlbGVtZW50IiwiJGF0dHJpYnV0ZXMiLCIkc2NvcGUiLCIkd2F0Y2giLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJoZWFkaW5nIiwiaWNvbiIsInN2Z0ljb24iLCJhcnJvdyIsImNvbGxhcHNlT3RoZXIiLCJjb250cm9sbGVyIiwiY29udHJvbGxlckFzIiwiYmluZFRvQ29udHJvbGxlciIsInZpc2libGUiLCJjaGFuZ2VTdGF0ZSIsImFsbG1lbnUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwiZWxlbWVudCIsIiRwYXJlbnQiLCIkbWRTaWRlbWVudUNvbnRlbnQiLCJ1aVNyZWYiLCJ1aVNyZWZBY3RpdmUiLCJocmVmIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7QUFBQTs7QUFJQSxLQUFJLGVBQWUsdUJBQXVCOztBQUgxQzs7QUFPQSxLQUFJLG9CQUFvQix1QkFBdUI7O0FBTi9DOztBQVVBLEtBQUksc0JBQXNCLHVCQUF1Qjs7QUFUakQ7O0FBYUEsS0FBSSxxQkFBcUIsdUJBQXVCOztBQUVoRCxVQUFTLHVCQUF1QixLQUFLLEVBQUUsT0FBTyxPQUFPLElBQUksYUFBYSxNQUFNLEVBQUUsU0FBUzs7QUFidkYsRUFBQyxVQUFDQSxTQUFZOztHQUVaQSxRQUNHQyxPQUFPLHNCQUFzQixDQUM1QixlQUVEQyxVQUFVLHFCQUFXQyxNQUFNLHFCQUFXRCxXQUN0Q0EsVUFBVSwwQkFBZ0JDLE1BQU0sMEJBQWdCRCxXQUNoREEsVUFBVSw0QkFBa0JDLE1BQU0sNEJBQWtCRCxXQUNwREEsVUFBVSwyQkFBaUJDLE1BQU0sMkJBQWlCRDtJQUVwREYsUzs7Ozs7O0FDaEJIOztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7R0FDM0MsT0FBTzs7O0FBSFQ7O0FBUUEsS0FBSSxhQUFhLHVCQUF1Qjs7QUFQeEM7O0FBV0EsS0FBSSxTQUFTLHVC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LEtBQUksYUFBYSx1QkFBdUI7O0FBRXhDLFVBQVMsdUJBQXVCLEtBQUssRUFBRSxPQUFPLE9BQU8sSUFBSSxhQUFhLE1BQU0sRUFBRSxTQUFTOztBQVh2RixLQUFJeEIsWUFBWSxTQUFaQSxZQUFrQjs7R0FFcEIsT0FBTztLQUNMRSxVQUFVO0tBQ1ZDLE9BQU87T0FDTCtCLFFBQVE7T0FDUkMsY0FBYztPQUNkQyxNQUFNO09BQ05DLFFBQVE7O0tBRVYvQixZQUFZO0tBQ1pDO0tBQ0FjO0tBQ0FDLGNBQWM7S0FDZEMsa0JBQWtCOzs7O0FBaUJ0QixTQUFRLFVBWk87R0FDYnRCLE1BQU07R0FDTkQ7Ozs7Ozs7QUN4QkY7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztHQUMzQyxPQUFPOzs7QUFHVCxTQUFRLFVBTk8sWUFBVyxHOzs7Ozs7QUNBMUI7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztHQUMzQyxPQUFPOzs7QUFHVCxTQUFRLFVBTk8sWUFBVzs7R0FFeEIiLCJmaWxlIjoiYW5ndWxhci1tYXRlcmlhbC1zaWRlbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDVkNjgwMWU5MDEwOGY3M2YwMWRlIiwiaW1wb3J0IG1kU2lkZW1lbnUgZnJvbSAnLi9zY3JpcHRzL21kU2lkZW1lbnUnO1xuaW1wb3J0IG1kU2lkZW1lbnVHcm91cCBmcm9tICcuL3NjcmlwdHMvbWRTaWRlbWVudUdyb3VwJztcbmltcG9ydCBtZFNpZGVtZW51Q29udGVudCBmcm9tICcuL3NjcmlwdHMvbWRTaWRlbWVudUNvbnRlbnQnO1xuaW1wb3J0IG1kU2lkZW1lbnVCdXR0b24gZnJvbSAnLi9zY3JpcHRzL21kU2lkZW1lbnVCdXR0b24nO1xuXG4oKGFuZ3VsYXIpID0+IHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnbmdNYXRlcmlhbFNpZGVtZW51JywgW1xuICAgICAgJ25nTWF0ZXJpYWwnXG4gICAgXSlcbiAgICAuZGlyZWN0aXZlKG1kU2lkZW1lbnUubmFtZSwgbWRTaWRlbWVudS5kaXJlY3RpdmUpXG4gICAgLmRpcmVjdGl2ZShtZFNpZGVtZW51R3JvdXAubmFtZSwgbWRTaWRlbWVudUdyb3VwLmRpcmVjdGl2ZSlcbiAgICAuZGlyZWN0aXZlKG1kU2lkZW1lbnVDb250ZW50Lm5hbWUsIG1kU2lkZW1lbnVDb250ZW50LmRpcmVjdGl2ZSlcbiAgICAuZGlyZWN0aXZlKG1kU2lkZW1lbnVCdXR0b24ubmFtZSwgbWRTaWRlbWVudUJ1dHRvbi5kaXJlY3RpdmUpO1xuXG59KShhbmd1bGFyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluLmpzIiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUnO1xuaW1wb3J0IGxpbmsgZnJvbSAnLi9saW5rJztcblxubGV0IGRpcmVjdGl2ZSA9ICgpID0+IHtcblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgIGxvY2tlZDogJ0A/bWRMb2NrZWQnXG4gICAgfSxcbiAgICByZXBsYWNlOiB0cnVlLFxuICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgdGVtcGxhdGUsXG4gICAgbGlua1xuICB9O1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZFNpZGVtZW51JyxcbiAgZGlyZWN0aXZlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudS9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCRlbGVtZW50LCAkYXR0cmlidXRlcykge1xuXG4gIGxldCBsb2NrZWQgPSAkYXR0cmlidXRlcy5sb2NrZWQgJiYgJ21kLXNpZGVtZW51LWxvY2tlZCc7XG5cbiAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibWQtc2lkZW1lbnUgJHsgbG9ja2VkIH1cIiBuZy10cmFuc2NsdWRlPjwvZGl2PmA7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL21kU2lkZW1lbnUvdGVtcGxhdGUuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigkc2NvcGUsICRlbGVtZW50LCAkYXR0cmlidXRlcykge1xuXG4gICRzY29wZS4kd2F0Y2goZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICRhdHRyaWJ1dGVzLmxvY2tlZDtcbiAgfSwgZnVuY3Rpb24obG9ja2VkKSB7XG4gICAgaWYgKGxvY2tlZCkge1xuICAgICAgJGVsZW1lbnRbMF0uY2xhc3NMaXN0LmFkZCgnbWQtc2lkZW1lbnUtbG9ja2VkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICRlbGVtZW50WzBdLmNsYXNzTGlzdC5yZW1vdmUoJ21kLXNpZGVtZW51LWxvY2tlZCcpO1xuICAgIH1cbiAgfSk7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL21kU2lkZW1lbnUvbGluay5qcyIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlJztcblxubGV0IGRpcmVjdGl2ZSA9ICgpID0+IHtcblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgcmVwbGFjZTogdHJ1ZSxcbiAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgIHRlbXBsYXRlXG4gIH07XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kU2lkZW1lbnVHcm91cCcsXG4gIGRpcmVjdGl2ZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVHcm91cC9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gIHJldHVybiAnPGRpdiBjbGFzcz1cIm1kLXNpZGVtZW51LWdyb3VwXCIgZmxleCBsYXlvdXQ9XCJjb2x1bW5cIiBsYXlvdXQtYWxpZ249XCJzdGFydCBzdGFydFwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+JztcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUdyb3VwL3RlbXBsYXRlLmpzIiwiaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlJztcblxubGV0IGRpcmVjdGl2ZSA9ICgpID0+IHtcblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgIGhlYWRpbmc6ICdAbWRIZWFkaW5nJyxcbiAgICAgIGljb246ICdAP21kSWNvbicsXG4gICAgICBzdmdJY29uOiAnQD9tZFN2Z0ljb24nLFxuICAgICAgYXJyb3c6ICdAP21kQXJyb3cnLFxuICAgICAgY29sbGFwc2VPdGhlcjogJ0A/Y29sbGFwc2VPdGhlcicgXG4gICAgfSxcbiAgICByZXBsYWNlOiB0cnVlLFxuICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgdGVtcGxhdGUsXG4gICAgY29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICckbWRTaWRlbWVudUNvbnRlbnQnLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiAgfTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRTaWRlbWVudUNvbnRlbnQnLFxuICBkaXJlY3RpdmVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51Q29udGVudC9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuXG4gIHRoaXMuY2hhbmdlU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBcbiAgICBpZiAoIXRoaXMudmlzaWJsZSAmJiB0aGlzLmNvbGxhcHNlT3RoZXIpe1xuICAgICAgICB2YXIgYWxsbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZC1zaWRlbWVudS10b2dnbGUnKTtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPGFsbG1lbnUubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGFuZ3VsYXIuZWxlbWVudChhbGxtZW51W2ldKS5zY29wZSgpLiRwYXJlbnQuJG1kU2lkZW1lbnVDb250ZW50LnZpc2libGUgPSBmYWxzZVxuICAgICAgICB9IFxuICAgIH1cbiAgICB0aGlzLnZpc2libGUgPSAhdGhpcy52aXNpYmxlO1xuICB9O1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51Q29udGVudC9jb250cm9sbGVyLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbiAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzPVwibWQtc2lkZW1lbnUtY29udGVudFwiIGxheW91dD1cImNvbHVtblwiPlxuICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXNpZGVtZW51LXRvZ2dsZVwiIG5nLWlmPVwiJG1kU2lkZW1lbnVDb250ZW50LmhlYWRpbmdcIiBuZy1jbGljaz1cIiRtZFNpZGVtZW51Q29udGVudC5jaGFuZ2VTdGF0ZSgpO1wiIG5nLWNsYXNzPVwieyAnbWQtYWN0aXZlJzogJG1kU2lkZW1lbnVDb250ZW50LnZpc2libGUgfVwiPlxuICAgICAgICA8ZGl2IGxheW91dD1cInJvd1wiPlxuICAgICAgICAgIDxtZC1pY29uIG5nLWlmPVwiJG1kU2lkZW1lbnVDb250ZW50LnN2Z0ljb25cIiBtZC1zdmctaWNvbj1cIiRtZFNpZGVtZW51Q29udGVudC5zdmdJY29uXCI+PC9tZC1pY29uPlxuICAgICAgICAgIDxtZC1pY29uIG5nLWlmPVwiJG1kU2lkZW1lbnVDb250ZW50Lmljb25cIj57eyAkbWRTaWRlbWVudUNvbnRlbnQuaWNvbiB9fTwvbWQtaWNvbj5cbiAgICAgICAgICA8c3BhbiBmbGV4Pnt7ICRtZFNpZGVtZW51Q29udGVudC5oZWFkaW5nIH19PC9zcGFuPlxuICAgICAgICAgIDxtZC1pY29uIG5nLWlmPVwiJG1kU2lkZW1lbnVDb250ZW50LmFycm93XCI+a2V5Ym9hcmRfYXJyb3dfZG93bjwvbWQtaWNvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21kLWJ1dHRvbj5cblxuICAgICAgPGRpdiBjbGFzcz1cIm1kLXNpZGVtZW51LXdyYXBwZXJcIiBtZC1zaWRlbWVudS1kaXNhYmxlLWFuaW1hdGUgbmctY2xhc3M9XCJ7ICdtZC1hY3RpdmUnOiAkbWRTaWRlbWVudUNvbnRlbnQudmlzaWJsZSwgJ21kLXNpZGVtZW51LXdyYXBwZXItaWNvbnMnOiAgJG1kU2lkZW1lbnVDb250ZW50Lmljb24gfVwiIGxheW91dD1cImNvbHVtblwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVDb250ZW50L3RlbXBsYXRlLmpzIiwiaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlJztcblxubGV0IGRpcmVjdGl2ZSA9ICgpID0+IHtcblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgIHVpU3JlZjogJ0A/JyxcbiAgICAgIHVpU3JlZkFjdGl2ZTogJ0A/JyxcbiAgICAgIGhyZWY6ICdAPycsXG4gICAgICB0YXJnZXQ6ICdAPydcbiAgICB9LFxuICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgdGVtcGxhdGUsXG4gICAgY29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICckbWRTaWRlbWVudUJ1dHRvbicsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICB9O1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZFNpZGVtZW51QnV0dG9uJyxcbiAgZGlyZWN0aXZlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUJ1dHRvbi9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51QnV0dG9uL2NvbnRyb2xsZXIuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcblxuICByZXR1cm4gYFxuICAgIDxtZC1idXR0b25cbiAgICAgIGNsYXNzPVwibWQtc2lkZW1lbnUtYnV0dG9uXCJcbiAgICAgIGxheW91dD1cImNvbHVtblwiXG4gICAgICBuZy1hdHRyLWhyZWY9XCJ7eyAkbWRTaWRlbWVudUJ1dHRvbi5ocmVmIH19XCJcbiAgICAgIG5nLWF0dHItdWktc3JlZj1cInt7ICRtZFNpZGVtZW51QnV0dG9uLnVpU3JlZiB9fVwiXG4gICAgICBuZy1hdHRyLXVpLXNyZWYtYWN0aXZlPVwie3sgJG1kU2lkZW1lbnVCdXR0b24udWlTcmVmQWN0aXZlIH19XCJcbiAgICAgIG5nLWF0dHItdGFyZ2V0PVwie3sgJG1kU2lkZW1lbnVCdXR0b24udGFyZ2V0IH19XCI+XG4gICAgICA8ZGl2IGxheW91dD1cInJvd1wiIGxheW91dC1maWxsIGxheW91dC1hbGlnbj1cInN0YXJ0IGNlbnRlclwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XG4gICAgPC9tZC1idXR0b24+XG4gIGA7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVCdXR0b24vdGVtcGxhdGUuanMiXSwic291cmNlUm9vdCI6IiJ9