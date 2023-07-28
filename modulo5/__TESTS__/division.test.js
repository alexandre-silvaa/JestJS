const divison = require('../division');

describe("Verificando exceções", () => {
    test("Deve gerar uma exceção", () => {
        expect(() => {
            divison(25,0)
        }).toThrow()
    })
    
    test("Não deve gerar uma exceção", () => {
        expect(() => {
            divison(25,2)
        }).not.toThrow()
    })
})