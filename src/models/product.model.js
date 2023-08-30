const mongoose = require("mongoose");
const product_schema = new mongoose.Schema({
        productCode: String,
        productName: String,
        productData: Date,
        productOriginPrice: Number,
        quantity: Number,
        productStoreCode: String
     
});
module.exports = mongoose.model("Product",product_schema);
