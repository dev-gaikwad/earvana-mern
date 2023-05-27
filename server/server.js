const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const Product = require('./modules/Product');

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

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/product', productRoutes);
// app.use('/check', authorize, (req, res) => {
//   res.send({ message: 'User is authporised to do this behaviour' });
// });

app.get('/productAll', async (req, res) => {
  try {
    const allProducts = await Product.find();
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
