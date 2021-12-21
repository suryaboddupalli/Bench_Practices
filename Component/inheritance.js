class Birds{
    constructor(name){
        super(name)
            this.name =name
        
    }
    walk(){
        console.log(`${this.name} can walk` )
    }

}

class flyBirds extends Birds {
    fly(){
        console.log(`${this.name} can fly` )

    }
}

class SwimBirds extends Birds {
    swim(){
        console.log(`${this.name} can swim` )

    }
}

const duck = new Birds('Duck')
duck.walk()
duck.swim()

const Eagle = new Birds('Eagle')
Eagle.walk()
Eagle.fly()