
export const Appbar = () => {
    return (
       
        <div className=" flex justify-between m-auto  w-7xl p-2 items-center">
            <h1 className=" font-Inter text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">TAZA</h1>
            <div className="flex items-center gap-3 p-4">
                <div>
                    <button className="bg-gradient-to-r from-green-500
                     to-green-600 text-white font-semibold px-4 py-2 
                     rounded-md shadow-md cursor-pointer hover:from-green-600 hover:to-green-700 transition duration-300">
                        Add Shop
                    </button>
                </div>
                <div>
                    <button className="px-6 py-2 rounded-md cursor-pointer font-semibold
                     text-black border-2 border-green-500  bg-white
                      hover:text-white hover:bg-gradient-to-r hover:from-green-500
                       hover:via-green-600 hover:to-green-700 hover:shadow-lg transition duration-300 ">
                        Login
                    </button>
                </div>

            </div>
        </div>
    )
}