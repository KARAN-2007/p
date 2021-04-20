class Stone{
    constructor(x,y,r){
        var options = {
            restitution:0.5,
            density:1,
            friction:0.8,
            //isStatic:true
        }
        this.x=x
        this.y=y
        this.r=r
        this.body=Bodies.circle(x,y,this.r,options)
        
        
        this.image=loadImage("stone.png")
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image,0,0,this.r*2,this.r*2)
        pop()
    }
}