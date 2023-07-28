const users = require('../users');

describe("Verifica tamanho dos items do array", () =>{
    test("verifica se o array tem três itens", () => {
        expect(users).toHaveLength(3) //toHaveLength verifica tamanho do que foi passado (itens do array)
    })

    test("verifica se o item do indice 2 tem 4 caracteres", () => {
        expect(users[2]).toHaveLength(4) //toHaveLength verifica tamanho do que foi passado (caracteres)
    })
})