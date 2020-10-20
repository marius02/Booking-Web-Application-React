const Rental = require("./models/rental");
class FakeDB {
rentals = [{
    title: "Nice view on ocean",
    city: "San Francisco",
    category: "condo",
    image: "http://via.placeholder.com/350x250",
    numOfRooms: 4,
    shared: true,
    description: "Very nice apartment in center of the city.",
    dailyPrice: 43,
    street: "calboreanu 4"
  },
  {
    title: "Modern apartment in center",
    city: "New York",
    category: "apartment",
    image: "http://via.placeholder.com/350x250",
    numOfRooms: 1,
    shared: false,
    description: "Very nice apartment in center of the city.",
    dailyPrice: 11,
    street: "calboreanu 2"
  },
  {
    title: "Old house in nature",
    city: "Bratislava",
    category: "house",
    image: "http://via.placeholder.com/350x250",
    numOfRooms: 5,
    shared: true,
    description: "Very nice apartment in center of the city.",
    dailyPrice: 23,
    street: "calboreanu"
  }]

 clean(){
    return Rental.deleteMany({});
  }

  addData() {
    return Rental.create(this.rentals);
  }

  async populate() {
      await this.clean();
      await this.addData();
  }
}

module.exports = FakeDB;