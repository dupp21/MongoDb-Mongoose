require("dotenv").config();

const PORT = process.env.PORT;

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//MONGODB CONFIG
const mongoose = require("mongoose");
const MONGODB_URI = "mongodb://localhost:27017/company";
mongoose.connect(
  MONGODB_URI,
  {
    useNewUrlParser: true
  }
);

//MONGODB MODEL
const SChema = mongoose.Schema;
const Customer = mongoose.model(
  "customers",
  new SChema({
    first_name: String,
    last_name: String,
    age: Number,
    address: {
      street: String,
      city: String,
      zip_code: String,
      provinci: String
    }
  })
);

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/customers/:_id", (req, res) => {
  Customer.findById(req.params._id, (err, customers) => {
    if (err) return res.send(err);
    res.send(customers);
  });
});

//CALLBACK FUNCTION
app.post("/customers", (req, res) => {
  Customer.create(req.body, (err, customers) => {
    if (err) return res.send(err);
    res.send(customers);
  });
});

app.get("/customers", (req, res) => {
  Customer.find({}, (err, customers) => {
    if (err) return res.send(err);
    res.send(customers);
  });
});

//DELETE ONE
app.delete("/customers/:id", (req, res) => {
  Customer.findByIdAndRemove(req.params.id, (err, customers) => {
    if (err) return res.send(err);
    res.send(customers);
  });
});

app.listen(PORT, () => console.log(`App Running on port ${PORT}`));
