function findLargestAndSmallest(arr) {
    let largest = Math.max(...arr);
    let smallest = Math.min(...arr);
    return { largest, smallest };
}
