const functions = require('./function')

//If we want to run anything before or after each test execution
const initDatabase = () => console.log("Database initialized")
const closeDatabase = () => console.log("Database closed")

// beforeEach(() => initDatabase())
// afterEach(() => closeDatabase())

// to run anything before or after all test execution
// beforeAll(() => initDatabase())
// afterAll(() => closeDatabase())

// to run anything after or before a/some particular test is/are executed

describe("Special test", () => {
    beforeEach(() => initDatabase())

    test("check names", () => {
        expect("Ridwan").toBe("Ridwan")
    })

    test("check types", () => {
        expect(typeof("Ridwan")).toBe("string")
    })
})
//*********************************************************** */

test('adds two number together', () => {
    expect(functions.add(2, 2)).toBe(4)
})

test('addition of two numbers not equal 5', () => {
    expect(functions.add(2, 4)).not.toBe(5)
})

test('Should output null', () => {
    expect(functions.isNull()).toBeNull()
})

test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy()
})

test('User should be Ridwan Olaniyi object', () => {
    expect(functions.createUser()).toEqual({
        firstName: "Ridwan",
        lastName: "Olaniyi"
    })
})

test("Should be less than 600", () => {
    const testscore = 230
    const examScore = 300
    expect(testscore + examScore).toBeLessThan(600)
})

test("Should be less than or equal 600", () => {
    const testscore = 300
    const examScore = 300
    expect(testscore + examScore).toBeLessThanOrEqual(600)
})

test('There should be no I in team', () => {
    expect('team').not.toMatch(/I/)  // using .toMatch(/I/i) will make it not case sensitive
})

test('Admin should be in username array', () => {
    let username = ["Ridwan", "Haleemah", "Admin"]
    expect(username).toContain('Admin')
})

// WORKING WITH ASYNC DATA

test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1) // this can be omited... it just ensures that a particular number of request is executed
    // expect.assertions(1) ensures that 1(any number of request we expect to be called) asynchronous request(api) is called
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham')
        })
    // if we omit the return statement, the test might get executed first before the request complete
})

// using Async await for asynch data instead of .then
test('User fetched name should be Leanne Graham', async() => {
    expect.assertions(1)
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham')
})