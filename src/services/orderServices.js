import orderRepository from "../repository/order.js";

const createOrder = async (orderData) => {
  return await orderRepository.createOrder(orderData);
};

const getOrderById = async (id) => {
  return await orderRepository.getOrderById(id);
};

const getOrders = async (filter = {}) => {
  return await orderRepository.getOrders(filter);
};

const updateOrder = async (id, updateData) => {
  return await orderRepository.updateOrder(id, updateData);
};

const deleteOrder = async (id) => {
  return await orderRepository.deleteOrder(id);
};

export default {
  createOrder,
  getOrderById,
  getOrders,
  updateOrder,
  deleteOrder,
};
