import Button from "../components/button";
const LoginForm = (prop) => {
    return ( 
        <>
        <form action="" className="flex flex-col justify-center items-center gap-3">
                <input placeholder="Username" value={prop.email} onChange={prop.emailSet} className="shadow-md ps-2 py-2 border-gray-200 " type="text" />
                <input className="shadow-md ps-2 py-2 border-gray-200" placeholder="password" type="password" />
                <Button text="Login" 
                    function={prop.function}
                />
            </form>
        </>
     );
}
 
export default LoginForm;