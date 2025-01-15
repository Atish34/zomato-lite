const { getLocation, updateCustomerInfo, getResturant, getMenu } = require("../controllers/customer.controller")

const router = require("express").Router()


router
    .post("/get-location", getLocation)
    .post("/update-info", updateCustomerInfo)
    .get("/get-resturant", getResturant)
    .get("/get-menu", getMenu)
    
module.exports = router