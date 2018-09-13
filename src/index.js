module.exports = function longestConsecutiveLength(array) {
    if(array.length === 0) return 0;
 
    let count = 1, 
        arrayNumber = [];

    array = Array.from(new Set(array.sort((a,b)=>a-b)));

    for(let i = 0; i < array.length; i++) {
        if(array[i] + 1 === array[i + 1]) count++;
        else {
            arrayNumber.push(count);
            count = 1;
        }
    }

    return Math.max.apply(null, arrayNumber);
}
