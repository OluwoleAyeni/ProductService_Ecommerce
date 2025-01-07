class addProductUscase {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async excute(ProductData) {
    return await this.productRepository.addProduct(ProductData);
  }
}

module.exports = addProductUscase;
