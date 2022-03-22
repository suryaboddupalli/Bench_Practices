const Practice = require('./Practice')

test('addtion 2 and 3 ', () => {
    expect(Practice.add(2, 3)).toBe(5)
})

test('addtion 2 and 3 ', () => {
    expect(Practice.add(2, 3)).not.toBe(4)
})

test('should be false', () => {
    expect(Practice.checkValue(null)).toBeFalsy()
})

test('user', () => {
    expect(Practice.CreateUser()).toEqual({
        Name: "Surya",
        Age: "21"
    })
})

test('Less than', () => {
    const num1 = 400
    const num2 = 600
    expect(num1 + num2).toBeLessThan(1100)
})

test('Greater than', () => {
    const num1 = 400
    const num2 = 600
    expect(num1 + num2).toBeGreaterThanOrEqual(1000)
})

test("NO I in hello", () => {
    expect('hello').not.toMatch(/I/)
})

test('admin name in array', () => {
    arrays = ['admin', 'user1', 'user2']
    expect(arrays).toContain('admin')
})

// test('fetch user', () => {
//     expect.assertions(1);
//     return Practice.FetchUser().then(data => {
//         expect(data.name).toEqual('Leanne Graham')
//     })
// })

test('fetch user', async () => {
    expect.assertions(1);
    const data = await Practice.FetchUser()
    expect(data.name).toEqual('Leanne Graham')
})
