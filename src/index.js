// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
const mainNav = document.getElementById("mainNav");
const divElements = document.getElementsByTagName("div");
const cardElems = document.getElementsByClassName("card");

const queryMainNav = document.querySelector("#mainNav"); //returns first one it finds only a single one
const queryDivElems = document.querySelectorAll("div"); //returns node list an array like object
const queryCardElems = document.querySelectorAll(".card");

console.log("It's Working!")

//  Select the following single elements from the div.card



// A- finding across the entire DOM
const header = document.querySelector("header");
console.log("header")
const logoTitle = document.querySelector("#logoTitle")
const firstCard = document.querySelector(".card:nth-of-type(1)") //change number to the one u want to access could be the 1st one the fifth one and so on
// B- finding within one particular element
const imageFirstCard = firstCard.querySelector("img");
const titleFirstCard = firstCard.querySelector("h2");
const subtitleFirstCard = firstCard.querySelector("h3");
const textFirstCard = firstCard.querySelector("p");
// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling;
const link2FirstCard = link1FirstCard.nextElementSibling;


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const links = document.querySelectorAll("nav a");
// B- Loop over the links and console.log their text content
link1FirstCard.forEach(function(link){
    console.log(link.textContent);
}) //higher order ufnction takes another func as an arg
// C- Turn the collection of links into a real array
const linksArr = Array.from(links);

// D- Use .filter to find the anchor tag with the textContent of "Home"
linksArr.find(link => link.textContent === "Home");
console.log(homeLink);
// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
logoTitle.textContent = "BloomTech Doggos";
titleFirstCard.textContent = "I is a Dog";
subtitleFirstCard.textContent = "A story in three parts";
textFirstCard.textContent = "dogs are so nice no cats";
link2FirstCard.textContent = "Dog Ipsum";

//  B- Have the students research online the difference between textContent and innerText
// link1FirstCard.setAttribute("href", "https://pexels.com/search/dog");
// link2FirstCard.href = "https://pexels.com/search/dog"; //both these do the same thing
// imageFirstCard.src = "dog img link";
// logoTitle.className = "logo heading bannana";
// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
//  B- Using .setAttribute to change a few attributes
link1FirstCard.setAttribute("href", "https://pexels.com/search/dog");
link2FirstCard.href = "https://pexels.com/search/dog"; //both these do the same thing
imageFirstCard.src = "dog img link";
logoTitle.className = "logo heading bannana";


// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
header.classList.add("sky")
header.classList.remove("sky")
//  B- By manipulating inline styles on the element
header.style.fontSize = "2em";
setIntervak(() => header.classList.toggle("sky"), 1000);
// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const blogLink = document.createElement("a"); //THIS HAS TO BE A DOM TAG NAME   
blogLink.textContent = "Blog";
blogLink.href = "#"
document.querySelector("nav").appendChild(blogLink);
blogLink.classList.add("menu-item");
// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
const secondCard = firstCard.cloneNode(true);
document.querySelector(".card-group").appendChild(secondCard)
header.remove();
document.body.prepend(header);
// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
