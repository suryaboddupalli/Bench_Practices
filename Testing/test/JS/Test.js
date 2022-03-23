// function TestCase() {
//     return { name: 'surya' }
// }

// module.exports = TestCase

// const TestCase = () => {
//     return { name: "surya" }
// }

// module.exports = TestCase

// function Strings() {
//     return "heelo"
// }

// module.exports = Strings

const Test = {
    object: () => { return { name: "surya" } },
    strings: () => "hello",
    stringVar: "hello",
    fetchData: (callback) => callback("hello"),
    dataFetch: () => { return new Promise((resolve, reject) => resolve('hello')) }
}

module.exports = Test