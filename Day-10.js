// Task 1
const paragraph = document.getElementById('paragraph')
const button = document.getElementById('change')
button.addEventListener('click', function(){
    paragraph.textContent = 'The text has been changed.'
})

// Task 2
const image = document.getElementById('myImage')
image.addEventListener("dblclick", function(){
    if (image.style.display === 'none') {
        image.style.display = 'block'
    } else {
        image.style.display = 'none'
    }
})

// Task 3
const element = document.getElementById('element')
element.addEventListener("mouseover", function(){
    element.style.backgroundColor = "blue";
})

// Task 4
element.addEventListener("mouseout", function(){
    element.style.backgroundColor = "aqua"
})

// Task 5
 const inputField = document.getElementById('myInput');
 inputField.addEventListener('keydown', function(event) {
     console.log('Key pressed:', event.key);   // // Log the key pressed to the console
 });

 // Task 6
 const inputfield = document.getElementById('input')
 const displayPara = document.getElementById('myText')
 inputfield.addEventListener('keyup', function(){
    displayPara.textContent = inputfield.value
 })

 // Task 7
 const form = document.getElementById('myForm');
        form.addEventListener('submit', function(event) {
            event.preventDefault();         // Prevent the default form submission
            const formData = new FormData(form);  // Created a FormData object from the form

            const dataObject = {};              // Convert the FormData object to a plain object
            formData.forEach((value, key) => {
                dataObject[key] = value;
            });
            console.log(dataObject);
        });

// Task 8
const select = document.getElementById('mySelect')
const display = document.getElementById('display')
select.addEventListener('change', function(){
    const selectedValue = select.value;
    display.textContent = `Selected value: ${selectedValue}`
})

// Task 9
let myList = document.getElementById('myList')
    myList.addEventListener('click',(e) => {
        if (e.target && e.target.matches('li')) {
            const clickedItem = e.target.textContent
            console.log(`clicked item : ${clickedItem}`)
        }
    })

// Task 10
const parentList = document.getElementById('parent-list');
parentList.addEventListener('click', function(event) {
   if (event.target.tagName === 'LI') {
        console.log('Clicked on:', event.target.textContent);
        
    }
});