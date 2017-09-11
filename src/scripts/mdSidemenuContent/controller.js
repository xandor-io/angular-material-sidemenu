export default function() {

  this.visible = false;

  this.changeState = function() {
    
    if (!this.visible && this.collapseOther){
        var allmenu = document.querySelectorAll('.md-sidemenu-toggle');
        for (var i=0; i<allmenu.length;i++){
            
            angular.element(allmenu[i]).scope().$parent.$mdSidemenuContent.visible = false
        } 
    }
    this.visible = !this.visible;
  };

}
