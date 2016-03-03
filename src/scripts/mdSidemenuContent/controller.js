export default function() {

  this.visible = false;

  this.changeState = function() {
    this.visible = !this.visible;
  };

}
