let student = {
    name:"Solomon",
    age: 41,
    greet: function(greeting) {
        console.log(`${greeting} ${this.name}`)
    }
    
}
let tm = {
    name:"Sam Tomashi"
}
student.greet.call(tm,"Hello")
student.greet.apply(tm,["Good morning"])


//Phone -- global context
//apps - camera,music

// =====> camera ===> photo

// =======> music app ===> playing music