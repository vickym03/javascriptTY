// document.write("welcome to session")
let element = document.getElementById("demo");
console.log(element);
element.innerText = "DOM...";
element.style.background= 'lightblue'

//returns single element

const pElement = document.querySelector(".test");
console.log(pElement);
pElement.style.fontSize="20px"

const tagElement = document.querySelector("h1");
console.log(tagElement);

const idElement = document.querySelector("#demo");
console.log(idElement);

// it returns array of element id classname is present in tag of HTML

const personElements = document.getElementsByClassName("person");
console.log(personElements);

personElements[2].innerText = "mumbai";

for (let i = 0; i < personElements.length; i++) {
  if (i === 0) {
    personElements[i].innerText = "vijay";  // ajith to vijay
  } else if (i === 1) {
    personElements[i].innerText = "k";  // s to k
  } else {
    personElements[i].innerText = "chennai"; // mumbai to chennai
  }
}

//getElementByTagName

const pElements = document.getElementsByTagName('p');
console.log(pElements)

for(let i=0;i<pElements.length;i++){
    console.log(pElements[i])
    pElements[i].style.color = "yellow"
}

console.log("===========================")

const personElementsAll = document.querySelectorAll('.person')
console.log(personElementsAll)

for(let i=0;i<personElementsAll.length;i++){
    console.log(personElementsAll[i])
    personElementsAll[i].style.border = "5px dotted blue "
    personElementsAll[i].style.fontSize = '40px'
    personElementsAll[i].style.borderRadius = '15px'

}

const pTags = document.querySelectorAll('p')
console.log(pTags)

for(let i=0;i<pTags.length;i++){
    console.log(pTags[i])
    pTags[i].style.fontFamily ="monospace";
    pTags[i].style.background= 'brown'

}



//createElement a new element 

const h2Element = document.createElement('h2');
h2Element.innerText="this is h2 element";
console.log(h2Element)
h2Element.style.color = "green"
document.body.appendChild(h2Element)


console.log("-----------------------")
const labelElements = document.getElementsByTagName('label')
//adding style based on css file classes
//adding single class
labelElements[0].className = 'labelTag'

//adding multiple class
labelElements[1].className = 'labelTag labelBg'


console.log("-----------------------")

const userElement = document.getElementById('user')
//innerHTML will parse the string as HTML code
userElement.innerHTML = "<h1> My name is Vicky </h1>"

const user1Element = document.getElementById('user1')
//innertext will parse the string as plain text  or string itself
user1Element.innerText = "<h1> My name is Vicky </h1>"


const visilibilty = document.getElementById('hobbieslist')
visilibilty.style.display="none"

// const visilibilty1 = document.getElementById('hobbieslist')
// visilibilty1.style.display="block"


