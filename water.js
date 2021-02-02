class Water {

    constructor(x, y){
        var options = {
            density : 0.5,
            restitution : 0.7,
            friction : 0.5

        }
        this.body = Bodies.circle(x, y, 5, options)
        
        
        
this.width = width
this.height = height

        World.add(world, this.body)

    }

    display(){
        push()
        rectMode(CENTER)
        
        fill("blue")
        strokeWeight(2)
        rect(this.body.position.x, this.body.position.y, 5, 5)
        pop()
    }

}