(function() {

    'use strict';


    var ngMaterialSidemenu = angular.module('ngMaterialSidemenu', ['ngMaterial']);

    ngMaterialSidemenu.directive('mdSidemenu', function() {
        return {
            link: function($scope, element, attributes) {
                element
                    .attr({
                        'flex': '',
                        'layout': 'column',
                        'layout-align': 'start start'
                    })
                    .addClass('md-sidemenu');
            }
        };
    });

    ngMaterialSidemenu.directive('mdSidemenuGroup', function($compile) {
        return {
            link: function($scope, element, attributes) {
                element
                    .attr({
                        'layout': 'column',
                        'layout-fill': '',
                        'layout-align': 'start start'
                    })
                    .addClass('md-sidemenu-group');
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
            link: function($scope, element, attributes) {
                element
                    .attr({
                        'layout-fill': '',
                        'layout': 'column'
                    })
                    .addClass('md-sidemenu-content');
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
            link: function($scope, element, attributes) {
                element
                    .attr({
                        'layout': 'column',
                        'layout-fill': ''
                    })
                    .addClass('md-sidemenu-link');
            }
        };
    });


})();
