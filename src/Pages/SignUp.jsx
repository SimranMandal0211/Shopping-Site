import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";


const SignUp = () => {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setErrors] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if(!firstName) newErrors.firstName = "Fill this field";
        if(!lastName) newErrors.lastName = "Fill this field";
        if(!email) newErrors.email = "Fill this field";
        if(!password) newErrors.password = "Fill this field";
        if(!confirmPassword) newErrors.confirmPassword = "Fill this field";

        if(password && confirmPassword &&password !== confirmPassword){
            newErrors.confirmPassword = "Password and Confirm Password should be same";
        }

        setErrors(newErrors);
        if(Object.keys(newErrors).length > 0) return;

        const userData = {
            firstName,
            lastName,
            email,
            password
        };
        
        // store users in browser storage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    existingUsers.push(userData);
    localStorage.setItem("users", JSON.stringify(existingUsers));

        // alert("Register Successfull");
        toast.success("Login successful");
        navigate("/login");
    };



    return(
        <div className="min-h-[calc(100vh-120px)] flex flex-col justify-center items-center bg-gray-100 px-4">
            <div className="bg-white shadow-md p-8 w-full rounded max-w-175 h-auto sm:h-112.5 flex flex-col sm:flex-row ">
{/* left */}
                <div className="w-full sm:w-1/2 flex flex-col justify-center pr-4 pl-4 sm:pr-8 sm:pl-4">
                    <h1 className="text-3xl font-bold mb-2 ">Sign Up</h1>
                    <p className="text-sm text-gray-500">We do not share your personal details with anyone</p>
                </div>

{/* right */}
                <form 
                 onSubmit={handleSubmit}
                 className="w-full sm:w-1/2 flex flex-col gap-4 sm:gap-6 pl-4 pr-4 sm:pl-8 sm:pr-4 py-4">
                    <div className="relative ">
                        <input type="text"      
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className={`peer w-full border-b py-2 outline-none ${error.firstName ? 'border-red-500' : 'border-gray-400 focus:border-blue-500'}`}
                        />
                        {error.firstName && (
                            <p className="text-red-500 text-xs mt-1">{error.firstName}</p>
                        )}
                        <label className="absolute left-0 -top-4 text-sm text-gray-400 opacity-0 peer-focus:opacity-100 peer-focus:text-blue-500 transition">
                            First Name
                        </label>
                    </div>
                    
                    <div className="relative">
                        <input type="text" 
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className={`peer w-full border-b py-2 outline-none ${error.lastName ? 'border-red-500' : 'border-gray-400 focus:border-blue-500'}`}
                        />
                        {error.lastName && (
                            <p className="text-red-500 text-xs mt-1">{error.lastName}</p>
                        )}
                        <label className="absolute left-0 -top-4 text-sm text-gray-400 opacity-0 peer-focus:opacity-100 peer-focus:text-blue-500 transition">
                            Last Name
                        </label>
                    </div>
                    <div className="relative w-full">
                        <input type="email"     
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`peer w-full border-b py-2 outline-none ${error.email ? 'border-red-500' : 'border-gray-400 focus:border-blue-500'}`}
                        />
                        {error.email && (
                            <p className="text-red-500 text-xs mt-1">{error.email}</p>
                        )}
                        <label className="absolute left-0 -top-4 text-sm text-gray-400 opacity-0 peer-focus:opacity-100 peer-focus:text-blue-500 transition">
                            Email
                        </label>
                    </div>
                    
                    <div className="relative w-full">
                        <input type="password"     
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`peer w-full border-b py-2 outline-none ${error.password ? 'border-red-500' : 'border-gray-400 focus:border-blue-500'}`}
                        />
                        {error.password && (
                            <p className="text-red-500 text-xs mt-1">{error.password}</p>
                        )}
                        <label className="absolute left-0 -top-4 text-sm text-gray-400 opacity-0 peer-focus:opacity-100 peer-focus:text-blue-500 transition">
                            Password
                        </label>
                    </div>

                    <div className="relative w-full">
                        <input type="password"     
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className={`peer w-full border-b py-2 outline-none ${error.confirmPassword ? 'border-red-500' : 'border-gray-400 focus:border-blue-500'}`}
                        />
                        {error.confirmPassword && (
                            <p className="text-red-500 text-xs mt-1">{error.confirmPassword}</p>
                        )}
                        <label className="absolute left-0 -top-4 text-sm text-gray-400 opacity-0 peer-focus:opacity-100 peer-focus:text-blue-500 transition">
                            Confirm Password
                        </label>
                    </div>

                    <button type="submit"
                    className="bg-pink-500 text-white py-2 rounded hover:bg-pink-600 cursor-pointer w-full">Signup</button>
                </form>
            </div>


    {/* footer */}
        <p className="fixed bottom-0 left-0 w-full bg-gray-300 text-center py-3 text-sm text-gray-700">
            Copyright 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd
        </p>
        </div>
    )
}

export default SignUp;


