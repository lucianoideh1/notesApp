const inputField = document.getElementById('input-field')
const addBtn = document.getElementById('add-btn')
const tasksContainer = document.getElementById('tasks-container')
const tasksFromLs = JSON.parse(localStorage.getItem("tasks"))

let tasksArr

if(tasksFromLs !== "" | tasksFromLs !== null){
    tasksArr = tasksFromLs
    render(tasksFromLs)
} else {
    tasksArr = []
}

addBtn.addEventListener("click",function(){
    //step 1 : set value in a variable, and push it into the arr
    let inputFieldValue = inputField.value
  
    if(inputFieldValue !== ""){
         tasksArr.push(inputFieldValue)
         //step 2: push the arr values into localStorage
         localStorage.setItem("tasks",JSON.stringify(tasksArr))
    }

    //step 3.0 clear the html from container + render all of them but FROM arr
    tasksContainer.innerHTML = ""    
    //step 3:render back again from arr or ls
    render(tasksArr)
    //step 4: clear inputField
    inputField.value = ""
})


function render(tasks){
    for(let i = 0;i < tasks.length; i++){
        let currentTask = tasks[i]
        tasksContainer.innerHTML += `<li>${currentTask}</li>`
    }
}