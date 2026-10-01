// part 1 choose 
// 1- Array جديدة بنفس الطول
// 2- find() 
// 3- Array جديدة بالعناصر اللي حققت الشرط
// 4- undefined 
// 5- Arrays 


// part 2 t,f
// 1-f
// 2-t
// 3-t
// 4-t
// 5-f


// part 3 complete
// 1 
// const numbers = [1, 2, 3, 4];

// numbers.map((num) => {
//     console.log(num * 2);
// });

// 2
// const nums = [10,25,5,30,15,40];
// const result = nums.filter((num)=>{
//     return num > 20;
//     });
//    console.log(result); 

   //3
//    const users = [
//     {name:"Ali", age:20},
//     {name:"Sara", age:28},
//     {name:"Omar", age:30}
// ];
//    const user = users.find((item)=>{
//     return item.age > 25;
// });
// console.log(user);

//4
// const names = ["ali", "mona", "ahmed"];

// const result = names.map((name) => {
//     return name.toUpperCase();
// });

// console.log(result);

//part 4

//for
// const fruits = ["Apple","Banana","Orange"];
// for (let fruit of fruits) {
//     console.log(fruit);
// }


// //for in
// for (let i in fruits) {
//     console.log(i);
// }

// //for each
// fruits.forEach((fruit, index)=>{
//     console.log(index + " -> " + fruit);
// });


//part 5

// 1
// const sum = (a,b) => {
//     return a+b;
// };
// console.log(sum(5, 3));

// //2
// const user = {
//     name: "Mostafa",
//     age: 25
// };

// const {name: username, age} = user;

// console.log(username);
// console.log(age);


//3
// const name = "Martina";
// console.log(`Hello ${name}`);

// //4
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const result = [...arr1,...arr2];
// console.log(result);


//part 6
//1

// const students = [
//  {name:"Ali", degree:70},
//     {name:"Sara", degree:95},
//     {name:"Ahmed", degree:40},
//     {name:"Mona", degree:85},
//     {name:"Omar", degree:55}
// ];
// const names = students.map((student)=>{
//  return student.name;
// });
// console.log(names);

//2
// const result = students.filter((student)=>{
//   return student.degree >= 60;
// });
// console.log(result);

//3
// const student = students.find((student)=>{
//     return student.degree > 90;
// });
// console.log(student);


//4
// students.forEach((student)=>{
//     console.log(student.name);
// });


//bonus
// const numbers = [5,10,15,20];
// const result = numbers.reduce(getSum, 0);
// function getSum(total, num) {
//     return total+num;
// }
// console.log(result);

