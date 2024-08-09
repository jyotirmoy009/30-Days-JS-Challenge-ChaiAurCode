console.log('Focus Pro.')


const titleInp = document.getElementById('title');
const taskInp = document.getElementById('task');
const addTaskBtn = document.getElementById('addbtn');
const taskContainer = document.querySelector('.allTaskListContainer');
const taskTitle = document.getElementById('taskTitle');
const taskContent = document.getElementById('taskContent');


function addTask() {
    let arr = []

    if (!JSON.parse(localStorage.getItem('taskList'))) {
        console.log('LS is empty')
    } else {
        const getLSdata = JSON.parse(localStorage.getItem('taskList'))
        getLSdata.map((e) => {
            arr.push(e)
        })

    }

    addTaskBtn.addEventListener('click', () => {
        let taskId = Math.floor(Math.random() * 1000)

        const titleValue = titleInp.value;
        const taskValue = taskInp.value;

        if (titleValue == '' && taskValue == '') {
            alert("Please enter your task first!")
        } else {
            let taskObj = {
                id: taskId,
                title: titleValue,
                task: taskValue,
            }
            arr.push(taskObj)
            localStorage.setItem('taskList', JSON.stringify(arr))
            // const html = `<div class="task" id=${taskObj.id}><h2>${taskObj.title}</h2><p>${taskObj.task}</p></div>`
            // taskContainer.innerHTML += html
            const getData  = JSON.parse(localStorage.getItem('taskList'))
            const newAddedTask = getData[getData.length-1]
            taskTitle.innerText = newAddedTask.title
            taskContent.innerText = newAddedTask.task
            titleInp.value=""
            taskInp.value=""
        }
        showTask()
        showAllTaskOnRefresh()


    })

  
}

addTask()


function showAllTaskOnRefresh() {
    const getData = JSON.parse(localStorage.getItem('taskList'))
    const emptyStorageNotification = document.getElementById('emptyStorageNtf')
   

    if (!getData) {
        emptyStorageNotification.style.display = 'block'
    }else if(getData.length ==   0){
        emptyStorageNotification.style.display = 'block'
   
    }
     else {
        taskContainer.innerHTML = ''
        getData.map((e) => {
            const html = `  <div class="task" id=${e.id}>
                            <h2>${e.title}</h2>
                            <p>${e.task}</p>
                        </div>`
            taskContainer.innerHTML += html
            
        })
      
        const newAddedTask = getData[getData.length-1]
        taskTitle.innerText = newAddedTask.title
        taskContent.innerText = newAddedTask.task
    }
    showTask()
}

showAllTaskOnRefresh()




const taskHeading = document.getElementById('taskHeading')
const taskMenu = document.getElementById('taskMenu')

function showTask() {
    const task = document.querySelectorAll('.task')
    task.forEach((element) => {
        element.addEventListener('click', (e) => {
            display(element.id)
            taskHeading.innerText= `# Update task.`
            taskMenu.style.display = 'flex'
        })
    })


}

function display(id) {

    const editTaskBtn = document.getElementById('editTask')
    const saveEditTask = document.getElementById('saveEditTask')
    const deleteTask = document.getElementById('deleteTask')
    const data = JSON.parse(localStorage.getItem('taskList'));
    let arr = []
    data.map((e) => {
        if (id == e.id) {
            taskTitle.innerText = e.title;
            taskContent.innerText = e.task
            editTaskBtn.addEventListener('click', () => {
                taskTitle.setAttribute('contenteditable', true)
                taskContent.setAttribute('contenteditable', true)
                taskTitle.focus()
                taskContainer.focus()
                saveEditTask.style.display = 'block'
                
            })



            saveEditTask.addEventListener('click', () => {
                taskTitle.setAttribute('contenteditable', false)
                taskContent.setAttribute('contenteditable', false)
               
                data.map((e)=>{
                    if(id == e.id){
                        e.title = taskTitle.innerText
                        e.task = taskContent.innerText
                    }
                    arr.push(e)
                })
                localStorage.clear()
                localStorage.setItem('taskList',JSON.stringify(arr))
                console.log(e)
                showAllTaskOnRefresh()
                this.style.display = 'none  '
                   
          
            })

            deleteTask.addEventListener('click',()=>{
                data.map((e)=>{
                    arr.push(e)
                    if(id == e.id){
                        arr.splice(arr.indexOf(e),1)
                      console.log()
                  
                    }

                })

                    localStorage.setItem('taskList',JSON.stringify(arr))
                      showAllTaskOnRefresh()
                
            })
    
         


        }

        
     

    })


    



}

display()