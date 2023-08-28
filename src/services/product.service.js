import { faker } from "@faker-js/faker";
import { notFound, conflict } from "@hapi/boom";

export class ProductsService {
  constructor() {
    this.products = [];
    //generate 100 products
    this.generate();
  }

  generate() {
    const limit = 100;
    // generate 10 products
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseFloat(faker.commerce.price()),
        image: faker.image.url(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  // the all methods are async because all is a promise

  async create(data) {
    const newProduct = {
      id: faker.string.uuid(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 5000);
    });
  }

  async findOne(id) {
    //const name = this.getTotal(); test error(500) middleware
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw notFound("Product not found");
    }

    if (product.isBlock) {
      // 409 is the status code for conflict
      throw conflict("Product is block");
    }

    return product;
  }

  async update(id, data) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw notFound("Product not found");
    }
    // update the product
    this.products[index] = {
      ...this.products[index],
      ...data,
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw notFound("Product not found");
    }
    // remove the product from the array products
    this.products.splice(index, 1);
    return { id };
  }
}
