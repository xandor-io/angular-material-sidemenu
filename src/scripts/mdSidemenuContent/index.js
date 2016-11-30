import controller from './controller';
import template from './template';

let directive = () => {

  return {
    restrict: 'E',
    scope: {
      heading: '@mdHeading',
      icon: '@?mdIcon',
      svgIcon: '@?mdSvgIcon',
      fontIcon: '@?mdFontIcon',
      arrow: '@?mdArrow',
      svgArrow: '@?mdSvgArrow'
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
