import React from 'react';
import { useForm } from 'react-hook-form';
import './Register.css'
import { Form, Button } from 'react-bootstrap';
import userProfile from './user-profile.png' 
import {Link} from 'react-router-dom';
import useFirebase from '../../../firebase/useFirebase';
import {useSelector} from 'react-redux';


const Register = () => {
    const { register, handleSubmit } = useForm();
    const {registerWithEmailPass} = useFirebase()

    const errorMsg= useSelector(state=>state.statesCounter.errorMsg)


    const onSubmit = data => {
        registerWithEmailPass(data?.email, data?.password,data?.name);
    };

    return (
        <div className="Register-bg p-5">
            <div className="register-container p-4 mx-auto">
               <div className="row">
                   <div style={{backgroundColor:'#FED501'}} className="col-12 col-md-6 col-lg-6 text-center pt-3 pb-3">
                        <div className="">
                        <img className="img-fluid user-profile" src={userProfile} alt="" />
                        </div>
                        <div className="container pt-3 pb-3">
                            <h5 className="fs-3 fw-bold">Les't get you set up</h5>
                            <p className="text-secondary fw-normal">It should only take a couple of minutes to pair with your watch</p>
                        </div>
                   </div>


                   <div className="col-12 col-md-6 col-lg-6 pt-3">
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Control type="text"
                        className="border-0 bg-light p-2 mb-3"
                        {...register("name", { required: true})} 
                        placeholder="Name" 
                         />

                        <Form.Control type="email"  
                        className="border-0 bg-light p-2 mb-3"
                        {...register("email", { required: true})} 
                        placeholder="Email"  
                        />

                       
                        <Form.Control type="password"  
                        className="border-0 bg-light p-2 mb-3"
                        {...register("password", { required: true, minLength: 8})} 
                        placeholder="Password"  
                        />


                         <Button type="submit" className="d-block w-100 text-light fs-5 my-4" variant="info">Create account</Button>
                        </form>
                        <div className="text-center">
                            <h6><span>Already have an account? </span><Link className="text-decoration-none" to="/login">Sign in</Link></h6> 
                        </div>

                        <div className="text-center pt-3">
                            <h6 className="text-danger">{errorMsg.split(':')[1]}</h6> 
                       </div>
                   </div>
               </div>
            </div>
        </div>
    );
};

export default Register;