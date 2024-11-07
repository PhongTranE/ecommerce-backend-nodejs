require("dotenv").config();
const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const app = express();

// console.log(`Process::`, process.env);

//Init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

//Init db
require("./dbs/init.mongodb");
// const { checkOverload } = require("./helpers/check.connect");
// checkOverload();

//Init routes
// app.get("/", (req, res, next) => {
//     // const strCompress = "Hello PT";
//     return res.status(200).json({
//         message: "Welcome Fantipjs",
//         // metadata: strCompress.repeat(10000),
//     });
// });
app.use("/", require("./routes"));

//Handling error

module.exports = app;
