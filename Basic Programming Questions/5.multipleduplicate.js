function findAllDuplicates(arr) {
    const count = {};
    const duplicates = [];
    for (let num of arr) {
        count[num] = (count[num] || 0) + 1;
    }
    for (let num in count) {
        if (count[num] > 1) {
            duplicates.push(num);
        }
    }
    return duplicates;
}
