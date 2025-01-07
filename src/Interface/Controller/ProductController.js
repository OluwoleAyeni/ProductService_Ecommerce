class productController {
  constructor({
    addProductUscase,
    getAllProductUsecase,
    getProductByIdUsecase,
  }) {
    this.addProductUscase = addProductUscase;
    this.getAllProductUsecase = getAllProductUsecase;
    this.getProductByIdUsecase = getProductByIdUsecase;
  }

  async addProduct(req, res) {
    try {
      const result = await this.addProductUscase.excute(req.body);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAllProducts(req, res) {
    try {
      const result = await this.getAllProductUsecase.excute();
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getProductbyId(req, res) {
    try {
      const result = await this.getProductByIdUsecase.excute(req.params.id);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = productController;
