module.exports = function reverse (n) {
    if (n<0) {
       n = n*(-1);
    }
    let arr = n.toString().split('').map(Number);
    let result = [];
    if (arr[arr.length-1] == 0) {
        for (i=arr.length-2; i>=0; i--) {
        result.push(arr[i]);
        }
    } else for (i=arr.length-1; i>=0; i--) {
        result.push(arr[i]);
        }
    return Number(result.join(''));
}
