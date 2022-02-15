

// // getting element by it ID
// let dom1 = document.getElementById('davidson');

// console.log(dom1);

// // getting element with by tag name 
// let elementByTagName = document.getElementsByTagName("p");


// // for (let index = 0; index < elementByTagName.length; index++) {
// //     const element =elementByTagName[index];
// //     element.style.color= "red";
// // }


// // getting element by className
// let className = document.getElementsByClassName("food");




// //the second way to caoncatenate
// let firstname = "Davidson";
// let lastname = "Jose";

// let concatenation = `${firstname} ${lastname}`;
// console.log(concatenation);

//updating the DOM by creating dynamic markup


// First create an Element
let paraOne = document.createElement("p");

// Secondly create a text using the create node javascript function
let text = document.createTextNode("I love javascript teacching with davidson");


// Next append child paraOne to text;
paraOne.appendChild(text);

console.log(paraOne)


// You can also insert element before a specified element using the insertBefore()
// method


// var itemTwo= document.getElementsByClassName('food');
// var items = document.getElementsByClassName('food');
// items.insertBefore(paraOne, itemTwo);

// changing the css of an element
let overallContainer = document.getElementsByClassName("seniordev-lanre");
// console.log(overallContainer);

for (let index = 0; index < overallContainer.length; index++) {
    const element = overallContainer[index];
    element.style.color= 'red';
}


// created an appication using the prompt method
// let question = "Do you like indomie";

// function name1(name) {
//     let prompt1 = prompt(question);
//     if (prompt1 == 'yes') {
//         // alert(ques);
//         console.log(`you must be a foodie ${name}`);
//     }else if (prompt1 == "no") {
//         console.log(`Oppps that's very bad from you oooo ${name}`);
//     }else{
//         console.log("Ohk no reply right");
//     }
// }

// name1(prompt("What your name young man"));


//  the set timeout function
// setTimeout(() => {
//     let message = "That was awesome right"
//     console.log(message);
// }, 5000);


// // the set interval function
// setInterval(() => {
//     let message = "I love javascript teaching with davidson";
//     console.log(message)
// }, 1000);


// the innerHTML method 
let inner = document.getElementsByClassName("food");

for (let index = 0; index < inner.length; index++) {
    const element = inner[index];
    element.style.color= "blue";
    element.innerHTML = "Lanre is a senior developer";

}

let button = document.getElementsByClassName("button");
let divOne = document.getElementsByTagName('div');

function onButtonClick() {
    for (let index = 0; index < divOne.length; index++) {
        const element = divOne[index];
        element.style.color= "blue";
    }
}
addEventListener('click', onButtonClick);





