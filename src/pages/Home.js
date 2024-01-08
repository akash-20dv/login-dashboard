import Button from "../components/button";
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate('/login')
       
    }
    return ( 
    <main className="flex flex-col justify-center items-center w-fit m-auto">     
      <h1 className=" text-center  text-teal-800 font-bold">Login Page</h1>
          <Button text="Login" function={handleClick} ></Button>
    </main> 
   
   );
}
 
export default Home;