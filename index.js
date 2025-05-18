const url = 'https://jsonplaceholder.typicode.com/todos'


function getTodo(){
     return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response =>{
            if(!response.ok){
                return new Error ('Error')
            }
            return response.json();
        })
        .catch(error =>{
            return new Error ('Error')
        })
}


function printTodos(todos){
    const todoList = document.getElementById('todo-list')
    todoList.innerHTML = ''

    todos.forEach(todo =>{
        const li = document.createElement('li');
        li.textContent = `${todo.id} ${todo.title}`;
        todoList.appendChild(li);
    })
}


function result(){
    getTodo()
    .then(todos => {
        printTodos(todos);
    })
    .catch(error => {
        return new Error ('Error')
    });
}


document.addEventListener('DOMContentLoaded', result);