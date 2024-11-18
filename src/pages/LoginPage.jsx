import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";


const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const emailRef = useRef();
    const navigate = useNavigate();
    const { login, setUser, forgetPassword } = useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault()
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");
        login(email, password)
            .then(res => {
                setUser(res.user);
                e.target.reset();
                navigate(location?.state?location.state:'/');
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const handleForgetPassword = () => {
        const email = emailRef.current.value
        console.log(email)
        forgetPassword(email)
    }
    console.log(location)
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" ref={emailRef} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="flex relative">
                                <input type={showPassword ? 'text' : 'password'} placeholder="password" name="password" className="input input-bordered" required />
                                <button className="btn btn-xs absolute -right-3 top-3" onClick={() => setShowPassword(!showPassword)}>
                                   {
                                    showPassword ? <IoMdEyeOff /> : <FaEye></FaEye> 
                                   }
                                </button>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover" onClick={handleForgetPassword}>Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Login</button>
                        </div>
                    </form>
                    <p className="text-center ">Don&apos;t  have an account? <Link to={'/auth/register'} className="text-red-600 font-semibold">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;