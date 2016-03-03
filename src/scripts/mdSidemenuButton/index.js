import controller from './controller';
import template from './template';

let directive = () => {

  return {
    restrict: 'E',
    scope: {
      uiSref: '@?',
      href: '@?',
      target: '@?'
    },
    transclude: true,
    template,
    controller,
    controllerAs: '$mdSidemenuButton',
    bindToController: true
  };

};

export default {
  name: 'mdSidemenuButton',
  directive
};
