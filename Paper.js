class Paper{
    constructor(x,y,width,height){
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2			
    	}
            
		this.body=Bodies.rectangle(x, y, width, height, options);
		this.x=x;
		this.y=y;
		this.width = width;
		this.height = height;
		World.add(world, this.body);
		this.image = loadImage("paper.png");
	}
	
	display(){			
		push();
		translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
		image(this.image, 0, 10,this.width,this.height);
		pop();
			
	}

}