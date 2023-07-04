import { faker } from "@faker-js/faker";

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
      });
    }
  }

  create(data) {
    const newProduct = {
      id: faker.string.uuid(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  find() {
    return this.products;
  }

  findOne(id) {
    return this.products.find((item) => item.id === id);
  }

  update(id, data) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error("Product not found");
    }
    // update the product
    this.products[index] = {
      ...this.products[index],
      ...data,
    };
    return this.products[index];
  }

  delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error("Product not found");
    }
    // remove the product from the array products
    this.products.splice(index, 1);
    return { id };
  }
}
