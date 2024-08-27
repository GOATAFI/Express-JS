import express from "express";
import {
  allStudents,
  deleteStudent,
  newStudent,
  updateStudent,
} from "../controllers/student.js";
const router = express.Router();

router.get("/all", allStudents);
router.post("/create", newStudent);
router.put("/update", updateStudent);
router.delete("/delete", deleteStudent);

export default router;
