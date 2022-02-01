const express = require('express');
const { send } = require('express/lib/response');
const { Mongoose, Schema } = require('mongoose');
const { addCar, getAllCars, deleteCar, updateCar, getCar } = require('../controllers/carControllers');
const Car = require('../models/Car');
const router = express.Router();




//GET ALL THE CARS
router.get('/', getAllCars)


//DELETE A CAR
//req.params
// method delete

router.delete('/:carId', deleteCar)


//ADD A CAR
// METHOD POST

router.post('/', addCar)


// UPDATE A  CAR
// METHOD PUT
// req.params req.body

router.put('/:carId', updateCar)


// GET ONE CAR
router.get('/:carId', getCar)


module.exports = router;