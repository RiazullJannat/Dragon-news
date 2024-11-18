import { useContext } from "react";
import { Link, useNavigate, } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { sendEmailVerification } from "firebase/auth";

const RegisterForm = () => {
    const navigate = useNavigate();
    const { createNewUser, setUser } = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target);
        const name = form.get("name");
        const photoUrl = form.get("photoUrl");
        const email = form.get("email");
        const password = form.get('password');
        const terms = e.target.terms.checked
        console.log(name, photoUrl, terms);
        createNewUser(email, password)
            .then(res => {
                sendEmailVerification(res.user);
                if (!res.user.emailVerified) {
                    alert('please verify your email.')
                    return;
                }

                setUser(res.user)
                console.log(res.user)
                e.target.reset();
                alert("an email was sent in your inbox.")
                navigate('/')

            })
            .catch(error => {
                console.log("error:", error.message);
            })

    }
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-center mb-6">Register your account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="photoUrl">
                            Photo URL
                        </label>
                        <input
                            type="url"
                            id="photoUrl"
                            name="photoUrl"
                            placeholder="Enter photo URL"
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email address"
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="flex items-center mb-6">
                        <input type="checkbox" name="terms" className="checkbox checkbox-primary mr-2" />
                        <label htmlFor="terms" className="text-sm text-gray-700">
                            Accept <span className="font-semibold">Term & Conditions</span>
                        </label>
                    </div>
                    <button type="submit" className="btn btn-neutral w-full">
                        Register
                    </button>
                </form>
                <p className="text-center">All ready have an account? <Link to={'/auth/login'} className="text-red-600 font-semibold">Login</Link></p>
            </div>
        </div>
    );
};

export default RegisterForm;
