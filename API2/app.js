import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileupload from 'express-fileupload';

const app = express();

//import routes for route level middleware
import UserRouter from './routes/user.router.js'; 
// import StudentRouter from './routes/student.router.js';
import CategoryRouter from './routes/category.router.js';
import ProductRouter from './routes/product.router.js';

//configuration to handle cross origin request
app.use(cors());

//configuration to handle req file data
app.use(fileupload());

//configuration to extract request body content
app.use(bodyParser());

//to link route in route level middleware
app.use("/user",UserRouter);
// app.use("/student",StudentRouter);
app.use("/category",CategoryRouter);
app.use("/product",ProductRouter);

app.listen(3001);
console.log("server invoked at link http://localhost:3001");
