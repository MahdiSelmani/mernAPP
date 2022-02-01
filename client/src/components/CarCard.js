import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteCar, getOneCar, toggleTrue } from '../redux/actions/carActions';

function CarCard({ car }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleDelete = () => {
        if (window.confirm('Are you sure to remove this car?'))  {dispatch(deleteCar(car._id)) }
    }

    const handleEdit = () => {
        dispatch(getOneCar(car._id));
        dispatch(toggleTrue());
        navigate('/addCar');
    }

    return <div  >
        <Card style={{ width: '18rem', margin: '5px', boxShadow: '0 2px 10px' }}>
            <Card.Img variant="top" src={car.img} style={{ height: '210px' }} />
            <Card.Body>
                <Card.Title>{car.brand}</Card.Title>
                <Card.Text> <span>Energy:</span>{car.energy}</Card.Text>
                <Card.Text> <span>Color:</span>{car.color}</Card.Text>
                <Card.Text> <span>Type:</span>{car.type}</Card.Text>

                <Button variant="dark" onClick={handleEdit}>Edit</Button>
                <Button variant="danger" onClick={handleDelete}>Delete</Button>

            </Card.Body>
        </Card>
    </div>
}
export default CarCard;
