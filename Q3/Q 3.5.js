function makePlus(baseNum){
    return function innerFunction(newNum){
        return baseNum + newNum;
    }
}

console.log(makePlus(5));