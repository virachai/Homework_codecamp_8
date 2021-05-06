const cal = require('../calc')


test('1+1 = 2' , () => {
    expect(cal.add(1,1)).toBe(2);
});

test('1+1 = 3' , () => {
    expect(cal.add(1,2)).toBe(3);
});

test('2+2 = 4' , () => {
    expect(cal.add(2,2)).toBe(4);
});

test('-1+1  should throw an error' , () => {
    expect.assertions(1); // ต้องการ expect อย่างน้อย 1 ครั้ง
    try {
        cal.add(-1,1)
    } catch (e) {
        expect(e.message).toMatch('argument should be positive number')
    }
});

test('1+(-1)  should throw an error' , () => {
    expect.assertions(1); // ต้องการ expect อย่างน้อย 1 ครั้ง
    try {
        cal.add(1,-1)
    } catch (e) {
        expect(e.message).toMatch('argument should be positive number')
    }
});

test('1-1 = 0' , () => {
    expect(cal.subtract(1,1)).toBe(0);
});

test('2-1 = 1' , () => {
    expect(cal.subtract(2,1)).toBe(1);
});

test('0.1+0.2 = 0.3' , () => {
    expect(cal.add(0.1,0.2)).toBeCloseTo(0.3);
});

test('0.2-0.1 = 0.1' , () => {
    expect(cal.subtract(0.2,0.1)).toBe(0.1);
});