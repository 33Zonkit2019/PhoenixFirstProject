let strs = ["eat","tea","tan","ate","nat","bat"]


function getStrsSplit(){
    const result = [];
    for(let huh of strs){
        const sortHuh = huh.split('').sort().join('');
        if(!result[sortHuh]){
            result[sortHuh] = []
        } result[sortHuh].push(huh)
    } return Object.values(result)
}

let tgk = getStrsSplit()
console.log(tgk);
