console.log(document.querySelector('.js-button').classList.contains('js-button'));

function setbutton(buttonName) {
    const button = document.querySelector(`.${buttonName}`);

    if(button.classList.contains('is-toggled'))
        button.classList.remove('is-toggled');
    else {
        button.classList.add('is-toggled');
        
        if(buttonName !== 'button1')
            document.querySelector('.button1').classList.remove('is-toggled');
        if(buttonName !== 'button2')
            document.querySelector('.button2').classList.remove('is-toggled');
        if(buttonName !== 'button3')
            document.querySelector('.button3').classList.remove('is-toggled');

    }

    
}