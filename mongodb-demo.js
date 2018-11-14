//Show database
//show dbs

//Use Database
//use company

//Create Collection
// db.createCollection('customers')

// //INSERT DATA

// db.collection.insert({
//     first_name: "John",
//     last_name:"Doe",
// 
// db.customers.insert({
//     first_name: "John",
//     last_name:"Doe",
//     age: 33,
//     skills:["NodeJs", "ReactJS", "Redux"]
// })

//GET DATA
// db.customers.find()
// 
// db.customers.insert([
//     {
//     first_name:"susi",
//     last_name:"Silikiti",
//     age:40
//     },
//     {
//     first_name:"Budi",
//     last_name:"Ibudbu", 
//     age:20,
//     address: {
//                 street:"jln kemang 1",
//                 city:"Jakarta"
//              }
//     }
//                
//     ])

//QUERING DATA
//db.customers.find({first_name:"susi"})

//UPDATE DATA
// db.customers.update({first_name: "susi"}, {fist_name:"Suxy"})
// db.customers.find()
// db.customers.update({fist_name:"Budi"}, {
//     $set: {
//         age:90
//         }
//     })

//DELETE DATA
// db_customers.remove({first_name:"susi"})
// db.customers.find()

//QUERYING
// db.customers.find({$or:[{first_name:"Budi"},{first_name:"Susi"}]})