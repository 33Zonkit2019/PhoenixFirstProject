// const userNamePrompt = prompt("What is your name?");

// if (userNamePrompt !== null && userNamePrompt.trim() !== ""){
//     localStorage.setItem("userName", userNamePrompt)
// } else{
//     localStorage.removeItem("userName")
// };

// const savedName = localStorage.getItem("userName");

// if(savedName){
//     document.getElementById("userNameParagraph").textContent = `я нашел твое имя в базе данных ты ${savedName}`
// } else{
//     document.getElementById("userNameParagraph").textContent = `я не нашел твое имя в базе данных`
// };

// const unar = +"ебать";

// if(unar == 1){
//     console.log(1);
// } else{
//     console.log(0);
// };

// let languageName = prompt("Какое «официальное» название JavaScript?");

// if(languageName == "ECMAScript"){
//     alert("Верно")
// } else{
//     alert("Не знаете? ECMAScript!")
// // };

// let languageName = prompt ("Какое «официальное» название JavaScript?");

// alert (languageName == "ECMAScript" ? "Верно!" : "Не знаете? ECMAScript!");
// let login = prompt();
// let message;
// (login == 'Сотрудник') ? message = 'Привет':
// (login == 'Директор') ? message = 'Здравствуйте' : 
// (login == '') ? message = 'Нет логина' : 
// message = '';

// alert(message);

// let name = prompt("Как тебя зовут?");
// let strg = localStorage.setItem("name", name);
// let savedName = localStorage.getItem("name");

// document.getElementById("userNameParagraph").textContent = "Твое имя " + name;

// let officialNameJs = prompt("Какое настоящие название Javascript??")
// localStorage.setItem("ecmascripto", officialNameJs)
// let savedNameJs = localStorage.getItem("ecmascripto")

// if(savedNameJs == "ECMAscript"){
//     document.getElementById("userNameParagraph").textContent = `Правильно! Официальное название JavaScript ${savedNameJs}`
// } else{ 
//     document.getElementById("userNameParagraph").textContent = `Нет! ${savedNameJs} не является официальным названием JS`
// }


// let begining = prompt("Кто ты?");

// if (begining == null || begining.trim() == ""){
//     alert("Отменено")
// } else if (begining == "Админ"){
//     const password = prompt("Окей, какой пароль?");

//     if(password == null || password.trim() == ""){
//         alert("Отменено")
//     } else if (password == "Я Главный"){
//         alert("Здравствуйте!")
//     } else{
//         alert("Неверный пароль!")
//     }
// } else {
//     alert("Я незнаю тебя!")
// };

// for(let i = 1; i  ; i++){
//   console.log(i);
//   if( i == 100001) break;
// }

// for(let i = 0; i < 10; i++){
//   if(i % 2 == 1) continue;
//   alert(i)
// }


// do{
//     let num = prompt("Введи число больше 100!");
//     alert("ewe  ")
// }
// for(let i = 2; i <= 20; i++){
//     if((i % 2 == 0 && i == 2) ||
//         (i % 3 == 0 && i == 3) || 
//         (i % 5 == 0 && i == 5) && i / 1 == i && i / i == 1){  
//         alert(i)

//     } else{
//         alert(i)
//     };
// }

// let a = prompt()
// if(4 % 2 == 0 && 4 == 2 || a / 1 == a && a / a == 1){
//     alert(a)
// }

// let browser = prompt("Your browser? ")

// if(browser == "edge"){
//     alert("1!")
// } else if(browser == "chrome" || browser == "firefox" || browser == "safari"){
//     alert( '2' );
// } else{
//     alert( '3' );
// };
// const number = +prompt("Введите число между 0 и 3", '')
// switch(number){
//     case 0:
//         alert('Вы ввели число 0')
//         break;
//     case 1:
//         alert('Вы ввели число 1')
//         break;
//     case 2:
//         alert('Вы ввели число 2')
//         break;
//     default:
//         alert('вы ввели другое число')
//         break;
// }

// let prmpt = prompt("Веди 3 главных героя GTA 5")

// function algorithm (){  
//     if(prmpt == "Тревор" || prmpt == "Франклин" || prmpt == "Майкл"){
//         alert("Легенда")
//     } else if ( prmpt == null || prmpt.trim() == ""){
//         alert("ты ничо не написал")
//     }    else {
//         alert("Ты позер")
//     }
// }

// if(prmpt == "Мне пох"){
//     alert("Ну ладно...")
// } else if (prmpt == null || prmpt.trim() == ""){
//     alert("ты ничо не написал")
// } else{
//     algorithm()
// }


// function nameg (kutak, kishka){
//     let x = kutak;
//     x = x + 5+5+5;
//     x = x / 3;
//     return x;
// }

// const itog = nameg(10);
// const iris = nameg(22)
// console.log(itog);
// console.log(iris);

// function areaCircle(radius){
//     return 3.14 * radius ** 2;
    
// }

// function crtHTMlEl(tag = 'input', id, text = 'отправить'){
//     const el = document.createElement(tag);
//     el.id = id;
//     el.innerText = text;

//     return el;
// }

// const h1Element = crtHTMlEl();
// console.log(h1Element);
// document.body.append(h1Element)


// function logArgs(){
//     if (!arguments.length){
//         return undefined;
//     }
//     for (let arg of arguments){
//         console.log(arg);
//     }
    
// }
// logArgs(1,2,4,5,6,7,10)

// const sayHello = function() {
//     console.log('Hello');
// }

// const saybsb = () => x = 3 + 3
// const itog = saybsb();
// console.log(itog);



// https://vk.com

// function cleanLinks (arg){
//     console.log(`https://${arg}.com`);
// }

// const brokenLinks = ['vk', 'youtube', 'facebook']
// let brk = brokenLinks.forEach(cleanLinks);

// function showMessage(trip, text = 'text po umolchaniu'){
//     trip = `XXX ${trip} XXX `;
//     equal = trip + '' + text;
//     return equal;
// }
// let vcv = showMessage('tentation', 'kutak')
// console.log(vcv);

// function checkAge(age){
//     if(age >= 18){
//         return true
//     } else{
//         return confirm("А родители вкурсе?")
//     }
// }

// let age = prompt("Вход ток совершенолетним");

//     if(checkAge(age)){
//         alert("заходь братан")
//     } else{
//         alert("пиздуй шкила")
//     }

function pow(a, b){
    if(a < 0 || b < 0){
        console.log("неправильное значение");
    } else{
    console.log(a ** b);
    }
}

pow(2, 5) == 32
pow(3, 1) == 1
pow(1, -1) == "неправильное значение"
pow(3, 2) == 9
pow(-1, 3) == "неправильное значение"
pow(1, 100) == 1

