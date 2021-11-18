export default class Card extends Phaser.GameObjects.Sprite{

constructor(scene, x, y, name, sprite, family, audiencemod, effect){
    super(scene,x,y,sprite);
    //this.scene.add.existing(this);

    this.scene.add.image(x,y,sprite).setInteractive({ draggable: true }).setScale(.3);
    //this.scene.input.on('pointerdown', this.scene.startDrag, this.scene);
    //scene.input.setDraggable(this);
    this._name=name;
    this._enjuego = false;
    this._family=family;
    this._audiencemod = audiencemod;
    this._drawn = false;
    this._effect=effect;
}


ondrawn(){
    this.drawn = true;
}

onplayed(){
    this._effect;
    this.scene.audienceFocus += this._audiencemod;
    this._enjuego=true;
}



}