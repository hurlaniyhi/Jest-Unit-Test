const reverseString = require('./reverseString')

test('reverseString function exists', () => {
    expect(reverseString).toBeDefined() // or expect(typeof reverseString).toEqual('function')
})

test('String reverses', () => {
    expect(reverseString('Hello')).toEqual('olleH')
})