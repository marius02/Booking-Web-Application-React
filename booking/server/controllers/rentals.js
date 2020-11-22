const Rental = require("../models/rental");
exports.getRentals = (req, res) => {
  Rental.find({}, (error, data) => {
    if (error) {
      return res.mongoError(error);
    }
    return res.json(data);
  });
};

exports.getRentalById = (req, res) => {
  const { rentalId } = req.params;
  Rental.findById(rentalId, (error, data) => {
    if (error) {
      return res.mongoError(error);
    }
    return res.json(data);
  });
};

exports.createRental = (req, res) => {
  const rentalData = req.body;
  const newRental = new Rental(rentalData);

  newRental.save((error, createdRental) => {
    if (error) {
      return res.mongoError(error);
    }
    return res.json({
      message: `Rental with id: ${createdRental._id} was added!`,
    });
  });
};
