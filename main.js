let buttons = document.querySelectorAll('.smallBtn, .smallZeroBtn');
let getInp = document.getElementById('inpCalc');




function equation(){
    document.getElementById('inpCalc').value += value
};
function equal(){
    const itog = eval(document.getElementById("inpCalc").value)
    document.getElementById("inpCalc").value = parseFloat(itog.toFixed(10));
};
function delEquation(){
    itog = ''
}






document.getElementById('AC').addEventListener('click', () =>{
    getInp.value = '';
})
document.getElementById('1').addEventListener('click', () =>{
    getInp.value += '1';
})
document.getElementById('2').addEventListener('click', () =>{
    getInp.value += '2';
})
document.getElementById('3').addEventListener('click', () =>{
    getInp.value += '3';
})
document.getElementById('4').addEventListener('click', () =>{
    getInp.value += '4';
})
document.getElementById('5').addEventListener('click', () =>{
    getInp.value += '5';
})
document.getElementById('6').addEventListener('click', () =>{
    getInp.value += '6';
})
document.getElementById('7').addEventListener('click', () =>{
    getInp.value += '7';
})
document.getElementById('8').addEventListener('click', () =>{
    getInp.value += '8';
})
document.getElementById('9').addEventListener('click', () =>{
    getInp.value += '9';
})
document.getElementById('0').addEventListener('click', () =>{
    getInp.value += '0';
})
document.getElementById('+').addEventListener('click', () =>{
    getInp.value += ' + ';
})
document.getElementById('-').addEventListener('click', () =>{
    getInp.value += ' - ';
})
document.getElementById('/').addEventListener('click', () =>{
    getInp.value += ' / ';
})
document.getElementById('*').addEventListener('click', () =>{
    getInp.value += ' * ';
})
document.getElementById('.').addEventListener('click', () =>{
    getInp.value += '.';
})
document.getElementById('=').addEventListener('click', () =>{
    getInp.value += value;
})