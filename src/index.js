module.exports = function longestConsecutiveLength(array) {
 
    let k = 1, arr = [];
    if(array.length === 0) return 0;
    else if(array.length === 1) return 1;

    array = Array.from(new Set(array.sort((a,b)=>a-b)));

    for(let i = 0; i < array.length; i++){
        if(array[i] + 1 === array[i+1]) k++;
        else{
            arr.push(k);
            k = 1;
        }
    }

    return arr.sort((a,b)=>b-a)[0];

}
