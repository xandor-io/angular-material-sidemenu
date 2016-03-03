import mdSidemenu from './scripts/mdSidemenu';
import mdSidemenuGroup from './scripts/mdSidemenuGroup';
import mdSidemenuContent from './scripts/mdSidemenuContent';
import mdSidemenuButton from './scripts/mdSidemenuButton';

((angular) => {

  angular
    .module('ngMaterialSidemenu', [
      'ngMaterial'
    ])
    .directive(mdSidemenu.name, mdSidemenu.directive)
    .directive(mdSidemenuGroup.name, mdSidemenuGroup.directive)
    .directive(mdSidemenuContent.name, mdSidemenuContent.directive)
    .directive(mdSidemenuButton.name, mdSidemenuButton.directive);

})(angular);
