const Login = () => {
    return(
       <div className = "min-h-screen flex flex-col justify-center items-center bg-gray-100 ">
        <div className="bg-white shadow-md p-8 rounded w-[700px] h-[450px] flex item-center">
{/* left  */}
            <div className="w-1/2 flex flex-col justify-center pr-6">
                <h1 className="text-3xl font-bold mb-2">Login</h1>
                <p className="text-sm text-gray-500">Get access to your Orders, Wishlist and Recommendations</p>
            </div>


{/* right */}
            <form className="w-1/2 pl-6 flex flex-col gap-6 justify-center">
                <div className="relative">
                    <input type="text" 
                        placeholder="Email" 
                        className="peer w-full border-b border-gray-400 py-2 outline-none focus:border-blue-500"
                    />
                    <label className="absolute left-0 -top-4 text-sm tetx-blue-400 opacity-0 peer-focus:opacity-100 peer-focus:text-blue-500 transition">
                        Email
                    </label>
                </div>

                <div className="relative">
                    <input type="password"       
                        placeholder="Password" 
                        className="peer w-full border-b border-gray-400 py-2 outline-none focus:border-blue-500"
                    />
                    <label className="absolute left-0 -top-4 text-sm tetx-blue-400 opacity-0 transition peer-focus:opacity-100 peer-focus:text-blue-500">
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