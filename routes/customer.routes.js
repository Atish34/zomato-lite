const { getLocation, updateCustomerInfo, getResturant, getResturantMenu } = require("../controllers/customer.controller")

const router = require("express").Router()


router
    .post("/get-location", getLocation)
    .post("/update-info", updateCustomerInfo)
    .get("/get-resturant", getResturant)
    .get("/get-resturant-menu/:rid", getResturantMenu)
    
module.exports = router