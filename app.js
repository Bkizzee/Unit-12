function run() {
    document.getElementById('paragraph'). innerHTML = 'Hello world!';
    document.getElementById('paragraph'). style.backgroundColor = 'green';
    document.getElementById('paragraph'). style.color = 'white';
    document.getElementById('paragraph'). style.padding = '20px';
    randomNum();
    userNumber();
}

function randomNum() {
    let ran = Math.floor(Math.random() * 10);
    let x = document.getElementById('random')
    x. innerHTML = ran;
    x. style.backgroundColor = 'purple';
    x. style.color = 'white';
    x. style.padding = '20px';
    x. style.textAlign = 'center';
}

function userNumber() {
    let user = document.getElementById('getNumber'). value;
    let y = document.getElementById('userNumber');
    y. innerHTML = user;
    y.style.color = 'white';
    y.style.backgroundColor = 'magenta';
    y.style.padding = '20px';
    y.style.backgroundColor.textAlign = 'center';

}