export default function($element, $attributes) {

  let locked = $attributes.locked && 'md-sidemenu-locked';

  return `<div class="md-sidemenu ${ locked }" ng-transclude></div>`;

}
