const arrayToSearchThrough = [];
for (let i = 1; i <= 1000; i++) {
    arrayToSearchThrough.push(i);
}

exports.linearSearchGlobal = function(valueToFind, arrayToSearchThrough) {
    const output = [];
    for(var i=0;i<arrayToSearchThrough.length;i++){
        if(arrayToSearchThrough[i]==valueToFind){
            output.push(i);
        }
    }
    return output;
};

exports.linearSearch = function(valueToFind, arrayToSearchThrough) {
    for(var i=0;i<arrayToSearchThrough.length;i++){
        if(arrayToSearchThrough[i]==valueToFind){
            return i;
        }
    }
    return undefined;
};

