import Order from "../models/Order.js";

const itemsPopulate = {
  path: "items",
  populate: [
    { path: "product", model: "Product" },
    { path: "currency", model: "Currency" },
  ],
};

const createOrder = async (data) => {
  return await Order.create(data);
};

const getOrderById = async (id) => {
  return await Order.findById(id);
};

const getOrders = async (filter = {}) => {
  return await Order.find(filter).populate(itemsPopulate);
};

const updateOrder = async (id, update) => {
  return await Order.findByIdAndUpdate(id, update, { new: true });
};

const deleteOrder = async (id) => {
  return await Order.findByIdAndDelete(id);
};

export default {
  createOrder,
  getOrderById,
  getOrders,
  updateOrder,
  deleteOrder,
};
