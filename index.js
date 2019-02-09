//첫 사용은 const. 필요하면 let
//string

// const what = "^^"
/*
const wat = true;
*/
/*
Number
const wat=666;
*/

// Float
/*
const wat =55.1;
*/
//
// const monday = "Mon";
// const tue = "Tue";
// const wed = "Wed";
// const thu = "Thu";
// const fri = "Fri";
//
// console.log(monday,tue,wed,thu,fri);
//
// const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun",true];
//
// console.log(daysOfWeek[2])

//
// const pInfo = {
//   name:"Pertz",
//   age:30,
//   gender:"Male",
//   isHandsome:true,
// }
// console.log(console)
// function sayHello(name,age){
//   return `Hello, ${name}. you are ${age} years old.`;
// }
//
// const greetNicolas = sayHello("Nicolas", 14)
//
// const calculator = {
//   plus: function(a,b){
//     return a + b;
//   }
// }
//
//
// // console.log(greetNicolas);
// const plus = calculator.plus(5, 5);
// console.log(plus)



// sayHello("Pertz",30);
// console.log("Hi!")


// console.log(title)
// console.error("fuck")
//
// title.innerHTML = "Hi! From JS"
// title.style.color = "red"
// console.dir(document)
// document.title = 'I own you now'
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    title.classList.toggle(CLICKED_CLASS)
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // if(hasClass) {
    //     title.classList.remove(CLICKED_CLASS);
    // } else {
    //     title.classList.add(CLICKED_CLASS);
    // }
}

function init(){
    title.addEventListener("click", handleClick);

}
init();


// if("pertz" === "hertz"){
//     console.log('hi')
// } else {
//     console.log('ho')
// }

// const age = prompt("How Old Are You");
// if (age > 18 && age <=21){
//     console.log("you can drink but you should not")
// } else if(age>21) {
//     console.log("go ahead")
// } else {
//     console.log("Too young")
// }