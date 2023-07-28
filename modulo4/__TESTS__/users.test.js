const users = require("../users")

describe("Verifica os itens do array", () => {
    test("O array deverá ter o item Maria", () => {
        expect(users).toContain("Maria") // toContain verifica se o item tem o que foi passado (Maria)
    })

    test("O array não deverá ter o item Kaio", () => {
        expect(users).not.toContain("Kaio") // toContain verifica se o item tem o que foi passado (Maria)
    })

    test("Verifica se todos os itens de um array estão contidos em outro", () => {
        var expectArray = ["José", "Maria"]        
        expect(users).toEqual(expect.arrayContaining(expectArray)) // arrayContaining verifica se os dados de um array estão contidos em outro
    })
})
