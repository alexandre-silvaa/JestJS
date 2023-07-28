const avergae = require('../grade');

var n1, n2, n3

beforeAll(() => {
    console.log("Antes de tudo")
    n1 = 4
    n2 = 8
    n3 = 7
})

afterEach(() => {
    console.log("Depois de cada um")
    n1 = 3
    n2 = 4
    n3 = 5
})

afterAll(() => {
    console.log("Depois de todos")
    n1 = null
    n2 = null
    n3 = null
})

describe("Verificação de notas", () => {
    test("dada as notas 4, 8 e 7, verifica se a média é maior ou igual a 6", () => {
        expect(avergae(n1, n2, n3)).toBeGreaterThanOrEqual(6)
    })

    test("dada as notas 3, 4 e 5, verifica se a média é menor ou igual a 6", () => {
        expect(avergae(n1, n2, n3)).toBeLessThanOrEqual(6)
    })
})