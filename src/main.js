const express = require("express");
const connectDB = require("../Framework/Database/config");
const ProductModel = reqiure("../Framework/Database/ProductModel");
const DataRepository = require("/Framework/Database/dataRepository");
const addProductUsecase = require("../Usecases/addProductUsecase");
const getAllProductsUsecase = require("../Usecases/GetAllProductUsecase");
const getProductbyIdUsecase = require("../Usecases/getProductbyIdUsecase");
const ProductRoutes = require("../web/routes");

(async () => {
  // Connect to MongoDB
  await connectDB();

  // Dependency Injection
  const productRepository = new DataRepository(ProductModel);
  const useCases = {
    addProductUseCase: new addProductUsecase(productRepository),
    getAllProductsUseCase: new getAllProductsUsecase(productRepository),
    getProductByIdUseCase: new getProductbyIdUsecase(productRepository),
  };

  // Initialize Express App
  const app = express();
  app.use(express.json());
  app.use("/api", ProductRoutes);

  // Start Server
  app.listen(3000, () =>
    console.log("E-commerce API running on http://localhost:3000")
  );
})();
