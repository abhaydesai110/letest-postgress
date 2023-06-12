const express = require("express");
const router = express.Router();

const {
  createUserId,
  getAllUser,
  getUserById,
  deleteUser,
} = require("../Controller/Controller.js");

router.post("/add", createUserId);
router.get("/getuser", getAllUser);
router.delete("/deleteuser", deleteUser);
router.get("/getUserBy/:Id", getUserById);

module.exports = router;
