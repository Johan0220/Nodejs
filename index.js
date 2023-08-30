const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// app.get('/product', (req, res) => {
//   Product.find({}, (err, products) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(products);
//     }
//   });
// });

// app.get('/product/:productCode', (req, res) => {
//   Product.findOne({ productCode: req.params.productCode }, (err, product) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(product);
//     }
//   });
// });




app.listen(3000, () => {
  console.log('Product management system started on port 3000');
});

require("./src/db/datatabase");
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const productrouter = require("./src/routes/product.routes");
app.use("/product",productrouter);


