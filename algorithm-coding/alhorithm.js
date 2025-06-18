// const elem = document.getElementById("Spisok");
// console.log(elem.innerHTML);


function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // Находим середину текущего диапазона
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid; // Элемент найден, возвращаем индекс
    } else if (arr[mid] < target) {
      left = mid + 1; // Ищем в правой половине
    } else {
      right = mid - 1; // Ищем в левой половине
    }
  }
  
  return -1; // Элемент не найден
}

// Пример использования
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 9;

const result = binarySearch(sortedArray, target);
console.log(result); // Выведет 4 (индекс числа 9 в массиве)





// Spisok.innerHTML = '';  Очистка всего кода в айдишнике Spisok