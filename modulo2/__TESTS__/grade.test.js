const average = require("../grade")

describe("Verifica média de notas", () => {
    test("passada as notas 6, 7 e 5, deverá retornar true", () => {
        expect(average(6, 7, 5)).toBeTruthy() // toBeTruthy espera que ao passar os parametros para a função, seja retornado true
    })

    test("passada as notas 3, 5 e 4, deverá retornar false", () => {
        expect(average(3, 5, 4)).toBeFalsy() // toBeFalse espera que ao passar os parametros para a função, seja retornado false
    })
})