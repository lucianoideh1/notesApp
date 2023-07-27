// grab both input & btn
// grab the article and append p's to it
const inputField = document.getElementById('input-field')
const addBtn = document.getElementById('add-btn')
const tasksContainer = document.getElementById('tasks-container')

addBtn.addEventListener("click",function(){
    tasksContainer.innerHTML += `<p>${inputField.value}</p>`
    inputField.value = ""
})
