class getAllProductUsecase {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async excute() {
    return await this.productRepository.getAllProducts();
  }
}

module.export = getAllProductUsecase;
