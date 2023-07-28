const Product = require('../product');

describe("Teste das informações do produto", () => {
    var product = new Product()
    product.description = "Boeing 777"

    test("retorna (undefined) que a propriedade stock não existe no obj produto", () => {
        expect(product.stock).toBeUndefined() //toBeUndefined espera que a propriedade passada não exista no objeto
    })

    test("retorna (defined) que a propriedade description existe no obj produto", () => {
        expect(product.description).toBeDefined() //toBeDefined espera que a propriedade passada exista no objeto
    })
})