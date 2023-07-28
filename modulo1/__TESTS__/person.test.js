
const Person = require('../person')

var paulo = new Person("Paulo Barbosa", "paulo@gmail.com", new Date(1980, 5, 12))

var objTest = new Person("Paulo Barbosa", "paulo@gmail.com", new Date(1980, 5, 12))

test("verifica se as propriedades do obj paulo são equivalente ao obj teste", () => {
    expect(paulo).toEqual(objTest) // toEqual verifica se as propriedades de um objeto são equivalentes a do outro obj
})