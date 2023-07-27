const inputField = document.getElementById('input-field')
const addBtn = document.getElementById('add-btn')
const tasksContainer = document.getElementById('tasks-container')

let tasks = ["Go out","Buy groceries","Workout","Create an app"]
let tasksEl = document.createElement('article')

for(let i = 0 ;i < tasks.length;i++){
tasksEl.innerHTML += `<p>${tasks[i]}</p>`
}
tasksContainer.append(tasksEl)
 
addBtn.addEventListener("click",function(){
    tasks.push(inputField.value)
    localStorage.setItem("tasks",JSON.stringify(tasks))
    tasksEl.innerHTML += `<p>${inputField.value}</p>`
    inputField.value = ""
})
