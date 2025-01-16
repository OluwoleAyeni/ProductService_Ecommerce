class product {
  constructor({ id, name, price, description, review, comment }) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.review = review;
    this.comment = comment;

    this.validate();
  }

  validate() {
    if (!this.name || this.name === "")
      throw new Error("Product can not be empty");
    if (this.price <= 0) throw new Error("Price can not zero");
  }
}

module.exports = product;

// productRepository
class productRepository {
  async addProduct(productData) {
    throw new Error("addProduct not implement");
  }
}

module.exports = productRepository;

// Use case

class addProductUscase {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async excute(productData) {
    return await this.productRepository.addProduct(productData);
  }
}

module.exports = addProductUscase;

const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

function createApp() {
  const app = express;

  app.use(bodyParser.json());
  app.use("/api/v1", routes);

  return app;
}
