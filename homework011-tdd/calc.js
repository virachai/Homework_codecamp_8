function add(a,b) {
    if (a < 0 || b < 0) {
        throw new Error('argument should be positive number')
    }
    return a + b;
}

function subtract(a, b) {
    return a - b
}

module.exports = {
    add: add,
    subtract: subtract
}