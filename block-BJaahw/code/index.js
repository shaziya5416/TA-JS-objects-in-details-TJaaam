// 1. Create a function `createUser` that accepts `name` and `age` and returns a new object with those properties.
function createUser(name,age){
    let user={};
    user.name=name;
    user.age=age;
    return user;
}
// 2. Add a method named `sayHello` inside the object created above. When called it should alert `Welcome {user}`. Replace `{user}` with the name of the user.
function createUser(name,age){
    let user={};
    user.name=name;
    user.age=age;
    user.sayHello=function(){
        alert(`Welcome ${user.name}`)
    }
    return user;
}
// 3. Use the data (name, age) of two different person to create the object using `createUser`. Store the returned value in `personOne` and `personTwo`.
let person1=createUser("Faizan",29);
let person2=createUser("Shazia",26);
// 4. Change the code inside `createUser` in such a way that the methods `sayHello` doesn't have to be in all object. Use the prototypal nature. (Hint Object.create())
let methods={
    sayHello:function(){
        alert(`Welcome ${this.name}`)
    }
}

function createUser(name,age){
    let user=Object.create(methods)
    user.name=name;
    user.age=age;
    
    return user;
}
// 5. Convert the `createUser` function into Pseudoclassical pattern of object creation. Use `F.prototype` to store the methods. `F.prototype` means storing the methods in prototype property of the function.
function createUser(name,age){
    let user=Object.create(methods)
    user.name=name;
    user.age=age;   
    return user;
}
createUser.prototype={
    sayHello:function(){
        alert(`Welcome ${this.name}`)
    }
}
// 6. Use `new` to create two new objects with the data of two different person and re-assign the value of `personOne` and `personTwo`.
let person3= new CreateUser("Sana",24);
let person4= new CreateUser("Shafin",20);

// 7. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.
//yes
// 8. Convert the `createUser` function into `User` class.
class User{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    sayHello(){
        alert(`Welcome ${this.name}`)
    }

}
// 9. Check by creating two instance of the class using data of two different persons and re-assign the value of `personOne` and `personTwo`
//done
// 10. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.
//done