// let display = document.getElementsByClassName('display');

// function remove() {
//     // const clear = document.getElementsByClassName('clear');
//     document.calc.txt.value = '';
// }

// function divide() {
//     // const divide = document.getElementsByClassName('divide');
//     document.calc.txt.value += '/';
// }

// function multiply() {
//     // const multiply = document.getElementsByClassName('multiply');
//     document.calc.txt.value += '*';
// }

// // function seven() {
// //     // const num = document.getElementsByClassName('seven');
// //     document.calc.txt.value += '7';
// // }

// function num() {
//     const num = document.getElementsById('seven');
//     document.calc.txt.value += num;
//     console.log(num)
// }

function remove() {
    document.calc.txt.value = '';
}

function divide() {
    document.calc.txt.value += '/';
}
function multiply() {
    document.calc.txt.value += '*';
}

function plus() {
    document.calc.txt.value += '+';
}

function minus() {
    document.calc.txt.value += '-';
}

function equal() {
    document.calc.txt.value = eval(calc.txt.value)
}

function num(n) {
    document.calc.txt.value += n;
}