//const User= new Object()
const User = {}

User.id = "230517"
User.name = "Sam"
User.isLoggedIn = false
//console.log(User);

const regularUser = {
    email: "him@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Samarth",
            lastname: "Shukla"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = { obj1, obj2 }
const obj3 = Object.assign({}, obj1, obj2, obj4)

//const obj3 = {...obj1, ...obj2}
console.log(obj3);


//const users = {
//    {
//            id: 1,
//            email: "s@gmail.com"
//    },
//    {
//        id: 1,
//        email: "s@gmail.com"
//    },
//    {
//        id: 1,
//        email: "s@gmail.com"
//    },
//}
//users[1].email
//console.log(User);

//console.log(Object.keys(User));
//console.log(Object.values(User));
//console.log(Object.entries(User));
//
//console.log(User.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//[
//    {},
//    {},
//    {}
//]