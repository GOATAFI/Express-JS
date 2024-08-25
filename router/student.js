import express from "express";
const router = express.Router();

router.get("/all", (req, res) => res.send("All Students"));
router.get("/create", (req, res) => res.send("Create Students"));
router.get("/update", (req, res) => res.send("Update Students"));
router.get("/delete", (req, res) => res.send("Delete Students"));

export default router;
