const average = require("../grade")

describe("Verificando médias", () => {
    test("dada as notas 7, 8 e 7, verifica se a média é maior que 6", () => {
        expect(average(7, 8, 7)).toBeGreaterThan(6) // toBeGreaterThan espera que o resultado seja maior do que o número passado (6)
    })

    test("dada as notas 6, 6 e 6, verifica se a média é maior ou igual a 6", () => {
        expect(average(6, 6, 6)).toBeGreaterThanOrEqual(6) // toBeGreaterThanOrEqual espera que o resultado seja maior ou igual ao número passado (6)
    })

    test("dada as notas 4, 3 e 8, verifica se a média é menor que 6", () => {
        expect(average(4, 3, 8)).toBeLessThan(6) // toBeLessThan espera que o resultado seja menor do que o número passado (6)
    })

    test("dada as notas 6, 6 e 6 verifica se a média é menor ou igual a 6", () => {
        expect(average(6, 6, 6)).toBeLessThanOrEqual(6) // toBeLessThanOrEqual espera que o resultado seja menor ou igual ao número passado (6)
    })

    test("dada as notas 4, 3 e 6 verifica se a média é 4.33", () => {
        expect(average(4, 3, 6)).toBeCloseTo(4.33) // toBeCloseTo permite verificar a precisão do valor
    }) 

    test("dada as notas 5, 5 e 6 verifica se a média é 5.3", () => {
        expect(average(5, 5, 6)).toBeCloseTo(5.3, 1) // toBeCloseTo permite verificar a precisão do valor com precisão de 1 casa decimal
    })
})