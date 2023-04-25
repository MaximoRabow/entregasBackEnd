const fs = require("fs");

class ProductManager {
  #prodID = 0;
  #getId() {
    this.#prodID++;
    return this.#prodID;
  }

  constructor(path) {
    this.path = path;
    this.id = 1;
    if (!fs.existsSync(this.path)) {
      fs.writeFileSync(this.path, JSON.stringify([]));
    }
  }

  async addProduct(title, description, price, thumbnail, code, stock) {
    try {
      let product = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        id: this.#getId(),
      };
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log("Falta completar campos");
      } else {
        let foundCode = false;
        let productList = await JSON.parse(fs.promises.readFile(this.path, "utf-8"));
        console.log(productList);
        productList.forEach((prod) => {
          if (prod.code === code) {
            foundCode = true;
          }
        });
        if (!foundCode) {
          productList.push(product);
          await fs.promises.writeFile(
            this.path,
            JSON.stringify(productList)
          );
          return;
        } else {
          console.log("Producto existente");
        }
      }
    } catch (err) {
      console.log(`Fallo carga de producto ${err}`);
    }
  }
}