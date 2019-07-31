const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/firstDB",{ useNewUrlParser: true })
.then(() => {
    console.log("ok")
})
.catch(() => {
    console.log("error")
})

require("./user.model");
require("./task.model");

// Create an insert user script

const User = mongoose.model("users");
// const users = [
//     {    
//         userName: "Dxk001",
//         age: 22,
//         sex: "male"
//     },
//     {    
//         userName: "AAA111",
//         age: 11,
//         sex: "female"
//     },
//     {    
//         userName: "Dxk67",
//         age: 42,
//         sex: "male"
//     },
//     {    
//         userName: "Ololo321",
//         age: 89,
//         sex: "male"
//     },
//     {    
//         userName: "AOooaa111",
//         age: 45,
//         sex: "female"
//     },
// ]

// users.forEach(user => {
//     new User(user).save()
//         .then(user => {
//             console.log(`user ${user.userName} saved`)
//         })
//         .catch(err => {
//             console.log(err);
//         })
// })


//Create update user's name script for given _id

// // 1) get any user _id
// User.findOne({},"_id",(err,user) => {
//     if(err){
//         console.log(err);
//         return;
//     }
// // update
//     User.updateOne({_id:user._id},{$set:{userName:'ChangedName'}})
//         .then(()=>{
//             console.log("username updated")
//         })
//         .catch(err=>{
//             console.log(err)
//         })
// })


// Create get all users script (retrieving the only username) and sorted by username

// User.find({},{"userName":true,"_id":false},)
//     .sort({"userName":1})
//         .then(users => {
//             console.log(users)
//         })
//         .catch(err => {
//             console.log(err);
//         })


// Create a script that returns only female users

// User.find({"sex":"female"})
//     .then(users => {
//         console.log(users)
//     })




// Create a script to update all tasks completed = false

// // 1) create tasks

// const Task = mongoose.model("tasks");
// const tasks = [
//     {    
//         title: "task1",
//         text: "fgh fgh fgh ",
//         completed: true,
//         created: new Date()
//     },
//     {    
//         title: "task2",
//         text: "asdf asdf asdfd",
//         created: new Date()

//     },
//     {    
//         title: "task3",
//         text: "dddd olsol as ",
//         created: new Date()
//     },
//     {    
//         title: "task4",
//         text: "fgh fgdfdaaaaah fgh fgh ",
//         created: new Date(),
//         completed: true
//     },
//     {    
//         title: "task5",
//         text: "fgh fgh fgh ",
//         created: new Date()
//     },
// ]

// tasks.forEach(task => {
//     new Task(task).save()
//         .then(task => {
//             console.log(`task ${task.title} saved`)
//         })
//         .catch(err => {
//             console.log(err);
//         })
// })

// // 2) update

// Task.updateMany({},{$set:{completed:false,updated: new Date()}})
//     .then(() => {
//         console.log("tasks updated")
//     })
//     .catch(err => {
//         console.log(err)
//     })


// Create a script to delete all completed=true tasks

// Task.deleteMany({"completed":true})
//     .then(() => {
//         console.log("completed tasks deleted")
//     })
//     .catch(err => {
//         console.log(err)
//     })

// Task.findOne({_id:"5d415a70cc239d2434537260"}).then(task=>console.log(task))
// Create a script to get all tasks of user sorted by created date that are not completed.

// // 1) fill tasks with userIds

// const tasks = [
//     {    
//         title: "task1aaa",
//         text: "fgh fgh fgh ",
//         completed: true,
//         created: new Date(),
//         userId: "5d4154343439d2434537260"
//     },
//     {    
//         title: "task2aaa",
//         text: "asdf asdf asdfd",
//         created: new Date(),
//         userId: "5d4154343439d2434537260"

//     },
//     {    
//         title: "task3aa",
//         text: "dddd olsol as ",
//         created: new Date(),
//         userId: "5d415ss3439d2434537260"
//     },
//     {    
//         title: "task4aa",
//         text: "fgh fgdfdaaaaah fgh fgh ",
//         created: new Date(),
//         completed: true,
//         userId: "5d41sds43439d2434537260"
//     },
//     {    
//         title: "task5aaa",
//         text: "fgh fgh fgh ",
//         created: new Date(),
//         userId: "5d4154343439d2434537260"
//     },
// ]

// tasks.forEach(task => {
//     new Task(task).save()
//         .then(task => {
//             console.log(`task ${task.title} saved`)
//         })
//         .catch(err => {
//             console.log(err);
//         })
// })

// // 2) get

// Task.find({userId: "5d4154343439d2434537260",completed: false})
//     .sort("created")
//         .then(tasks => {
//             console.log(tasks)
//         })
//         .catch(err => {
//             console.log(err)
//         })
