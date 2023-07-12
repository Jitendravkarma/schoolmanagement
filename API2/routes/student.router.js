import express from 'express';
const router = express.Router();

//import controller
import * as StudentController from '../controller/student.controller.js'; 

router.post("/save",StudentController.save);

router.get("/fetch",StudentController.fetch);

router.delete("/delete",StudentController.deleteUser);

router.patch("/update",StudentController.updateUser);

router.post("/login",StudentController.login);

export default router;