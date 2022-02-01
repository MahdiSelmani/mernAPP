import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleFalse} from '../redux/actions/carActions';
function Home() {
  const dispatch = useDispatch();
  return <div style={{height:'400px', display:'flex', justifyContent:'center', alignItems:'center'}}> 

<Link to='/cars'>  <Button style={{margin:'5px'}} variant="dark">Show all cars</Button>
</Link>

<Link to='/addCar'> <Button style={{ margin: '5px' }} variant="dark" onClick={()=>dispatch(toggleFalse())}>Add a New Car</Button>
</Link>
</div>;
}

export default Home;
