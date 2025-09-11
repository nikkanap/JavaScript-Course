let calculation = localStorage.getItem('calculation') || '';
let calculatorDisplay = document.querySelector('.calculator-display')

function updateCalculation(value){
    if(calculation == '0')
        calculation = '';
    calculation += value;
    calculatorDisplay.innerHTML = calculation;
    localStorage.setItem('calculation', calculation)
}

function calculate() {
    calculation = eval(calculation).toFixed(11); 
    calculatorDisplay.innerHTML = calculation;
    calculation = calculation.toString()
    localStorage.setItem('calculation', calculation)
}

function clearButton() {
    calculation = '0';
    console.log(calculation);
    calculatorDisplay.innerHTML = calculation;
    localStorage.removeItem('calculation');
    localStorage.setItem('calculation', calculation)
}