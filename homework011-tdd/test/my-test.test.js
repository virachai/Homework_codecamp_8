  
const add = require('../my-test')

test('two plus two is four', () => {
    expect(add(2,2)).toBe(4);
});

test('two plus two is not three', () => {
    expect(add(2,2)).not.toBe(3);
});