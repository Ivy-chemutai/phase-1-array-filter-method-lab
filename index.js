// Code your solution here
function findMatching(array, value) {
    return array.filter(item => item.toLowerCase() === value.toLowerCase());

}
function fuzzyMatch(array, value) {
    return array.filter(item => item.slice(0, value.length) === value);
}
function matchName(array, value) {
    return array.filter(item => item.name === value);
}
module.exports = {
    findMatching,
    fuzzyMatch,
    matchName
};