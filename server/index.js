require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();
const indexRouter = require("./route/index-route");
const errorMiddleware = require("./middlewares/error-middleware");

const PORT = Number(process.env.PORT);

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(morgan("dev"));
app.use((req,res,next)=>{
  setTimeout(()=>{
    next();
  },2000)
})


app.use(process.env.VERSION, indexRouter);

//database connect
mongoose.connect(process.env.DB).then(() => {
  console.log("Database connected successfully");
});

app.use(errorMiddleware);
app.listen(PORT, () => {
  console.log(`Blog Application is running at ${PORT}`);
});
