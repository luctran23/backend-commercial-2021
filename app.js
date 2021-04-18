const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
require('dotenv/config')

const cateRoute = require('./api/routes/categories.route')
const brandRoute = require('./api/routes/brands.route')

app.use(express.json());
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log("Connected to DB");
})

// APIs   - start
app.use('/api/categories', cateRoute);
app.use('/api/brands', brandRoute);
// APIS   - end



app.get('/', (req, res) => {
  res.send('<img src="https://cdn.cnn.com/cnnnext/dam/assets/170606122114-vietnam---travel-destination--shutterstock-168342398.jpg" alt="nothing"/>');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})