// variable declaration
const submitButton = document.getElementById('task-submit')
const taskList = document.getElementById('tasks-list')
const taskInput = document.getElementById('task-input')


// function
function loadData() {
    const data = sessionStorage.getItem('tasks')
    const completedTasks = sessionStorage.getItem('completedTasks')
    if (data) {
        const tasks = JSON.parse(data)
        tasks.forEach(task => {
            taskList.innerHTML += `<li><input type="checkbox" name="checkbox" class="checkbox" onclick="completeTask(this)"><label for="checkbox">${task}</label><button onclick="deleteTask(this)">Delete</button></li>`
        })
    }
    if (completedTasks) {
        const completedTaskss = JSON.parse(completedTasks)
        completedTaskss.forEach(task => {
            taskList.innerHTML += `<li style="text-decoration: line-through;"><input type="checkbox" name="checkbox" class="checkbox" checked onclick="completeTask(this)"><label for="checkbox">${task}</label><button onclick="deleteTask(this)">Delete</button></li>`
        })
    }
}

loadData()

submitButton.addEventListener('click', function (e) {
    e.preventDefault()
    console.log(taskInput.value)
    const task = taskInput.value;
    sessionStorage.setItem('tasks', JSON.stringify([...JSON.parse(sessionStorage.getItem('tasks') || '[]'), task]))
    taskList.innerHTML += `<li><input type="checkbox" name="checkbox" class="checkbox" onclick="completeTask(this)"><label for="checkbox">${task}</label><button onclick="deleteTask(this)">Delete</button></li>`
    taskInput.value = '';
})

function completeTask(e) {
    const tasks = JSON.parse(sessionStorage.getItem('tasks'))
    const completedTasks = JSON.parse(sessionStorage.getItem('completedTasks'))
    const newTasks = tasks.filter(task => task !== e.parentElement.children[1].textContent)
    sessionStorage.setItem('tasks', JSON.stringify(newTasks))

    if (e.checked) {
        e.parentElement.style.textDecoration = 'line-through'
        sessionStorage.setItem('completedTasks', JSON.stringify([...JSON.parse(sessionStorage.getItem('completedTasks') || '[]'), e.parentElement.children[1].textContent]))
    } else {
        e.parentElement.style.textDecoration = 'none';
        const newComTasks = completedTasks.filter(task => task !== e.parentElement.children[1].textContent)
        sessionStorage.setItem('completedTasks', JSON.stringify(newComTasks))
        sessionStorage.setItem('tasks', JSON.stringify([...JSON.parse(sessionStorage.getItem('tasks') || '[]'), e.parentElement.children[1].textContent]))
    }
}

// if else, if else if else, if if else else if ....

function deleteTask(e) {
    e.parentElement.remove()
    const tasks = JSON.parse(sessionStorage.getItem('tasks'))
    const newTasks = tasks.filter(task => task !== e.parentElement.children[1].textContent)
    sessionStorage.setItem('tasks', JSON.stringify(newTasks))
    const completedTasks = JSON.parse(sessionStorage.getItem('completedTasks'))
    const newCompletedTasks = completedTasks?.filter(task => task !== e.parentElement.children[1].textContent)
    sessionStorage.setItem('completedTasks', JSON.stringify(newCompletedTasks))
}

const trainee = [{ name: "Rehan", age: 20, present: true }, { name: "Maeez", age: 20, present: false }];

trainee.flatMap((t, i, tr) =>
    console.log(t, i, tr)
)

for (let index = 0; index < trainee.length; index++) {
    const element = trainee[index];
    console.log(element)
}

// Home Work
/*
    1. [25, 80, 100]
*/
const array = [25, 80, 100]
console.log(array.join("*"))
let b
array.forEach(a => {
    if (b !== a) {
        console.log(b ? b * a : a)
    }
    b = a;
})