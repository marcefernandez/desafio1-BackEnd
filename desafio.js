//clase para gestion
class ProductManager {
    //elemento constructor
    constructor(products = []) {
        this.products = products;
        this.currentId = 1;
    }

    addProduct(product) {
        if (
            !product.title ||
            !product.description ||
            !product.price ||
            !product.thumbnail ||
            !product.code ||
            !product.stock
        ) {
            throw new Error("All fields are required");
        }

        if (this.products.some((p) => p.code === product.code)) {
            throw new Error("Duplicate code");
        }
        const newProduct = {
            ...product,
            id: this.currentId++,
        };
            this.products.push(newProduct);
            return newProduct;
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find((p) => p.id === id);
            if (!product) {
                console.error("Not Found");
            }
        return product;
    }
}
const products = [];
const productManager = new ProductManager(products);

productManager.addProduct({
    title: 'Moto deportiva "Yamaha R1 M 2010"',
    description: 'La mejor moto deportiva actualmente',
    price: "$10.000",
    thumbnail: 'https://i.pinimg.com/564x/d7/ae/1b/d7ae1b28c3e31a99e03cff1e39cba5df.jpg',
    code: 'P1',
    stock: 10
});

const allProducts = productManager.getProducts();
console.log(allProducts);

const productById = productManager.getProductById(1);
console.log(productById);

const productByIdNotFound = productManager.getProductById(3);
console.log(productByIdNotFound);

