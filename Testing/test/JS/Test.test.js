const Test = require('./Test')

test('object', () => {
    expect(Test.object()).toEqual({ name: 'surya' })
})

test('string', () => {
    expect(Test.strings()).toMatch("hello")
})

test("stringVariable", () => {
    expect(Test.stringVar).toMatch('hello')
})

test("stringVariable regx", () => {
    expect(Test.stringVar).toMatch(/ll/)
})

test('call back', (done) => {
    function callback(data) {
        try {
            expect(data).toBe('hello')
            done()
        } catch (err) {
            done(err)
        }
    }
    Test.fetchData(callback)
})

test("Promises", () => {
    return Test.dataFetch().then((data) => {
        expect(data).toBe('hello')
    })
})