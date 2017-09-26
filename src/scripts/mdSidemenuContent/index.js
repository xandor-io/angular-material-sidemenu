import controller from './controller';
import template from './template';
import link from './link';

let directive = () => {

  return {
    restrict: 'E',
    scope: {
      heading: '@mdHeading',
      icon: '@?mdIcon',
      svgIcon: '@?mdSvgIcon',
      arrow: '@?mdArrow',
      collapseOther: '@?collapseOther',
      onHover: '@onHover'
    },
    replace: true,
    transclude: true,
    template,
    controller,
    controllerAs: '$mdSidemenuContent',
    bindToController: true,
    link
  };

};

export default {
  name: 'mdSidemenuContent',
  directive
};
