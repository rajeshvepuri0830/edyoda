function findPairs(arr, targetSum) {
    const pairs = [];
    const seen = new Set();
    for (let num of arr) {
        const complement = targetSum - num;
        if (seen.has(complement)) {
            pairs.push([num, complement]);
        }
        seen.add(num);
    }
    return pairs;
}
