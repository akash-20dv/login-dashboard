import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch , useSelector} from "react-redux";
import { loginUser } from '../redux/slice/userSlice';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {loading,error} = useSelector((state)=>state.user);
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const handleSubmit = () => {
        let userCredentials = {
            email, password
        };
        dispatch(loginUser(userCredentials)).then((result)=>{
            if(result.payload){
                setEmail('');
              
                navigate('/dashboard');
            }
        });
    };

    return ( 
        <main>
            <form className="flex flex-col justify-center items-center gap-3" onSubmit={handleSubmit}>
                <input placeholder="Username" value={email} onChange={(e)=>setEmail(e.target.value)} className="shadow-md ps-2 py-2 border-gray-200 " type="text" />
                <input placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="shadow-md ps-2 py-2 border-gray-200 " type="text" />
                <button className=" shadow-lg bg-green-400 px-3 py-1 rounded-sm text-white mt-4 "  type='submit'>
                 {loading?"Loading":"Login"}
                </button>
                {error && (
                    <p>{error}</p>
                )}
            </form>
        </main> 
    );
};

export default Login;
