// importa a função que vai ser testada
const areaOfSquare = require('../index')

describe("Calcular área do quadrado", () => {
    test("passado o valor 3, o resultado deve ser 9", () => {
        expect(areaOfSquare(3)).toBe(9) // toBe espera que o valor do resultado seja exatamente igual ao valor esperado
    })
    test("passado o valor 17, o resultado deve ser 289", () => {
        expect(areaOfSquare(17)).toBe(289) // toBe espera que o valor do resultado seja exatamente igual ao valor esperado
    })
    test("passado o valor 4, o resultado deve ser 16", () => {
        expect(areaOfSquare(4)).toBe(16) // toBe espera que o valor do resultado seja exatamente igual ao valor esperado
    })
})