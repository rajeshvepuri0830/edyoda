function findDuplicate(arr) {
    const seen = new Set();
    for (let num of arr) {
        if (seen.has(num)) {
            return num;
        }
        seen.add(num);
    }
    return null; // No duplicates found
}
