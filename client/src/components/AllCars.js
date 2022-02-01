import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../redux/actions/carActions';
import CarCard from './CarCard';

function AllCars() {
    const cars = useSelector(state => state.carReducer.cars)
    const dispatch = useDispatch();


    //get cars
    useEffect(() => {
        dispatch(getAllCars())
    }, [])
    return (<div>
        <h1>All Cars</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>

            {cars.map(car => <CarCard car={car} key={car._id} />)}
        </div>
    </div>
    );
}

export default AllCars;
