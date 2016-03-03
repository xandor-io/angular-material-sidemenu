import template from './template';
import link from './link';

let directive = () => {

  return {
    restrict: 'E',
    scope: {
      locked: '@?mdLocked'
    },
    replace: true,
    transclude: true,
    template,
    link
  };

};

export default {
  name: 'mdSidemenu',
  directive
};
