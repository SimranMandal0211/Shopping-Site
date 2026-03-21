import {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    // get from context
    const { login } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault(); 

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const validUser = users.find(
            (user) => user.email === email && user.password === password
        );

        if(validUser){

            const loggedUser = {
                firstName: validUser.firstName,
                email:validUser.email
            };
            
            login(loggedUser);  //context used

            // alert("Login Succesfull");
            toast.success("Login Successful!");
            
            navigate("/");
        }else{
            toast.error("Invalid email or password")
        }
    }


    return(
       <div className = "min-h-[calc(100vh-120px)] flex flex-col justify-center items-center bg-gray-100 px-4">

        <div className="bg-white shadow-md rounded w-full max-w-175 sm:h-112.5 p-8 flex flex-col sm:flex-row">
{/* left  */}
            <div className="w-full sm:w-1/2 flex flex-col justify-center pr-0 sm:pr- pl-0 sm:pl-4 py-6 sm:py-0">
                <h1 className="text-3xl font-bold mb-2 text-center sm:text-left">Login</h1>
                <p className="text-sm text-gray-500 text-center sm:text-left">Get access to your Orders, Wishlist and Recommendations</p>
            </div>


{/* right */}
            <form onSubmit={handleSubmit}
            className="w-full sm:w-1/2 flex flex-col justify-center gap-4 px-4 sm:px-6 py-6">
                <div className="relative w-full">
                    <input type="text" 
                        placeholder="Email" 
                        value = {email}
                        onChange={(e) => setEmail(e.target.value)}
                        
                        className="peer w-full border-b border-gray-400 py-2 outline-none focus:border-blue-500 text-gray-900"
                    />
                    <label className="absolute left-0 -top-4 text-sm text-gray-400 opacity-0 peer-focus:opacity-100 peer-focus:text-blue-500 transition">
                        Email
                    </label>
                </div>

                <div className="relative">
                    <input type="password"       
                        placeholder="Password" 
                        value = {password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="peer w-full border-b border-gray-400 py-2 outline-none focus:border-blue-500"
                    />
                    <label className="absolute left-0 -top-4 text-sm text-gray-400 opacity-0 transition peer-focus:opacity-100 peer-focus:text-blue-500">
                        Password
                    </label>
                </div>

                <button type="submit"
                className="bg-pink-500 text-white py-2 rounded hover:bg-pink-600 w-full cursor-pointer">
                    Login
                </button>
            </form>
        </div>
        
        {/* footer */}
        <p className="fixed bottom-0 left-0 w-full bg-gray-300 text-center py-3 text-sm text-gray-700">
            Copyright 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd
        </p>
       </div>
    )
}

export default Login;