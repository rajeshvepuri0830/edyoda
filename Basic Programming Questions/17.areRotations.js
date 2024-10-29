function areRotations(str1, str2) {
    if (str1.length !== str2.length) return false;
    const concatenated = str1 + str1;
    return concatenated.includes(str2);
}
