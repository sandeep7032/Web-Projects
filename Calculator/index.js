let screen = document.getElementsByClassName('display');

function remove() {
    screen.txt.value = '';
}

function num(n) {
    screen.txt.value += n;
}

function equal() {
    screen.txt.value = eval(screen.txt.value);
}