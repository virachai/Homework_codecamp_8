const myReadFile = require('../async')

//Case01
test('myReadFile can read file without error', () => {
    return myReadFile('my-test.js').then(result => {
        expect(result.length).toBeGreaterThan(0);
    });
});

//Case02
test('myReadFile can read file without error', async () => {
    const result = await myReadFile('my-test.js');
    expect(result.length).toBeGreaterThan(0);
});

//Case03
test('myReadFile must throw error when file could not be found', async () => {
    try {
        await myReadFile('my-test2.js');
    } catch (e) {
        expect(e.message).toMatch(/ENOENT: no such file or directory, open /);
    }
});