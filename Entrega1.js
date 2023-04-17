class ProductManager {
    #id = 0;
    constructor () {
        this.products = [];
    }

    getProducts () {
        return this.products;
    }

    addProduct (tittle, description, price, thumbnail, code, stock) {
        let filtro = this.products.filter((prod) => prod.tittle === tittle);
        if (filtro.length > 0) {
            console.log("producto ya existente");
            return;
        }
        const product = {
            tittle,
            description,
            price,
            thumbnail,
            code,
            stock,
        }

        product.id = this.#getID ();
        
        this.products.push (product);

    };

    #getID () {
        return this.#id;
    }
    
    getProductsById (idProduct) {
        const prodIndex = this.products.findIndex (
            (products) => products.id === idProduct
        );
        
        if (prodIndex === -1) {
            console.log('not found');
            return;
        } 
    }
}
const productManager = new ProductManager ();
const productManager2 = new ProductManager ();
productManager.addProduct ('Max', 'lalalalala', 50)
productManager.addProduct ('Max', 'lalalalala', 50)

console.log(productManager.getProducts())