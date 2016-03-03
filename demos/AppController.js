var controller = function($mdSidenav) {

  this.toggleNavigation = function() {
    $mdSidenav('navigation-drawer').toggle();
  };

};

angular.module('ngMaterialSidemenu').controller('AppController', controller);
