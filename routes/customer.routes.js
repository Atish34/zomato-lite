const { getLocation, updateCustomerInfo, getResturant } = require("../controllers/customer.controller")

const router = require("express").Router()


router
    .post("/get-location", getLocation)
    .post("/update-info", updateCustomerInfo)
    .post("/get-resturant", getResturant)
    
module.exports = router