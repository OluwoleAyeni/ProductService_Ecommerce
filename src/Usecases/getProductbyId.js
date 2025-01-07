class getProductByIdUsecase {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async excute(id) {
    return await this.productRepository.getProductbyId(id);
  }
}

module.exports = getProductByIdUsecase;
