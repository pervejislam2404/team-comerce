import React from 'react';
import { useForm } from 'react-hook-form';
import './Register.css'
import { Form, Button } from 'react-bootstrap';
import userProfile from './user-profile.png' 
import {Link} from 'react-router-dom';
import useFirebase from '../../../firebase/useFirebase';


const Register = () => {
    const { register, handleSubmit } = useForm();
    const {registerWithEmailPass} = useFirebase()


    const onSubmit = data => {
        registerWithEmailPass(data?.email, data?.password,data?.name);
    };

    return (
        <div className="Register-bg p-5">
            <div className="register-container p-5 mx-auto">
               <div className="row">
                   <div style={{backgroundColor:'#FED501'}} className="col-12 col-md-6 col-lg-6 text-center pt-4 pb-3">
                        <img className="img-fluid user-profile" src={userProfile} alt="" />
                        <div className="container pt-5 pb-3">
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

                        <Form.Control type="text"  
                        className="border-0 bg-light p-2 mb-3"
                        {...register("phone", { required: true})} 
                        placeholder="Contact"  
                        />

                        <select className="w-100 border-0 bg-light p-2 mb-3" {...register("gender",{ required: true})}>
                            <option value="female">female</option>
                            <option value="male">male</option>
                            <option value="other">other</option>
                        </select>


                        <Form.Control type="password"  
                        className="border-0 bg-light p-2 mb-3"
                        {...register("password", { required: true, minLength: 8})} 
                        placeholder="Password"  
                        />


                        {/* <Form.Control type="text"  
                        {...register("ssdf", { required: true})} 
                        placeholder=" input here..."  
                        />

                        <Form.Control type="text"  
                        {...register("sdccce", { required: true})} 
                        placeholder=" input here..."  
                        /> */}
                         <Button type="submit" className="d-block w-100 text-light fs-5 my-4" variant="info">Create account</Button>
                        </form>
                        <div className="text-center">
                            <h6><span>Already have an account? </span><Link className="text-decoration-none" to="/login">Sign in</Link></h6> 
                        </div>
                   </div>
               </div>
            </div>
        </div>
    );
};

export default Register;