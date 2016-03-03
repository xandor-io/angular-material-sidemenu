export default function() {

  return `
    <md-button class="md-sidemenu-button" layout="column" ng-attr-href="{{ $mdSidemenuButton.href }}" ng-attr-uiSref="{{ $mdSidemenuButton.uiSref }}" ng-attr-target="{{ $mdSidemenuButton.target }}">
      <div layout="row" layout-fill layout-align="start center" ng-transclude></div>
    </md-button>
  `;

}
