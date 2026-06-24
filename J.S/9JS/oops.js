// Creating Class
class Student{
    constructor(name,age){
        this.name = name;
        this.age = age
    }
     greet () {
        console.log(`Hello ${this.name}`)
    }

}
const student1 = new Student("Samiran",20);
console.log(student1)
student1.greet()