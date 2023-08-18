const inputField = document.getElementById('input-field')
const addBtn = document.getElementById('add-btn')
const tasksContainer = document.getElementById('tasks-container')
const tasksFromLs = JSON.parse(localStorage.getItem("tasks"))
const clearBtn = document.querySelector(".clear-btn")


let tasksArr
console.log(tasksArr)
console.log(tasksFromLs)

if(tasksFromLs !== null){
    tasksArr = tasksFromLs
    render(tasksFromLs)
} else {
    tasksArr = []
}
function saveToArrThenSend(value){
tasksArr.push(value)
localStorage.setItem("tasks",JSON.stringify(tasksArr))
}

function reRender(){
    let newLs = JSON.parse(localStorage.getItem("tasks"));
    for(let i = 0; i < newLs; i++){
        tasksContainer.innerHTML += `<li>${currentTask}</li>`
    }
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

    let test = [...tasksArr];
    
 if(tasks !== "" || tasks !== [] || tasks !== undefined || tasks !== null){
    for(let i = 0;i < tasks.length; i++){
        let currentTask = tasks[i]
       // tasksContainer.innerHTML += `<li>${currentTask}</li>`
        const taskLi = document.createElement("li")
        taskLi.textContent = `${currentTask}`
        taskLi.addEventListener("click",function(){
      if(taskLi.style.textDecoration == "")
            taskLi.style.textDecoration = "line-through";
            else {
                taskLi.style.textDecoration = ""
            }
    })
        taskLi.addEventListener("dblclick",function(event){
           //visual remove = remove from dom
            console.log("removing child")
            tasksContainer.removeChild(taskLi)

            //remove from arr
            tasksArr.pop()
            //set the items again
            localStorage.setItem("tasks",JSON.stringify(tasksArr))
            //render based on new ls items
            reRender()

        })
        tasksContainer.appendChild(taskLi)
    }
 } else {
    console.log("no tasks to show")
 }
}

clearBtn.addEventListener("click",function(){
    console.log("clearing all items...")
    localStorage.clear()
})

/*
my idea of how to delete:
Since I can't target in local storage because it is a string.
I was thinking 
- I can remove it from the array, by index
- then send the newArr to LS 
- and render again
*/
