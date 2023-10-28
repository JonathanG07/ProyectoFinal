import { Product } from "../models/product.model.js";

//el create esta enlazado con el POST
const createProduct = async (request, response, next) => {
  try {
    const { productType, amount, price } = request.body;

    const product = await Product.create({ productType, amount, price });

    response.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

const getProducts = async (request, response, next) => {
  try {
    //find all documents
    const products = await Product.find({});

    response.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

const getProduct = async (request, response, next) => {
  try {
    const id = request.params.id;
    const productFound = await Product.findById(id);
    if (!productFound) {
      return response.status(404).end();
    }
    response.status(200).json(productFound);
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (request, response, next) => {
  try {
    const id = request.params.id;
    const productNewProps = request.body;
    const updateProduct = await Product.findByIdAndUpdate(id, productNewProps, {
      new: true,
    }).exec();

    response.status(200).json(updateProduct);
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (request, response, next) => {
  try {
    const id = request.params.id;
    const deleteProduct = Product.findByIdAndRemove(id).exec();

    if (!deleteProduct) {
      response.status(404).end();
    }

    response.status(204).json(deleteProduct);
    // response.status(200).end(result);
  } catch (error) {
    next(error);
  }
};

export { getProducts, getProduct, createProduct, updateProduct, deleteProduct};
