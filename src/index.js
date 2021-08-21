module.exports = function reverse(n) {
    let result = Math.abs(n).toFixed(0).split('').reverse().join('');
    return Number(result);
}
