const express = require("express");
const connectDB = require("./Framework/Database/config.js");
const ProductModel = require("./Framework/Database/ProductModel.js");
const DataRepository = require("./Framework/Database/dataRepository.js");
const addProductUsecase = require("./Usecases/addProductUsecase.js");
const getAllProductsUsecase = require("./Usecases/getAllProductsUsecase.js");
const getProductbyIdUsecase = require("./Usecases/getProductbyId.js");
const ProductRoutes = require("./Framework/web/routes.js");

(async () => {
  // Connect to MongoDB
  await connectDB();

  // Dependency Injection
  const productRepository = new DataRepository(ProductModel);
  const Usecases = {
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
