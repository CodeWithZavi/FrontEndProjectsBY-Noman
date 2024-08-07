const buttons = document.querySelectorAll('.button')
//console.log(buttons)
const body = document.querySelector("body")

buttons.forEach(function (button) {  // read every button
    console.log(button)
    button.addEventListener('click', function (e) {
        // console.log(e)
        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = e.target.id;
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id;
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id;
                break;
            case 'red':
                body.style.backgroundColor = e.target.id;
                break;
        }

    });
});

