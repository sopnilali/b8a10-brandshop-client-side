import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { updateProfile } from "firebase/auth";
import useAuth from "../../hooks/useAuth";
import Footer from "../../components/Footer";

const Register = () => {

    const {user, createUser} = useAuth()

    const handleRegister = (e)=>{
        e.preventDefault();

        const username = e.target.username.value
        const email = e.target.email.value
        const userImage =  e.target.userImage.value
        const password = e.target.password.value
        const AcceptTerms = e.target.terms.checked
        const userdata = {username, email, userImage, password, AcceptTerms}
        console.log(userdata);

        if(!AcceptTerms){
            console.log('please accept terms and condition');
            return;
        }

        createUser(email, password)
        .then(result => {
            console.log(result.user);
            updateProfile(result.user, {
                displayName:username,
                photoURL:userImage
            } )
        })
        .catch(err => {
            console.log(err.message);
        })
    }

    return (
        <>
<div className='max-w-7xl mx-auto'>
<Header></Header>
<div className="hero min-h-screen bg-base-200">
  <div className=" flex-col lg:flex-row-reverse">
    <div className="text-center my-5  lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">UserName</span>
          </label>
          <input type="text" placeholder="Enter Your Username" name="username" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Enter your email..." name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Profile Image</span>
          </label>
          <input type="text" placeholder="Enter Photo URL..." name="userImage" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Enter your password" name="password" className="input input-bordered" required />
        </div>
        <div>
        <input type="checkbox" name="terms" id="terms" />
        <label className="ml-2 cursor-pointer" htmlFor="terms">Accept <span className="font-semibold">Term and Condition</span></label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">SignUp</button>
          <p>Are you already account? <Link className="link-success font-semibold" to="/login">Login</Link></p>
        </div>
      </form>
    </div>
  </div>
</div>
<Footer></Footer>
</div>

            
        </>
    );
};

export default Register;