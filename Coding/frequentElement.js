let numbers = [1,1,1,2,2,3];
let k = 2;
function searchKelement(){
    const array = [];
    numbers.forEach(a => array[a] = (array[a] || 0) + 1)
    const dublik = Object.keys(array)
    .map(Number);
    dublik.length = k
    return dublik
}
dsd = searchKelement();
console.log(dsd);
