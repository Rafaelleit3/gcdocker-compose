const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

const productsRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');

app.use('/products', productsRoutes);
app.use('/cart', cartRoutes);


sequelize.sync().then(() => {
  console.log('Database & tables created!');
  app.listen(port, () => {
    console.log(`E-commerce app listening at http://localhost:${port}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
