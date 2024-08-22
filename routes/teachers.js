import express from "express";

const router = express.Router();

router.get("/all", (req, res) => {
  res.send("All Teachers");
});
router.post("/create", (req, res) => {
  res.send("Sign in New Teachers");
});
router.put("/update", (req, res) => {
  res.send("Update Teacher ID");
});
router.delete("/delete", (req, res) => {
  res.send("Remove Teacher from the DB");
});

export default router;
