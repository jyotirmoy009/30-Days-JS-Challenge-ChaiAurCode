console.log("Day-20")

/* Activity-1: Understanding local storage. */
// Task:1 Write a script to save a string value to localstorage and retrieve it. Log the retrieved value.

const string1 = "This is local storage"
localStorage.setItem('string',string1)
console.log(localStorage.getItem('string'))


// Task:2 Write a script to save an object to localstorage by converting it to a json string. Retrieve and parse the object, then log it.
const object = {
    name:"Nike sneaker",
    price:4000,
}

localStorage.setItem("obj",JSON.stringify(object))
console.log(JSON.parse(localStorage.getItem("obj")))





// Activity-2: Using local storage.

// Task:3 Create a simple form that saves userinput to localstorage when submitted. Retrieve and display the saved data on page load.
const username = document.getElementById('username')
const password = document.getElementById('password')
const dispUsername = document.getElementById('showUsername')
const dispPassword = document.getElementById('showPassword')

const submitBtn = document.getElementById('submitBtn').addEventListener('click',(e)=>{
const userObj = {
username:username.value,
password:password.value
}

localStorage.setItem('userObj',JSON.stringify(userObj))

})

function dispUserDetail(){
    const getValue = JSON.parse(localStorage.getItem('userObj'))
    console.log(getValue)
    dispUsername.innerText = getValue.username
    dispPassword.innerText = getValue.password
}

dispUserDetail()


// Task:4 Write a script to remove an item from localstorage. Log the localstorae content after the removal.
localStorage.removeItem('useObj');
console.log(localStorage);


// Activity:3 Understanding Session storage.
// Task:5 - Write a script to save string value to session storage and retrieve it. Log the retrieved value.
let string4 = "This is string";
sessionStorage.setItem('String',string4)
console.log(sessionStorage.getItem('String'))

// Task:6 Write a script to save an object to session storage by converting it to json string. Retrieve and parse the object, then log it.
const mySessionData = {
    username: 'myUser123',
    email: 'user@example.com',
    preferences: {
      theme: 'dark',
      language: 'en',
    },
  };

  sessionStorage.setItem("mySessionData",JSON.stringify(mySessionData))
  console.log(JSON.parse(sessionStorage.getItem("mySessionData")))



//   Activity:4 Using session storage.
// Task:7 Create a simple form that saves user input to session storage when submitted.Retrieve and display the saved data on page load.

const userId = document.getElementById('userId')
const userPass = document.getElementById('userPass')
const showUser = document.getElementById('userShow')
const showPass = document.getElementById('passwordShow')

const submit = document.getElementById('submit').addEventListener('click',(e)=>{
    
const userObj = {
username:userId.value,
password:userPass.value
}

sessionStorage.setItem('userObj',JSON.stringify(userObj))

})

function showUserDetails(){
const getValue = JSON.parse(sessionStorage.getItem('userObj'))
console.log(getValue)
showUser.innerText = !getValue?console.log("Username not found"):getValue.username
showPass.innerText = !getValue?console.log("Password not found"):getValue.password
}

showUserDetails()

// Task:8 Write a script to remove an item from session storage, log the sessionStorage content before the removal.

const deleteData = document.getElementById('deleteData').addEventListener('click',()=>{
    sessionStorage.removeItem('userObj')
    console.log(sessionStorage)
})



// Activity:5 Comparing Localstorage and Session storage.
// Task:9 - Write a function that accepts a key and value, and saves the value to both localstorage and sessionstorage. Retrieve and log the values from both storage mechanism.

function saveDataInBrowserStorage(key,value){
    this.key = key
    this.value = value
    if(key === null && value === null){
        console.log("Provide key and value")
    }else{
        localStorage.setItem(this.key,JSON.stringify(this.value))
        sessionStorage.setItem(this.key,JSON.stringify(this.value))
    }

    console.log(JSON.parse(localStorage.getItem(this.key)))
    console.log(JSON.parse(sessionStorage.getItem(this.key)))


}

saveDataInBrowserStorage("Data",{
    username: 'user123',
    email: 'user@example.com',
    preferences: {
      theme: 'light',
      language: 'hindi',
    },
  })


//   Task:10 Write a function that clears all the data from both local and session storage. Verify that both storage are empty.

  function clearDataFromBrowserStorage(){
    localStorage.clear()
    sessionStorage.clear()

    console.log(localStorage,sessionStorage)

  }
