export default (scope, element, attrs) => {

  if( attrs.onHover ){
    /*
      Active or disable the menu on hover event.
      @status: Boolean
     */
    let showOrHideMenu = (status) => {
        scope.$apply( () => scope.$mdSidemenuContent.visible = status );
    };

    element.on('mouseenter', () => { showOrHideMenu(true);  });
    element.on('mouseleave', () => { showOrHideMenu(false); });

  }

};
