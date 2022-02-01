import { GET_ALL_CARS, GET_CAR, TOGGLE_FALSE, TOGGLE_TRUE } from "../types";



const initState = {
    cars: [], 
    car: {},
    loading: false,
    edit: false
}
 

const carReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_ALL_CARS:
            return {...state, cars: payload, loading: false };
        case TOGGLE_TRUE:
            return {...state, edit: true };
        case TOGGLE_FALSE:
            return {...state, edit: false };
        case GET_CAR:
            return {...state, car: payload };
        default:
            return state;
    }




}
export default carReducer;