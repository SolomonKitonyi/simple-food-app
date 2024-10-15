let student = {
    name:"Solomon",
    age: 41,
    greet: function(greeting) {
        console.log(`${greeting} ${this.name}`)

        //this arrow function inherits this from the parent student
        const sayHi = ()=> {
            console.log(`Hello ${this.name}`)
        }
        sayHi()
    }
    
}
//calling greet function to show case arrow functions inherits parent's context
student.greet("Hi")
let tm = {
    name:"Sam Tomashi"
}
student.greet.call(tm,"Hello")
student.greet.apply(tm,["Good morning"])


//Phone -- global context
//apps - camera,music

// =====> camera ===> photo

// =======> music app ===> playing music