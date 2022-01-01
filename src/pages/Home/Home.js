import React from 'react';
import Footer from '../Shared/Footer/Footer';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, incrementByAmount } from '../../Redux/StateSlice/StateSlice';

const Home = () => {
    const incrementVal=  useSelector(state => state.statesCounter.value);
    const dispatch= useDispatch();
    return (
        <div>
            <h1>{incrementVal}</h1>
            this is home
            <Button onClick={()=>dispatch(incrementByAmount(1))} variant="info">increment</Button>
            <Button onClick={()=>dispatch(decrement())} variant="danger">decrement</Button>
            <Footer/>
        </div>
    );
};

export default Home;