const mySym = Symbol("key1")
const JsUser = {
    name: "Samarth",
    "full-name": "Samarth Shukla",
    [mySym]: "myKey1",
    age: 18,
    location: "New York",
    email: "sam@google.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Tuesday"]
}
// console.log(JsUser.email)
// console.log(JsUser.age)

JsUser.email = "sam@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "samarth@microsoft.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());