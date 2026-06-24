class Baap {
constructor(name){
    this.name = name
}
greet(){
    console.log(`Hello ${this.name}`)
}
}

class beta extends Baap{
    constructor(name, course) {
        super(name);
        this.course = course
    }
    study(){
        console.log(`${this.name} studies ${this.course}`)
    }
}

const baap1 = new beta(
    "Samiran", "Mearn"
)

baap1.greet()
baap1.study()