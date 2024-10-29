function permuteString(str) {
    if (str.length <= 1) return [str];
    const permutations = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const remaining = str.slice(0, i) + str.slice(i + 1);
        for (let perm of permuteString(remaining)) {
            permutations.push(char + perm);
        }
    }
    return permutations;
}
