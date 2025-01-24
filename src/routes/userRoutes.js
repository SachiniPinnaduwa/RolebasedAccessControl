const express = require("express");

const router = express.Router();

//Only admin can access this router
router.get("/admin", (req, res) => {
  res.json({ message: "Welcome Admin" });
});

//Both admin and manager can access this router
router.get("/manager", (req, res) => {
  res.json({ message: "Welcome Manager" });
});

//All can access this router
router.get("/user", (req, res) => {
  res.json({ message: "Welcome User" });
});

module.exports = router;
