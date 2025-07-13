

function searchPalindrom(palindrom){
    for (let i = 0; i < palindrom.length; i++) {
        let lfk = palindrom[i].split("").reverse().join("")
        if(lfk == palindrom[i]){
            console.log(`${palindrom[i]} = ${true}`);
        } else{
            console.log(`${palindrom[i]} = ${false}`);
        }
}};


searchPalindrom(["ШАЛАШ", "ЗАКАЗ", "КОТИК", "ЦВЕТОК"]);






























// let spisok = [1, 2, 1, 3, 4, 22, 32, 33]

// function math(){
//     return spisok.filter(num => num % 2 == 0)
// }

// let rslt = math(); //
// console.log(rslt);

// let fnc = spisok.forEach((element) => console.log(element));


