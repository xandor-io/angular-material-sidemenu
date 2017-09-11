export default function() {

  this.visible = this.visible || false;

  this.changeState = function() {
    this.visible = !this.visible;
  };

}
