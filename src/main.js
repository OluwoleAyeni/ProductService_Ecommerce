const express = require("express");
const connectDB = require("../Framework/Database/config");
const ProductModel = reqiure("../Framework/Database/ProductModel");
const DataRepository = require("/Framework/Database/dataRepository");
const addProductUsecase = require("../Usecases/addProductUsecase");
const getAllProductsUsecase = require("../Usecases/GetAllProductUsecase");
const getProductbyIdUsecase = require("../Usecases/getProductbyIdUsecase");
