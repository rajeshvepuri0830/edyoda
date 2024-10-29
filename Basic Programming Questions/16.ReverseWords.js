function reverseWords(sentence) {
    const words = [];
    let word = '';
    for (let char of sentence) {
        if (char === ' ') {
            words.push(word);
            word = '';
        } else {
            word += char;
        }
    }
    words.push(word); // Push the last word
    let reversedSentence = '';
    for (let i = words.length - 1; i >= 0; i--) {
        reversedSentence += words[i] + (i === 0 ? '' : ' ');
    }
    return reversedSentence;
}
