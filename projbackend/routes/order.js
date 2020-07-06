const express = require("express");
const router = express.Router();
const{isSignedIn,isAuthenticted,isAdmin} = require("../controllers/auth")
const{getUserById, pushOrderInPurchaseList} = require("../controllers/user")
const{updateStock} =require("../controllers/product")

const {getOrderById, createOrder,getAllOrders,getOrderStatus,updateStatus} = require("../controllers/order");

//params
router.param("userId",getUserById);
router.param("orderId",getOrderById);

//create
router.post("/order/create/:userId", isSignedIn, isAuthenticted, pushOrderInPurchaseList, updateStock, createOrder);

//read
router.get("/order/all/:userId", isSignedIn, isAuthenticted, isAdmin, getAllOrders);

//status of Order
router.get("/order/status/:userId", isSignedIn, isAuthenticted, isAdmin, getOrderStatus)
router.put("/order/:orderId/status/:userId", isSignedIn,isAuthenticted,isAdmin, updateStatus);

module.exports = router;