'use strict';

class Todo{
    constructor(form, input, todoList, todoCompleted){
        this.form = document.querySelector(form);
        this.input = document.querySelector(input);
        this.todoList = document.querySelector(todoList);
        this.todoCompleted = document.querySelector(todoCompleted);
        this.todoData = new Map(JSON.parse(localStorage.getItem('toDoList')));
    }
    addToStorage(){
        localStorage.setItem('toDoList', JSON.stringify([...this.todoData]));
    }
    render(){
        this.todoList.textContent = '';
        this.todoCompleted.textContent = '';
        this.input.value = '';
        this.todoData.forEach(this.createItem, this);
        this.addToStorage();
    }
    createItem(todo){
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.key = todo.key;
        li.insertAdjacentHTML('beforeend', `
            <span class="text-todo">${todo.value}</span>
			<div class="todo-buttons">
				<button class="todo-remove"></button>
				<button class="todo-complete"></button>
			</div>
        `);
        if(todo.completed){
            this.todoCompleted.append(li);
        } else {
            this.todoList.append(li);
        }
    }
    addTodo(e){
        e.preventDefault();
        if(this.input.value.trim()){
            const newTodo = {
                value: this.input.value,
                completed: false,
                key: this.generateKey(),
            };
            this.todoData.set(newTodo.key, newTodo);
            this.render();
        } else if (this.input.value.trim() === ''){
            alert('Пустое поле добавить нельзя');
        }
    }
    generateKey(){
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
    deleteItem(target){
        this.todoData.forEach((item, index) => {
            if (item.key === target.parentNode.parentNode.key){
                this.todoData.delete(index, 1);
            }
        });
        this.render();
    }
    complatedItem(target){
        this.todoData.forEach((item) => {
            if (item.key === target.parentNode.parentNode.key){
                if (item.completed === true) {
                    item.completed = false;
                } else {
                    item.completed = true;
                }
            }
        });
        this.render();
    }
    handler(){
    const todoBtn = document.querySelector('.todo-container');
        todoBtn.addEventListener('click', (event) => {
            if (event.target.classList.contains('todo-remove')){
                this.deleteItem(event.target);
            }
            if (event.target.classList.contains('todo-complete')){
                this.complatedItem(event.target);
            }
        });
    }
    animated(el){
        let step = 1 / 50;
        let interval = setInterval(function() {
            if (el.style.opacity >= 1) {
                clearInterval(interval);
            }
            el.style.opacity = +el.style.opacity + step;
        }, 50 / 1000);
    }
    init(){
        this.form.addEventListener('submit', this.addTodo.bind(this));
        this.render();
        this.handler();
    }
}

const todo = new Todo('.todo-control', '.header-input', '.todo-list', '.todo-completed');

todo.init();