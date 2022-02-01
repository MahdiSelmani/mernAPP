import { GET_ALL_CARS, GET_CAR, TOGGLE_FALSE, TOGGLE_TRUE } from "../types"
import axios from 'axios';



export const getAllCars = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/cars');
        dispatch({ type: GET_ALL_CARS, payload: res.data })

    } catch (error) {
        console.log(error)
    }
};

//add new car


export const addCar = (formData) => async (dispatch) => {
    try {
        await axios.post('/api/cars', formData);
        dispatch(getAllCars())

    } catch (error) {
        console.log(error)
    }
};


//remove car 
export const deleteCar = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/cars/${id}`);
        dispatch(getAllCars());
    } catch (error) {
        console.log(error)
    }
}


//update car

export const editCar = (id, formData) => async (dispatch) => {
    try {
        await axios.put(`/api/cars/${id}`, formData);
        dispatch(getAllCars());

    } catch (error) {
        console.log(error)
    }
}


export const toggleTrue = () => {
    return {type:TOGGLE_TRUE}
}

export const toggleFalse = () => {
    return{type:TOGGLE_FALSE}
}


//get one car 
export const getOneCar = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/cars/${id}`);
        dispatch({type:GET_CAR, payload : res.data})
        
    } catch (error) {
        console.log(error)
    }
}