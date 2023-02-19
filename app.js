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
  Company:{type: String},
  UserId: {type: String}
});

const sustainDataset = new Map();

// list of sustainable clothing brands
sustainDataset.set('Clothing', new Set(["Patagonia","Eileen Fisher","Reformation",
"Amour Vert","Outerknown","Everlane","Alternative Apparel","Stella McCartney","Thought Clothing","Nudie Jeans"]));

// list of sustainable travel options
sustainDataset.set('Travel', new Set(["MTA", "Citi Bike"]));
sustainDataset.set('Energy', new Set([]));
const avgEnergy = 914;
//const clothingSet = new Set(["Patagonia","Eileen Fisher","Reformation","Amour Vert","Outerknown","Everlane","Alternative Apparel","Stella McCartney","Thought Clothing","Nudie Jeans"]);

const indexFactor = {
  Travel: 1.5,
  Clothing: 5, 
  Energy: 2.5
}

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


app.get('/score/:id', async(req, res)=>{
    const items = await Item.find({ UserId: req.params.id });
    const score = items.reduce((acc, value) => {
      if(value['Category'] != "Energy") {
        // sustainDataset.get(value['Category']).has(value['Company'])?10:-3
        if (sustainDataset.has(value['Category'])) {
          acc[value['Category']] += sustainDataset.get(value['Category']).has(value['Company']) ? 10 :- -3;
        }
        // else {
        //   // handle the case where sustainDataset does not have an entry for value['Category']
        // }
      }else {
        avgEnergy - (value['Amount']*10)
      }
      // acc += value['Category'] != "Energy" ? (sustainDataset.get(value['Category']).has(value['Company'])?10:-3) : avgEnergy - (value['Amount']*10);
      return acc;
    }, 0);
    res.json({score:Math.max(0, score)});
});

app.get('/categories/:id', async(req, res)=>{
  const items = await Item.find({ UserId: req.params.id });
  console.log(items);
  const m = items.reduce((acc, value) => {
    if (!acc[value['Category']]) {
      acc[value['Category']] = 0;
    }
    
    if(value['Category'] != "Energy") {
      if (sustainDataset.has(value['Category'])) {
        acc[value['Category']] += sustainDataset.get(value['Category']).has(value['Company']) ? 10 : - -3;
      }
    }else {
      avgEnergy - (value['Amount']*10)
    }
    // acc[value['Category']] += (value['Category'] !== "Energy") ? (sustainDataset.get(value['Category']).has(value['Company'])?10:-3) : (avgEnergy - value['Amount']*10);
    return acc;
  }, {});
  console.log(m)
  const sum = Object.entries(m).reduce((a, b)=> {
    if(b[1] > 0){
      return a+b[1];
    }
    return a;
  }, 0);
  const result = Object.entries(m).map(val=>{
    return {name: val[0],  y:Math.max(0,val[1]*100)/sum};
  });
  res.json(result);
})
//indexFactor[value['Category']]*value['Amount'];
//(sustainDataset.get(value['Category']).has(value['Company'])?5:-3);
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
  console.log('Server started on port 3006');
});