class ProductController {
  constructor(useCases) {
    this.useCases = useCases;
  }

  async addProduct(req, res) {
    try {
      const product = await this.useCases.addProductUseCase.execute(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAllProducts(req, res) {
    try {
      const products = await this.useCases.getAllProductsUseCase.execute();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getProductById(req, res) {
    try {
      const product = await this.useCases.getProductByIdUseCase.execute(
        req.params.id
      );
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = ProductController;
