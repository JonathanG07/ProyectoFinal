import { Order } from "../models/order.model.js";

//el create esta enlazado con el POST
const createOrder = async (request, response, next) => {
  try {
    const { idUser, shipped, totalPrice } = request.body;

    const order = await Order.create({ idUser, shipped, totalPrice });
		// response.json(order);
        response.status(201).json(order);
  } catch (error) {
    next(error);
  }
};

// const createOrder = async (request, response, next) => {
//   try {
//     const orderProps = request.body;
//     const newOrder = new Order(orderProps);
//     await newOrder.save();
 
//     response.status(201).end();
//   } catch (error) {
//     next(error);
//   }
// }

const getOrders = async (request, response, next) => {
  try {
    //find all documents
    const orders = await Order.find({}).populate("idUser").exec();

    response.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

const getOrder = async (request, response, next) => {
  try {
    const id = request.params.id;
    const orderFound = await Order.findById(id);
    if (!orderFound) {
      return response.status(404).end();
    }
    response.status(200).json(orderFound);
  } catch (error) {
    next(error);
  }
};


const updateOrder = async (request, response, next) => {
  try {
    const id = request.params.id;
    const orderNewProps = request.body;
    const updateOrder = await Order.findByIdAndUpdate(id, orderNewProps, {
      new: true,
    }).exec();

    response.status(200).json(updateOrder);
  } catch (error) {
    next(error);
  }
};

const deleteOrder = async (request, response, next) => {
  try {
    const id = request.params.id;
    const deleteOrder = Order.findByIdAndRemove(id).exec();

    if (!deleteOrder) {
      response.status(404).end();
    }

    response.status(204).json(deleteOrder);
    // response.status(200).end(result);
  } catch (error) {
    next(error);
  }
};

export { createOrder, getOrders, getOrder, updateOrder, deleteOrder };