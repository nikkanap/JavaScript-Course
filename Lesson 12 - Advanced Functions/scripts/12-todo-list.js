const toDoArray1 = [];
const toDoArray2 = [];
const toDoArray3 = [];

function keydownEvent(event, className) {
    if(event.key !== 'Enter')
        return;

    if(className === '.input1')
        toDoList1(className);
    else if (className === '.input2')
        printToDo1(className);
    else 
        addToDo2();
}

function addToDo1(className, array) {
    const inputElement = document.querySelector(className);
    const value = inputElement.value;
    if(value !== '')
        array.push(value);
    inputElement.value = '';
}

function toDoList1(className) {
    console.log(className);
    addToDo1(className, toDoArray1);
    console.log(toDoArray1);
}
const buttonPractice1 = document.querySelector('.button-practice-1');
buttonPractice1.addEventListener('click', () => toDoList1('.input1'));

function printToDo1(className) {
    addToDo1(className, toDoArray2);

    let printString = '';
    toDoArray2.forEach((value) =>{
        printString += `<p>${value}</p>`;
    });
    const printElement = document.querySelector('.todo-list1');
    printElement.innerHTML = printString;
}
const buttonPractice2 = document.querySelector('.button-practice-2');
buttonPractice2.addEventListener('click', () => printToDo1('.input2'));

function addToDo2() {
    const inputElement = document.querySelector('.input3');
    const dateElement = document.querySelector('.date');

    const value = inputElement.value;
    const date = dateElement.value;
    let object = {
        value,
        date
    };
    toDoArray3.push(object);
    inputElement.value = '';
    dateElement.value = '';

    printToDo2();
}

function printToDo2() {
    let printString = '';

    toDoArray3.forEach((object, i) => {
        printString += `
        <div class="todo-name">
            ${object.value}
        </div>
        <div class="todo-date">
            ${object.date} 
        </div>
        <button class="delete">Delete</button>
        `;
    });

    const printElement = document.querySelector('.todo-list');
    printElement.innerHTML = printString;
    const deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            toDoArray3.splice(index, 1);
            printToDo2('.input3'); 
        })
    });
}
const buttonPractice3 = document.querySelector('.add-todo-button');
buttonPractice3.addEventListener('click', () => addToDo2());



