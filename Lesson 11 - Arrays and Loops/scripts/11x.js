const toDoArray1 = [];
const toDoArray2 = [];
const toDoArray3 = JSON.parse(localStorage.getItem('array')) || [];

printToDo2('input3');

function keydownEvent(event, className) {
    if(event.key !== 'Enter')
        return;

    if(className === '.input1')
        toDoList1(className);
    else if (className === '.input2')
        printToDo1(className);
    else 
        printToDo2(className);
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

function printToDo1(className) {
    addToDo1(className, toDoArray2);

    let printString = '';
    for(let i = 0; i < toDoArray2.length; i++){
        printString += `<p>${toDoArray2[i]}</p>`;
    }
    const printElement = document.querySelector('.todo-list1');
    printElement.innerHTML = printString;
}

function addToDo2(className) {
    const inputElement = document.querySelector(className);
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

    printToDo2(className);
}

function printToDo2(className) {
    console.log('printing');
    let printString = '';
    for(let i = 0; i < toDoArray3.length; i++){
        printString += `
        <div class="todo-name">
            ${toDoArray3[i].value}
        </div>
        <div class="todo-date">
            ${toDoArray3[i].date} 
        </div>
        <button onclick="
            toDoArray3.splice(${i}, 1);
            console.log(toDoArray3); 
            localStorage.removeItem('array');
            printToDo2('${className}'); 
        " class="delete">Delete</button>
        `;
    }
    
    const toString = JSON.stringify(toDoArray3);
    localStorage.setItem('array', toString);
    const printElement = document.querySelector('.todo-list');
    printElement.innerHTML = printString;
}
