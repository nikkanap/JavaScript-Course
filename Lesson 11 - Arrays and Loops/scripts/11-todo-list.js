const toDoArray1 = [];
const toDoArray2 = [];

function keydownEvent(event, className) {
    if(event.key !== 'Enter')
        return;

    if(className === '.input1')
        toDoList1(className);
    else if (className === '.input2')
        printToDo(className);
}

function addToDo(className, array) {
    const inputElement = document.querySelector(className);
    const value = inputElement.value;
    array.push(value);
    inputElement.value = '';
}

function toDoList1(className) {
    console.log(className);
    addToDo(className, toDoArray1);
    console.log(toDoArray1);
}

function printToDo(className) {
    addToDo(className, toDoArray2);

    let printString = '';
    for(let i = 0; i < toDoArray2.length; i++){
        printString += `<p>${toDoArray2[i]}</p>`;
    }
    const printElement = document.querySelector('.todo-list');
    printElement.innerHTML = printString;
    
}