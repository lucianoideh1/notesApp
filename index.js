const inputField = document.getElementById('input-field')
const addBtn = document.getElementById('add-btn')
const tasksContainer = document.getElementById('tasks-container')
const tasksFromLs = JSON.parse(localStorage.getItem("tasks"))

let tasksArr = []

addBtn.addEventListener("click",function(){
    let inputFieldValue = inputField.value
    tasksArr.push(inputFieldValue)
    localStorage.setItem("tasks",JSON.stringify(tasksArr))

    console.log(tasksArr)

    tasksContainer.innerHTML = ""
    for(let i=0; i < tasksArr.length; i++){
        let currentTask = tasksArr[i]
        tasksContainer.innerHTML += `<li>${currentTask}</li>`
    }

    inputField.value = ""
})

