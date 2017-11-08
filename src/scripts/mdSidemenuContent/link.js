/*
  Loop in the wrapper element searching for wrapper childrens
  and increase the size
*/

const getTheChildrensLength = ( wrapper ) => {

  let size = 0;

  for( let i = 0; i < wrapper.length; i++ ){
    size += 48;
    if( wrapper[i].id ){
      size += getTheChildrensLength( wrapper.children() );
      continue;
    }
  }

  return size;

};

export default (scope, element, attrs) => {

/*
  Check if the container exists an id, if haven't,
  we'll create.
*/
if( !attrs.id ){
  element.attr('id', (new Date()).getTime() );
}

 /*
  Get the wrapper content, Calc the childrens buttons and
  set the margin top property with the length buttons.
  The number 48 is fixed because the css file is fixed.
 */

  let wrapper = angular.element(element.children());
  wrapper.css('marginTop', -( getTheChildrensLength( wrapper.children() ) ) + 'px');


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
