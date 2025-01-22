const asyncHandler = require("express-async-handler")
const Order = require("../models/Order")

exports.getRiderOrder = asyncHandler(async (req,res)=>{
    const result = await Order
    .find({rider:req.user})
    .select("-rider -createdAt -updatedAt -__v")
    .populate("resturant","name email mobile")
    .populate("customer","name email mobile")
    .populate("items.dish","name type price image")
    .sort({createdAt: -1})
    res.json({message:"order fetch success",result})
})