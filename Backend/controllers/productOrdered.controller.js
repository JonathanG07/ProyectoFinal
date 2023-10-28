import { ProductOrdered } from "../models/productOrdered.model.js";


//el create esta enlazado con el POST
const createProductOrdered = async (request, response, next) => {
  try {
    const { idProduct, idOrder } = request.body;

    const productOrdered = await ProductOrdered.create({ idProduct, idOrder });
    // response.json(order);
    response.status(201).json(productOrdered);
  } catch (error) {
    next(error);
  }
};

const getProductsOrdered = async (request, response, next) => {
  try {
    //find all documents
    const productsOrdered = await ProductOrdered.find({}).populate("idProduct","idOrder").exec();

    response.status(200).json(productsOrdered);
  } catch (error) {
    next(error);
  }
};

const getProductOrdered = async (request, response, next) => {
  try {
    const id = request.params.id;
    const productOrderedFound = await ProductOrdered.findById(id);
    if (!productOrderedFound) {
      return response.status(404).end();
    }
    response.status(200).json(productOrderedFound);
  } catch (error) {
    next(error);
  }
};

const updateProductOrdered = async (request, response, next) => {
  try {
    const id = request.params.id;
    const productOrderedNewProps = request.body;
    const updateProductOrdered = await ProductOrdered.findByIdAndUpdate(id, productOrderedNewProps, {
      new: true,
    }).exec();

    response.status(200).json(updateProductOrdered);
  } catch (error) {
    next(error);
  }
};

const deleteProductOrdered = async (request, response, next) => {
  try {
    const id = request.params.id;
    const deleteProductOrdered = ProductOrdered.findByIdAndRemove(id).exec();

    if (!deleteProductOrdered) {
      response.status(404).end();
    }

    response.status(204).json(deleteProductOrdered);
    // response.status(200).end(result);
  } catch (error) {
    next(error);
  }
};

export { createProductOrdered, getProductsOrdered, getProductOrdered, updateProductOrdered, deleteProductOrdered };
