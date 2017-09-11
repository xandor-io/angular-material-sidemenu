import controller from './controller';
import template from './template';

let directive = () => {

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
    template,
    controller,
    controllerAs: '$mdSidemenuContent',
    bindToController: true
  };

};

export default {
  name: 'mdSidemenuContent',
  directive
};
