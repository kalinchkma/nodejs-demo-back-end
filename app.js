/**
 * Title: app file
 */

// external import

const express = require("express");
const path = require("path");



/*
 internal imports 
 */

 // error middlerware
 const { defaultErrorHandler, notFoundHandler } = require('./middleware/common/errorHandler');

 // apps routes
 const userRoutes = require('./routers/userRoutes');
 const productRoutes = require('./routers/productRoutes');
 const producListRoutes = require("./routers/productListRoutes");

// database connection function
const connectDatabase = require("./config/database");

// create connection to database
connectDatabase();

// initialize express app 
const app = express();

// setting api configuration
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// request logger
app.use((req, res, next) => {
    console.log("Request enter");
    next();
});

/**
 * apps router
 */

// user router
app.use("/user", userRoutes);

// product router
app.use('/product', productRoutes);

// productList router
app.use('/product-list', producListRoutes);

// 404 error handling routes

app.use(notFoundHandler);

// default error handler routes
app.use(defaultErrorHandler);


// export apps
module.exports = app;
