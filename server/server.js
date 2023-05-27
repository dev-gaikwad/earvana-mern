const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const authorize = require('./jwtAuthouriser');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@${process.env.MONGO_CLUSTER}.yckv4ef.mongodb.net/?retryWrites=true&w=majority`
);

const ProductSchema = mongoose.Schema({
  id: mongoose.ObjectId,
  name: { type: String, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  in_ear: Boolean,
  wired: Boolean,
  image_url: String,
  price: Number,
  discount: Boolean,
  rating: Number,
  description: String,
  created_at: { type: Date, default: Date.now },
});

const Product = mongoose.model('Product', ProductSchema);

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/product', productRoutes);

app.get('/productAll', async (req, res) => {
  try {
    const allProducts = await Product.find({});
    if (allProducts) {
      res.status(200).json(allProducts);
    }
  } catch (error) {
    res.send(error);
  }
});

app.use('/', (req, res) => {
  res.send('Hello');
});
app.listen(process.env.PORT, () => {
  console.log('Server running ...');
});
