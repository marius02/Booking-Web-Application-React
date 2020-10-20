
const Rental = require('../models/rental');
exports.getRentals = (req, res) => {
  Rental.find({}, (error, data) => {
    if(error) {
      return Rental
      .sendError(res, {status: 422, detail: 'Cannot retrive data'});
    }
    return res.json(data);
  })
};

exports.getRentalById = (req, res) => {
  const { rentalId } = req.params;
  Rental.findById(rentalId, (error, data) => {
    if(error) {
      return Rental
      .sendError(res, {status: 422, detail: 'Cannot retrive data by id'});
    }
    return res.json(data);
  })
};

exports.createRental = (req, res) => {
  const rentalData = req.body;
  const newRental = new Rental(rentalData);

  newRental.save((error, createdRental) => {
    if(error) {
      return Rental
      .sendError(res, {status: 422, detail: 'Cannot post rental data'});
    }
    return res.json({ message: `Rental with id: ${createdRental._id} was added!` });
  })
}

