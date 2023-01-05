import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";

const provider = new GoogleAuthProvider();

const Login = () => {
    const navigate = useNavigate();

    const googleAuth = () => {
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
    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        

        if (email && password) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage);
                });
        }

    }
    return (
        <div className='h-screen flex justify-center items-center bg-accent'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className='text-center'>Login</h1>
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
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