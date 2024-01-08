const Button = (prop) => {
    return ( 
        <button className=" shadow-lg bg-green-400 px-3 py-1 rounded-sm text-white mt-4 " onClick={prop.function}>
            {prop.text}
        </button>
     );
}
 
export default Button;