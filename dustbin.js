class Dustbin{

    constructor(x,y){

    this.lbody=Bodies.rectangle(x-100,y-40,20,100,{isStatic:true});
    this.rbody=Bodies.rectangle(x+100,y-40,20,100,{isStatic:true});
    this.bbody=Bodies.rectangle(x,y,200,20,{isStatic:true});
    World.add(myworld,this.lbody);
    World.add(myworld,this.rbody);
    World.add(myworld,this.bbody);
    this.image=loadImage("dustbingreen.png");
    }


    display(){

    //rectMode(CENTER);
    //rect(this.lbody.position.x,this.lbody.position.y,20,100);
    //rect(this.rbody.position.x,this.rbody.position.y,20,100);
    //rect(this.bbody.position.x,this.bbody.position.y,200,20)
    imageMode(CENTER);
    image(this.image,this.bbody.position.x,this.bbody.position.y-50,220,120);
 

    }
}