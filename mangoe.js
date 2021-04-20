class mangoe{
    constructor(x,y,r){
        var options = {
            restitution:0,
            
            gravity:1,
            friction:0.6,
            isStatic:true
        }
        this.r=r
        this.x=x
        this.y=y
        this.body=Bodies.circle(x,y,r,options)
        
        
        this.image=loadImage("mango.png")
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