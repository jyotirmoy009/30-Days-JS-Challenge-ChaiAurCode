// Task 1
const paragraph = document.getElementById('myparagraph');
paragraph.textContent = "New Text Content ";

// Task 2
 const h1 = document.querySelector('.heading');  // to select an html element by its class we can use document.querySelector or document.querySelectorAll method
 h1.style.backgroundColor = 'blue';

 // Task 3
 const newDiv = document.createElement('div'); // creating a new div
 newDiv.textContent = 'This is a new div';     // add text content
 newDiv.style.backgroundColor = 'green';       // also we can add  a class name too - newDiv.className = 'newDiv';
 document.body.appendChild(newDiv)             // append the new div to the body

// Task 4
const newLi = document.createElement('li');
newLi.textContent = "This is a new list"
const ul = document.getElementById('list')  // select the ul element by its id
ul.appendChild(newLi)                       // append the new li to the ul

// Task 5
const elementRemove = document.getElementById('para1') 
elementRemove.remove()               // remove the selected element from the dom by remove method

// Task 6
const div3 = document.getElementById('div3');
// div3.removeChild(div3.lastElementChild)
if (div3.lastElementChild) {
    div3.removeChild(div3.lastElementChild)
}

// Task 7  // To select an html elemenet and change one of its attribute we can use setAttribute method
const imgElement = document.getElementById('myCar')
imgElement.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3BDlC6HZsYQcKcQdP_iWwqKid5HDrXklpA&s')
imgElement.setAttribute('alt', 'New Car')

// Task 8  // we can use classList property which provides methods like add, remove and toggle
function addStyle() {
    const paragraph = document.getElementById('myPara')
    paragraph.classList.add('color')
}
function removeStyle() {
    const paragraph = document.getElementById('myPara')
    paragraph.classList.remove('color')
}

// Task 9 
const para1 = document.getElementById('mySecPara')
const button = document.getElementById('change')
button.addEventListener('click', function(){
    para1.textContent = 'It has been changed.'
})

// Task 10
const box = document.getElementById('lastDiv')
box.addEventListener('mouseover', function(){
    box.style.borderColor = "black"
})
box.addEventListener('mouseout', function(){
    box.style.borderColor = "red";
})