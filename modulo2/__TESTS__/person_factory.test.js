const PersonFactory = require("../person_factory");
const {Client, Employee} = require("../person")

var factory = new PersonFactory()

describe("Testes - toBeNull", () => {
    test("caso não seja passado nenhum parametro, deverá retornar nulo", () => {
        expect(factory.getPerson()).toBeNull() // toBeNull espera que o resultado nulo
    })
    test("passado parametros inválidos (admin), deverá retornar nulo", () => {
        expect(factory.getPerson("admin")).toBeNull() // toBeNull espera que o resultado nulo
    })
})

describe("Testes - toBeInstanceOf", () => {
    test("caso passado a string client, retorna um novo objeto Client", () => {
        expect(factory.getPerson("client")).toBeInstanceOf(Client) // toBeInstanceOf verifica se um objeto é uma instância de uma classe
    })
    test("caso passado a string employee, retorna um novo objeto Employee", () => {
        expect(factory.getPerson("employee")).toBeInstanceOf(Employee) // toBeInstanceOf verifica se um objeto é uma instância de uma classe
    })
})