(function(window, angular, undefined) {

    'use strict';


    var ngMaterialSidemenu = angular.module('ngMaterialSidemenu', ['ngMaterial']);

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
                mdHeading: '@',
                mdArrow: '='
            },
            transclude: true,
            template: '<md-button class="md-sidemenu-toggle" ng-if="mdHeading" ng-click="isActive = !isActive;" ng-class="{\'md-active\': isActive}"><div layout="row"><span flex>{{mdHeading}}</span> <md-icon class="material-icons" ng-if="mdArrow">keyboard_arrow_down</md-icon></div></md-button> <div class="md-sidemenu-wrapper" ng-class="{\'md-active\': isActive}" layout="column" ng-transclude></div>',
            link: function($scope, element, attributes) {
                var $wrapper = element.children('.md-sidemenu-wrapper');

                element[0].classList.add('md-sidemenu-content');
                element[0].classList.add('layout-column');
                element[0].classList.add('layout-fill');

                element.on('click', function() {
                    $scope.isActive = !$scope.isActive;

                    if (parseInt($wrapper.css('margin-top'), 10) === 0) {
                        $wrapper.css('margin-top', -$wrapper[0].offsetHeight + 'px');
                    } else {
                        $wrapper.css('margin-top', 0);
                    }
                });

                $timeout(function() {
                    $wrapper.css('margin-top', '-100%');
                });
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
                uiSref: '@',
                href: '@',
                target: '@'
            },
            transclude: true,
            template: '<md-button ng-attr-href="{{href}}" ng-attr-uiSref="{{uiSref}}" ng-attr-target="{{target}}"><div ng-transclude></div></md-button>',
            compile: function($scope, element) {
                element.$$element[0].classList.add('md-sidemenu-link');
                element.$$element[0].classList.add('layout-column');
                element.$$element[0].classList.add('layout-fill');
            }
        };
    });

})(window, window.angular);
