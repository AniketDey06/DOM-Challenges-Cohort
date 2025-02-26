/**
 * Write your challenge solution here
 */

const taskInput = document.getElementById('taskInput');
const addbtn = document.getElementById('addButton');

let totalTaskCount = 0;
let completeTaskCount = 0;

const taskList = document.getElementById('taskList')
const emptylist = document.getElementById('emptylist')





addbtn.addEventListener('click', (e) => {
    let task = taskInput.value
    
    if (task) {
        totalTaskCount += 1;
        console.log(totalTaskCount);
        
        if(totalTaskCount > 0){
            emptylist.remove()
        }

        const taskItem = document.createElement('li')
        taskItem.classList.add("task-item")

        const input = document.createElement("input")
        input.type = "checkbox";
        input.classList.add("complete-checkbox")
        input.id = "complete-checkbox"
        // console.log(input);

        const label = document.createElement('label')
        label.className = "task-text"
        label.id = "checkbox"
        label.textContent = task
        // console.log(label);

        const delbtn = document.createElement('button')
        delbtn.classList.add("delete-button")
        delbtn.textContent = "delete"
        // console.log(delbtn);

        taskItem.appendChild(input)
        taskItem.appendChild(label)
        taskItem.appendChild(delbtn)
        
        taskList.appendChild(taskItem);

        delbtn.addEventListener('click', () =>{
            taskItem.remove();
            totalTaskCount--;
            document.getElementById('totalTasks').innerText = totalTaskCount
        })

        input.addEventListener('click', () =>{
            if (taskItem.classList == 'task-item completed') {
                taskItem.classList.remove("completed")
                completeTaskCount--;
                document.getElementById('completedTasks').innerText = completeTaskCount
            }else{
                taskItem.classList.add('completed')
                completeTaskCount++;
                document.getElementById('completedTasks').innerText = completeTaskCount
            }
        })

        document.getElementById('totalTasks').innerText = totalTaskCount

    }

    taskInput.value = ""

})



