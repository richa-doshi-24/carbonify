const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Connect to MongoDB
mongoose.connect('mongodb+srv://mymongo:hacknyu123@cluster0.e0zl3d5.mongodb.net/test', { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Define a schema for the data
//Date,Category,Amount,Description,Destination
const itemSchema = new mongoose.Schema({
  Date: { type: String, required: true },
  Category: { type: String },
  Amount: { type: Number, required: true },
  Description: { type: String },
  UserId: {type: String},
  brand: {type: String}
});

// Define a model based on the schema
const Item = mongoose.model('Item', itemSchema);

// Create an Express app
const app = express();

// Middleware
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Routes
app.get('/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.get('/items/:id', async (req, res) => {
  const item = await Item.find({ UserId: req.params.id });
  if (!item) return res.status(404).send('Item not found');
  res.json(item);
});

app.get('score/:id', async(req, res)=>{
    const items = await Item.find({ age: req.params.id });
});

app.post('/items', async (req, res) => {
  const item = new Item(req.body);
  try {
    await item.save();
    res.json(item);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.put('/items/:id', async (req, res) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!item) return res.status(404).send('Item not found');
  res.json(item);
});

app.delete('/items/:id', async (req, res) => {
  const item = await Item.findByIdAndDelete(req.params.id);
  if (!item) return res.status(404).send('Item not found');
  res.sendStatus(204);
});

// Start the server
app.listen(3006, () => {
  console.log('Server started on port 3000');
});