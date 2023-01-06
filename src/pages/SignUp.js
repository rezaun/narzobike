import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";
import { toast } from 'react-hot-toast';

const provider = new GoogleAuthProvider();

const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });
    const [confirmPassword, setConfirmPassword] = useState({ value: "", error: "" });
    //console.log(email);

    const handleEmail = (emailInput) => {
        if (/^\S+@\S+\.\S+$/.test(emailInput)) {
            setEmail({ value: emailInput, error: "" });
        } else {
            setEmail({ value: "", error: "Invalid Email" });
        }
    };
    const handlePassword = (passwordInput) => {
        if (passwordInput.length < 7) {
            setPassword({ value: "", error: "Password should be grater then 7" });
        } else {
            setPassword({ value: passwordInput, error: "" });
        }

    };

    const handleConfirmPassword = (confirmPasswordInput) => {
        if(confirmPasswordInput === password.value){
            setConfirmPassword({value:confirmPassword, error:""})
        }else{
            setConfirmPassword({value:"", error:"Password not match"})
        }
        setEmail(confirmPasswordInput);
    };

    const googleAuth = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                navigate("/");
            }).catch((error) => {
                const errorMessage = error.message;
                //console.log(errorMessage);
            });
    };

    const handleSignup = (event) => {
        event.preventDefault(); 
        if(email.value === ""){
            setEmail({value:"", error:"Email is require"});
        }
        if(password.value === ""){
            setPassword({value:"", error:"Password is require"});
        }
        if (confirmPassword.value === "") {
            setConfirmPassword({
              value: "",
              error: "Password confirmation is required",
            });
          }

        if(email.value && password.value === confirmPassword.value){
            
            createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                const user = userCredential.user;
                toast.success("User successfully created", {id:"error"});
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if(errorMessage.includes("email-already-in-use")){
                    toast.error("This Email already Exits", {id:"error"});
                } else {
                    toast.error(errorMessage, {id:"error"});
                }
                
            });
        }
    };

    return (
        <div className='h-screen flex justify-center items-center bg-accent'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className='text-center'>Sign Up</h1>
                    <form onSubmit={handleSignup}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name='email' className="input input-bordered" onBlur={(event) => handleEmail(event.target.value)} />
                        </div>
                        {
                            email?.error && <p className='text-sm text-red-500'>{email.error}</p>
                        }
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" name='password' className="input input-bordered" onBlur={(event) => handlePassword(event.target.value)} />

                        </div>
                        {
                            password?.error && <p className='text-sm text-red-500'>{password.error}</p>
                        }
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="Confirm Password" name='confirmPassword' className="input input-bordered" onBlur={(event) => handleConfirmPassword(event.target.value)} />

                        </div>
                        {
                            confirmPassword?.error && <p className='text-sm text-red-500'>{confirmPassword.error}</p>
                        }
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <label className="">
                        Already Member? Please <NavLink to='/login' className="link link-hover"> Login </NavLink> Here
                    </label>
                    <div className="divider">OR</div>
                    <button className='btn btn-glass hover:btn-accent' onClick={googleAuth}>Continue with Google</button>
                </div>
            </div>

        </div>
    )
}

export default SignUp