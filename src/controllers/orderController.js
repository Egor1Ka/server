import { httpResponse, httpResponseError } from "../utils/http/httpResponse.js";
import { generalStatus } from "../utils/http/httpStatus.js";
import orderServices from "../services/orderServices.js";

// Create a new order
const createOrder = async (req, res) => {
  try {
    const data = req.body;
    if (!data.items || !Array.isArray(data.items) || data.items.length === 0) {
      httpResponseError(res, generalStatus.BAD_REQUEST, "Items are required");
      return;
    }
    const order = await orderServices.createOrder(data);
    httpResponse(res, generalStatus.SUCCESS, order);
  } catch (err) {
    httpResponseError(res, err);
  }
};

// Get all orders
const getOrders = async (req, res) => {
  try {
    const filter = {}; // add query filters if needed
    const orders = await orderServices.getOrders(filter);
    httpResponse(res, generalStatus.SUCCESS, orders);
  } catch (err) {
    httpResponseError(res, err);
  }
};

// Get single order by ID
const getOrder = async (req, res) => {
  try {
    const order = await orderServices.getOrderById(req.params.id);
    if (!order) {
      httpResponseError(res, generalStatus.NOT_FOUND, "Order not found");
      return;
    }
    httpResponse(res, generalStatus.SUCCESS, order);
  } catch (err) {
    httpResponseError(res, err);
  }
};

// Update order
const updateOrder = async (req, res) => {
  try {
    const updateData = req.body;
    const order = await orderServices.updateOrder(req.params.id, updateData);
    if (!order) {
      httpResponseError(res, generalStatus.NOT_FOUND, "Order not found");
      return;
    }
    httpResponse(res, generalStatus.SUCCESS, order);
  } catch (err) {
    httpResponseError(res, err);
  }
};

// Delete order
const deleteOrder = async (req, res) => {
  try {
    const deleted = await orderServices.deleteOrder(req.params.id);
    if (!deleted) {
      httpResponseError(res, generalStatus.NOT_FOUND, "Order not found");
      return;
    }
    httpResponse(res, generalStatus.SUCCESS, { message: "Order deleted" });
  } catch (err) {
    httpResponseError(res, err);
  }
};

export { createOrder, getOrders, getOrder, updateOrder, deleteOrder };
