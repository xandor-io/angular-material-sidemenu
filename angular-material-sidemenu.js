(function(window, angular, undefined) {

    'use strict';


    var ngMaterialSidemenu = angular.module('ngMaterialSidemenu', ['ngMaterial']);

    ngMaterialSidemenu.directive('mdSidemenu', function() {
        return {
            compile: function($scope, element) {
                element[0].classList.add('flex');
                element[0].classList.add('layout-column');
                element[0].classList.add('layout-align-start-start');
            }
        };
    });

    ngMaterialSidemenu.directive('mdSidemenuGroup', function($compile) {
        return {
            compile: function($scope, element) {
                element[0].classList.add('md-sidemenu-group');
                element[0].classList.add('layout-column');
                element[0].classList.add('layout-fill');
                element[0].classList.add('layout-align-start-start');
            }
        };
    });

    ngMaterialSidemenu.directive('mdSidemenuContent', function($timeout) {
        return {
            restrict: 'EA',
            scope: {
                mdHeading: '@',
                mdArrow: '='
            },
            transclude: true,
            template: '<md-button class="md-sidemenu-toggle" ng-if="mdHeading" ng-class="{\'md-active\': isActive}"><div layout="row"><span flex>{{mdHeading}}</span> <md-icon md-font-icon="material-icons" ng-if="mdArrow">keyboard_arrow_down</md-icon></div></md-button> <div class="md-sidemenu-wrapper" ng-class="{\'md-active\': isActive}" layout="column" ng-transclude></div>',
            compile: function($scope, element) {
                element[0].classList.add('md-sidemenu-content');
                element[0].classList.add('layout-column');
                element[0].classList.add('layout-fill');
            },
            controller: function($scope) {
                $scope.isActive = false;
            }
        };
    });

    ngMaterialSidemenu.directive('mdSidemenuLink', function() {
        return {
            restrict: 'EA',
            scope: {
                href: '@',
                target: '@'
            },
            transclude: true,
            template: '<md-button ng-attr-href="{{href}}" ng-attr-target="{{target}}"><div ng-transclude></div></md-button>',
            compile: function($scope, element) {
                element[0].classList.add('md-sidemenu-link');
                element[0].classList.add('layout-column');
                element[0].classList.add('layout-fill');
            }
        };
    });

})(window, window.angular);
