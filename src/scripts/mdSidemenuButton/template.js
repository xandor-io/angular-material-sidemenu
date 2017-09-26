export default function() {

  return `
    <md-button
      class="md-sidemenu-button"
      layout="column"
      href="{{ $mdSidemenuButton.href }}"
      ui-sref="{{ $mdSidemenuButton.uiSref }}"
      ui-sref-active="{{ $mdSidemenuButton.uiSrefActive }}"
      target="{{ $mdSidemenuButton.target }}">
      <div layout="row" layout-fill layout-align="start center" ng-transclude></div>
    </md-button>
  `;

}
