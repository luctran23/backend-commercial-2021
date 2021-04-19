const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
require('dotenv/config')

const cateRoute = require('./api/routes/categories.route')
const brandRoute = require('./api/routes/brands.route')
const phoneRoute = require('./api/routes/phones.route')
const laptopRoute = require('./api/routes/laptops.route')
const accessoryRoute = require('./api/routes/accessories.route')
const cameraRoute = require('./api/routes/cameras.route')
const userRoute = require('./api/routes/users.route')
const accountRoute = require('./api/routes/accounts.route')
const billRoute = require('./api/routes/bills.route')
const promotionRoute = require('./api/routes/promotions.route')

app.use(express.json());
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log("Connected to DB");
})

// APIs   - start
app.use('/api/categories', cateRoute);
app.use('/api/brands', brandRoute);
app.use('/api/phones', phoneRoute);
app.use('/api/laptops', laptopRoute);
app.use('/api/accessories', accessoryRoute);
app.use('/api/cameras', cameraRoute);
app.use('/api/users', userRoute);
app.use('/api/accounts', accountRoute);
app.use('/api/bills', billRoute);
app.use('/api/promotions', promotionRoute);
// APIS   - end



app.get('/', (req, res) => {
  res.send('<img src="https://cdn.cnn.com/cnnnext/dam/assets/170606122114-vietnam---travel-destination--shutterstock-168342398.jpg" alt="nothing"/>');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})