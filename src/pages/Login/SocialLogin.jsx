import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../hooks/useAuth';

const SocialLogin = () => {
    const navigate = useNavigate();
    const {googleSignIn, githubSignIn} = useAuth()
    const handleSocialLogin = (media) =>{
        media()
        .then(res => {
            console.log(res.user);
            toast("Login successfully!!");
            navigate("/")
        })
        .catch(err => {
            console.log(err.message);
        })
    }

    return (
        <>
        <div className='flex justify-between gap-4'>
            <button onClick={()=> handleSocialLogin(googleSignIn)} className='btn btn-neutral btn-sm'>Google</button>
            <button onClick={()=> handleSocialLogin(githubSignIn)} className='btn btn-secondary btn-sm'>Github</button>
        </div>
        <ToastContainer />
        </>
    );
};

export default SocialLogin;