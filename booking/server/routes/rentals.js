const express = require("express");
const router = express.Router();
const {
  getRentals,
  getRentalById,
  createRental } = require("../controllers/rentals");
router.get("", getRentals);

router.get("/:rentalId", getRentalById);

router.post("", createRental);

module.exports = router;
