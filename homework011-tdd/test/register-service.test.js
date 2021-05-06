const registerService = require('../services/register-service')();
const userTest = 'myUsername';
const passTest = 'password';
const confirmPassTest = 'confirm_password';
const mailTest = 'ema@il';
const confirmMailTest = 'confirmEma@il';
const memberNoTest = 'P23456';

const db = {
    user: {
        create: () => {
            return {
                id: 2
            }
        }
    }
}

test('Username is not empty string', async () => {
    const data = await registerService.userCreate(db, userTest, passTest, passTest, mailTest, mailTest, memberNoTest);
    // console.log(data)
    //expect(data.username).not.toEqual('')
    //expect(data.username).toBeDefined()
    expect(data.username).toBeDefined()
    expect(data.errorMessage).toEqual('')
})

test('Username validation is at least 6 character', async () => {
  const data = await registerService.userCreate(db, userTest, passTest, passTest, mailTest, mailTest, memberNoTest);
  expect(data.username).toBeDefined()
  expect(data.errorMessage).toEqual('')
})

test('If Username is less than 6 characters, errorMessage should be set', async () => {
  const data = await registerService.userCreate(db, 'u1234', passTest, passTest, mailTest, mailTest, memberNoTest);
  expect(data.errorMessage).toBeDefined()
  expect(data.errorMessage).not.toEqual('')
})

test('If username containing space character, errorMessage should be set', async () => {
  const data = await registerService.userCreate(db, 'user name', passTest, passTest, mailTest, mailTest, memberNoTest);
  expect(data.errorMessage).toBeDefined()
  expect(data.errorMessage).not.toEqual('')
})

test('UserId is defined', async () => {
    const data = await registerService.userCreate(db, userTest, passTest, passTest, mailTest, mailTest, memberNoTest);
    expect(data.userId).toBeDefined()
})

test('If user input is empty, username, errorMessage should be set', async () => {
    const data = await registerService.userCreate(db, '', passTest, passTest, mailTest, mailTest, memberNoTest);
    expect(data.errorMessage).toBeDefined()
    expect(data.errorMessage).not.toEqual('')
})

test('If user input is empty, password, errorMessage should be set', async () => {
    const data = await registerService.userCreate(db, userTest, '', passTest, mailTest, mailTest, memberNoTest);
    expect(data.errorMessage).toBeDefined()
    expect(data.errorMessage).not.toEqual('')
})

test('Password validation is at least 8 character', async () => {
  const data = await registerService.userCreate(db, userTest, passTest, passTest, mailTest, mailTest, memberNoTest);
  expect(data.username).toBeDefined()
  expect(data.errorMessage).toEqual('')
})

test('If password is less than 8 characters, errorMessage should be set', async () => {
  const data = await registerService.userCreate(db, userTest, 'p1234', 'p1234', mailTest, mailTest, memberNoTest);
  expect(data.errorMessage).toBeDefined()
  expect(data.errorMessage).not.toEqual('')
})

test('If user input is empty, confirm_password, errorMessage should be set', async () => {
    const data = await registerService.userCreate(db, userTest, passTest, '', mailTest, mailTest, memberNoTest);
    expect(data.errorMessage).toBeDefined()
    expect(data.errorMessage).not.toEqual('')
})

test('If user input is empty, email, errorMessage should be set', async () => {
    const data = await registerService.userCreate(db, userTest, passTest, passTest, '', mailTest, memberNoTest);
    expect(data.errorMessage).toBeDefined()
    expect(data.errorMessage).not.toEqual('')
})

test('If user input is empty, confirm_email, errorMessage should be set', async () => {
    const data = await registerService.userCreate(db, userTest, passTest, passTest, mailTest, '', memberNoTest);
    expect(data.errorMessage).toBeDefined()
    expect(data.errorMessage).not.toEqual('')
})

test('If user input is empty, member_no, errorMessage should be set', async () => {
    const data = await registerService.userCreate(db, userTest, passTest, passTest, mailTest, mailTest, '');
    expect(data.errorMessage).toBeDefined()
    expect(data.errorMessage).not.toEqual('')
})

test('Password and confirm_password is not match, errorMessage should be set', async () => {
    const data = await registerService.userCreate(db, userTest, passTest, confirmPassTest, mailTest, mailTest, memberNoTest);
    expect(data.errorMessage).toBeDefined()
    expect(data.errorMessage).not.toEqual('')
})

test('Email and confirm_email is not match, errorMessage should be set', async () => {
    const data = await registerService.userCreate(db, userTest, passTest, passTest, mailTest, confirmMailTest, memberNoTest);
    expect(data.errorMessage).toBeDefined()
    expect(data.errorMessage).not.toEqual('')
})


test('If email does not have assign sign, errorMessage should be set', async () => {
    const data = await registerService.userCreate(db, userTest, passTest, passTest, 'email', 'email', memberNoTest);
    expect(data.errorMessage).toBeDefined()
    expect(data.errorMessage).not.toEqual('')
})

test('If member_no is in the wrong format, errorMessage should be set', async () => {
    const data = await registerService.userCreate(db, userTest, passTest, passTest, mailTest, mailTest, '123456');
    expect(data.errorMessage).toBeDefined()
    expect(data.errorMessage).not.toEqual('')
})
