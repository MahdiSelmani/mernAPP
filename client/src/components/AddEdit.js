import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addCar, editCar } from '../redux/actions/carActions';
import { useNavigate } from 'react-router-dom';


function AddEdit() {
    const car = useSelector(state => state.carReducer.car);

    const edit = useSelector(state => state.carReducer.edit);
    const navigate = useNavigate()
    const [formData, setFormData] = useState({ brand: '', color: '', type: '', energy: '', img: '' });
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    
    //add a new car
    const handleAdd = (e) => {
        e.preventDefault();
        dispatch(addCar(formData));
        navigate('/cars')
    }



   
    const handleEdit = (e) => {
        e.preventDefault();
        dispatch(editCar(car._id,formData));
        navigate('/cars')
        
    }
    useEffect(() => {
        edit ? setFormData({ brand: car.brand, color: car.color, energy: car.energy, type: car.type, img: car.img }) : setFormData({ brand: '', color: '', type: '', energy: '', img: '' });

    }, [car]);

    return <div> 
        <Form>
            <Form.Group className="mb-3" >
                <Form.Label>Brand</Form.Label>
                <Form.Control type="text" name='brand' value={formData.brand} onChange={handleChange} />
                
            </Form.Group>

            <Form.Group className="mb-3"  >
                <Form.Label>Type</Form.Label>
                <Form.Control type="text" name='type' value={formData.type} onChange={handleChange}/>
            </Form.Group>
            
            <Form.Group className="mb-3" >
                <Form.Label>Energy</Form.Label>
                <Form.Control type="text"  name='energy' value={formData.energy} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" > 
                <Form.Label>Color</Form.Label>
                <Form.Control type="text"  name='color' value={formData.color} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3"  >
                <Form.Label>Image URL</Form.Label>
                <Form.Control type="text" name='img' value={formData.img} onChange={handleChange} />
            </Form.Group>
            {edit?<Button variant="primary" type="submit" onClick={handleEdit} >
                Edit
            </Button>:<Button variant="primary" type="submit" onClick={handleAdd} >
                Add
            </Button>}
        </Form>

    </div>
}
 
export default AddEdit;
