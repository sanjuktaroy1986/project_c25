class Paper{

    constructor(x,y,r){

    var options={
        restitution:0.3,
        friction:1,
        density:1.2
    }    
    this.body=Bodies.circle(x,y,r/3,options);
    World.add(myworld,this.body);
    this.r=r;
    this.image=loadImage("paper.png");
    }


    display(){
    
    imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,this.r-10,this.r+5)
    //ellipseMode(RADIUS);
    //ellipse(this.body.position.x,this.body.position.y,this.r,this.r);


    }
}