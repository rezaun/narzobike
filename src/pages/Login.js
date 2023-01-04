import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";

const provider = new GoogleAuthProvider();

const Login = () => {
    const navigate = useNavigate();
    
    const googleAuth = () =>{
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user);
            navigate("/");
        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    return (
        <div className='h-screen flex justify-center items-center bg-accent'>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className='text-center'>Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                          
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <label className="">
                        New in Narzo Bike? Please <NavLink to='/signup' className="link link-hover text-red-500"> Sign Up </NavLink> Here
                    </label>
                        <div className="divider">OR</div>
                        <button className='btn btn-glass hover:btn-accent' onClick={googleAuth}>Continue with Google</button>
                    </div>
                </div>

            </div>
    );
};

export default Login;