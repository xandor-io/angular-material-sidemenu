(function(window, angular, undefined) {

  'use strict';

  var ngMaterialSidemenu = angular.module('ngMaterialSidemenu', ['ngMaterial']);

  var templates = {
    sidemenuContent: [
      '<md-button class="md-sidemenu-toggle" ng-if="mdHeading" ng-click="changeWrapperState();" ng-class="{ \'md-active\': isActive }">',
        '<div layout="row">',
          '<md-icon class="material-icons" ng-if="mdIcon">{{ mdIcon }}</md-icon>',
          '<span flex>{{ mdHeading }}</span>',
          '<md-icon class="material-icons" ng-if="mdArrow">keyboard_arrow_down</md-icon>',
        '</div>',
      '</md-button>',
      '<div class="md-sidemenu-wrapper" md-sidemenu-disable-animate ng-class="{ \'md-active\': isActive, \'md-sidemenu-wrapper-icons\':  mdIcon }" layout="column" ng-transclude></div>'
    ].join(''),
    sidemenuLink: [
      '<md-button ng-attr-href="{{ sidemenuLink.href }}" ng-attr-uiSref="{{ sidemenuLink.uiSref }}" ng-attr-target="{{ sidemenuLink.target }}">',
        '<div class="layout-row" ng-transclude></div>',
      '</md-button>'
    ].join('')
  };

  ngMaterialSidemenu.directive('mdSidemenuDisableAnimate', function($animate) {
    return function($scope, element) {
      $animate.enabled(element, false);
    };
  });

  ngMaterialSidemenu.directive('mdSidemenu', function() {
    return {
      compile: function($scope, element) {
        element.$$element[0].classList.add('md-sidemenu');
        element.$$element[0].classList.add('flex');
        element.$$element[0].classList.add('layout-column');
        element.$$element[0].classList.add('layout-align-start-start');
      }
    };
  });

  ngMaterialSidemenu.directive('mdSidemenuGroup', function($compile) {
    return {
      compile: function($scope, element) {
        element.$$element[0].classList.add('md-sidemenu-group');
        element.$$element[0].classList.add('layout-column');
        element.$$element[0].classList.add('layout-fill');
        element.$$element[0].classList.add('layout-align-start-start');
      }
    };
  });

  ngMaterialSidemenu.directive('mdSidemenuContent', function($timeout) {
    return {
      restrict: 'EA',
      scope: {
        mdIcon: '@',
        mdHeading: '@',
        mdArrow: '='
      },
      controllerAs: 'sidemenuContent',
      transclude: true,
      template: templates.sidemenuContent,
      link: function($scope, element, attributes) {
        var $wrapper = element.children('.md-sidemenu-wrapper');

        element[0].classList.add('md-sidemenu-content');
        element[0].classList.add('layout-column');
        element[0].classList.add('layout-fill');

        $timeout(function() {
          $wrapper.css('margin-top', '-100%');
        });

        $scope.isActive = false;

        $scope.changeWrapperState = function() {
          $scope.isActive = !$scope.isActive;

          if (parseInt($wrapper.css('margin-top'), 10) === 0) {
            $wrapper.css('margin-top', -$wrapper[0].offsetHeight + 'px');
          } else {
            $wrapper.css('margin-top', 0);
          }
        };
      }
    };
  });

  ngMaterialSidemenu.directive('mdSidemenuLink', function() {
    return {
        restrict: 'EA',
        scope: {
          uiSref: '@',
          href: '@',
          target: '@'
        },
        controllerAs: 'sidemenuLink',
        transclude: true,
        template: templates.sidemenuLink,
        compile: function($scope, element) {
          element.$$element[0].classList.add('md-sidemenu-link');
          element.$$element[0].classList.add('layout-column');
          element.$$element[0].classList.add('layout-fill');
        }
    };
  });

})(window, window.angular);
