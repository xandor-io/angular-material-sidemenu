export default function($scope, $element, $attributes) {

  $scope.$watch(function() {
    return $attributes.locked;
  }, function(locked) {
    if (locked) {
      $element[0].classList.add('md-sidemenu-locked');
    } else {
      $element[0].classList.remove('md-sidemenu-locked');
    }
  });

}
