import { Link, useNavigate,useLocation } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const { userLogIn } = useContext(AuthContext);

    const location = useLocation();

    console.log(location.pathname);

    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        userLogIn(email, password)
            .then(result => {
                console.log(result.user);
                // navigate after log in
                navigate(location?.state?location.state:'/')
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <h1 className="text-2xl text-center">Log In Now !</h1>
            <form onSubmit={handleLogin} className="card-body">
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className="text-center">New Here ? <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Login;