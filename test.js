
// let age =28

// if(age>=18 && age<=25){
//     console.log("Now Your are Adult")
// }

// else if(age>=26 && age<= 50){
//     console.log("Your are Younger")
// }

// else if(age>=51 && age<=90){
//     console.log("You are Older")
// }

// else if(age>=91){
//     console.log("Deathed")
// }

// else{
//     console.log("You Are child")
// }


/// decleartion function
// function handel(age=18,name="aman"){

// if(age>=18 && age<=25){
//     console.log("Now Your are Adult"+name)
// }

// else if(age>=26 && age<= 50){
//     console.log("Your are Younger")
// }

// else if(age>=51 && age<=90){
//     console.log("You are Older")
// }

// else if(age>=91){
//     console.log("Deathed")
// }

// else{
//     console.log("You Are child")
// }
// }

// handel()



// expreation function
// const handel = function(){
//     let a =8
//     let b= 8
//     console.log(a+b)
// }

// handel()




// Arrow function
// const handel = (a=9,b=8)=>{
//     console.log(a+b)
// }

// handel()




// handel(9,4)
// function handel(a,b){

//     console.log(a+b)
// }




// handel2(8,5)
// const handel2 = function(a,b){
//     console.log(a+b)
// }


// let age = 48;

// switch(true){
//     case age>=18 && age<30 : 
//     console.log("you are adult")
//     break;
//     case age>=31 && age<45 :
//         console.log("you are now available for marrige")
//         break;
//      case age>45:
//             console.log("Please wait for next life")
//           break;
//     default:
//         console.log("You are child")    
// 



//// boolean logics 

// && ||


// &&
// true false = false;
// false true = false;
// true true = true 


// ||
// true false = true;
// false true = true;
// true true = true;
// false false = false;


///// Arrays 

// let array = [12,13,2,4,"arjun","vikas"]

// // console.log(array[0],array[2])  

// let array2= ["aman","arjun"]

// let newArray = array.concat(array2)

// console.log(newArray)


// let array = [2,4,2]
// array.push(5)
// console.log(array)

// let array = [4,2,4,52]
// array.unshift(1)
// console.log(array)


// let array = [4,32,112,3]
// array.pop()
// console.log(array)

// let array = [771,212,1212,321]
// array.shift()
// console.log(array)

// let array = [2,5,1,3,4]
// let array2 = ["puri","vikas","arjun","akash"]
// array2.sort()
// console.log(array2)


// let arrya = [2,4,5,6,2,4,2,4,5,2]
// const array2= arrya.slice(3,6)

// console.log(array2)


// let array = ["a","b","e","f"]

// array.splice(2,1,"c","d")

// console.log(array)


//// while loop

// let a = 1;
// while(a<=10){
//     console.log(a*2)
//     a++
// }

/// for loop

// for(let a = 0; a<=10; a++){
//     console.log(a)

// }




// function one(){
//     two()
// }

// function two(){
//     three()
// }

// function three(){
//     console.log("hello call stack")
// }

// one()



// a = 2
// var a;

// console.log(a)

// console.log(a)
// var a = 2


// let a;
// console.log(a)


// let obj = {name:"arjun",age:24,position:"developer",}

// console.log(obj.name,"is a",obj.position,"and his age is",obj.age)



// let arr = [2,4,2,1,5,2,4,6,7,"arjun","puri","arjun","goswami","puri"]

// let newArr = new Set(arr)

// console.log(newArr)




// setTimeout(() => {
//     console.log("hello")
// }, 5000);


// setInterval(() => {
//     console.log("hello")
// }, 1000);


// const parent = ()=>{
//     let name ="arjun"
//     function child(){
//         console.log(name)
//     }
//     child()
// }
// parent()