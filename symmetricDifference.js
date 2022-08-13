const symmetricDifference = (...args) => {
    let arr = args[0];
    for(let i=1; i<args.length; i++) {
            let newArr = removeCommon(arr, args[i]);
        arr = newArr;
    }
    return [...new Set(arr)];
}

const removeCommon = (a, b) => {
   const spreaded = [...a, ...b];
   return spreaded.filter(el => !(a.includes(el) && b.includes(el)))
};
   
symmetricDifference([1, 2, 3], [5, 2, 1, 4]);
