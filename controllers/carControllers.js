const Car = require("../models/Car");

exports.addCar = async (req, res) => {
    const { brand, color, energy, type, img } = req.body;
    try {
        const car = new Car({ brand, color, energy, type, img });
        await car.save();
        res.send('Car added')
    } catch (error) {
        res.status(500).send('server error')
    }
};

exports.getAllCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.send(cars)
    } catch (error) {
        res.status(500).send('server error')
    }
};
exports.deleteCar = async (req, res) => {
    const { carId } = req.params;
    try {
        await Car.findByIdAndRemove(carId);
        res.send('Car deleted');
        
    } catch (error) {
        res.status(500).send('server error')
    }
};


exports.updateCar = async (req, res) => {
    const { carId } = req.params;
    try {
       await Car.findByIdAndUpdate(carId, { $set: { ...req.body } });
        res.send('Car updated succefully')
    } catch (error) {
        res.status(500).send('server error')
    }
};


exports.getCar = async (req, res) => {
    const { carId } = req.params;
    try {
        const car = await Car.findById(carId);
        res.send(car);
    } catch (error) {
        res.status(500).send("server error")
    }
};

