function twoSum(arr, sum) {
    let hashTable = {};
    let sumPair = [];
    for (let i = 0; i < arr.length; i++) {
        if (hashTable[sum - arr[i]]) {
            sumPair.push([sum - arr[i], arr[i]]);
        }
        hashTable[arr[i].toString()] = arr[i];
    }
    document.getElementById('arr').innerHTML = arr;
    document.getElementById('sum').innerHTML = sum;
    document.getElementById('result').innerHTML = sumPair;
}
twoSum([1, 2, 3, 4, 5, 6, 7, 8], 6);