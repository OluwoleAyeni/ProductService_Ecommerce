class MongoDBProductRepository {
  constructor(ProductModel) {
    this.ProductModel = ProductModel;
  }

  async addproduct(ProductData) {
    const Product = new this.ProductModel(ProductData);
    return await Product.save;
  }

  async getAllProducts() {
    return await this.ProductModel.getAllProducts();
  }

  async getProductbyId(id) {
    return await this.ProductModel.findbyId(id);
  }
}

module.exports = MongoDBProductRepository;
