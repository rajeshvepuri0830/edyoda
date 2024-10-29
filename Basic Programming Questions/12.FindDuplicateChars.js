function findDuplicateChars(str) {
    const count = {};
    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    return Object.keys(count).filter(char => count[char] > 1);
}
