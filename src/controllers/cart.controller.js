const cartService = require("../services/cart.service");

const createCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const userId = req.decodedJwtPayload;
    await cartService.createCart(userId, productId);
    res.status(201).json({ message: "Item has been put into the cart!" });
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

const editCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.decodedJwtPayload;
    await cartService.editCart(userId, productId, quantity);
    res.status(201).json({ message: "Number of item has been edited!" });
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

const deleteCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const userId = req.decodedJwtPayload;
    await cartService.deleteCart(userId, productId);
    res.status(201).json({ message: "Item has been deleted from the cart!" });
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

const getCart = async (req, res) => {
  try {
    const userId = req.decodedJwtPayload;
    const products = await cartService.getCart(userId);
    console.log(products);
    res.status(201).send(products);
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

module.exports = { createCart, editCart, deleteCart, getCart };
