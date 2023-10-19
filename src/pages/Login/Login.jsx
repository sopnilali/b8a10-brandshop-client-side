import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SocialLogin from "./SocialLogin";

const Login = () => {

  const { user, loginUser } = useAuth()

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(email,password);

    loginUser(email, password)
    .then(result => {
      console.log(result.user);
    })
    .catch(err => {
      console.log(err);
    })

  }

    return (
        <>
<div className='max-w-7xl mx-auto'>
        <Header></Header>
<div className="hero min-h-screen bg-base-200">
  <div className=" flex-col lg:flex-row-reverse">
    <div className="text-center my-5  lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Enter your email.." name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Enter your password.." name="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-2">
          <button className="btn btn-secondary btn-sm ">Login</button>
          <p className="mt-3">Create a new account <Link className="link-success font-semibold"  to="/register">Register</Link></p>
        </div>
      </form>
      <div className="mx-4 -mt-5 mb-5">
      <SocialLogin></SocialLogin>
      </div>
    </div>
  </div>
  </div> 
  <Footer></Footer>
</div>

        </>
    );
};

export default Login;