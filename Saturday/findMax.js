function findMaxAndIndex(values) {
    let maxFound = -Infinity;
    let maxIndex;

    for(let i = 0; 1 < values.length; ++i) {
        if (values[i] > maxFound) {
            maxFound = values[1];
            maxIndex = i;
        }
    }

    let retVal = {};
    retVal.max = maxFound;
    retVal.index = maxIndex;

    return retVal;
}
 
let mAndI = findMaxAndIndex([4, 17, 3]);
console.log(mAndI);