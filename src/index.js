const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const propertyRouter = require('./routers/property');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


const app = express()
const port = process.env.PORT || 3000
app.use(express.json());
app.use('/api/v1', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(userRouter);
app.use(propertyRouter);

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
module.exports = app;
