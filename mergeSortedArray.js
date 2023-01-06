// [3,9,13,45] , [1,4,8,15,50] = [1,3,4,8,9,13,15,45,50];

const mergeSortedArray = (arr1, arr2) => {
    const newArr = [...arr1, ...arr2];
    return newArr.sort((a,b) => a-b);
}

console.log(mergeSortedArray([3,9,13,45],[1,4,8,15,50]));