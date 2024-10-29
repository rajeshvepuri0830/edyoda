function printDuplicateCharacters(str) {
    const count = {};
    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    for (let char in count) {
        if (count[char] > 1) {
            console.log(char);
        }
    }
}
