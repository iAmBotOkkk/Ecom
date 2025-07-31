import { useNavigate } from "react-router-dom"

export const Appbar = () => {
    const navigate = useNavigate()
    return (

        <div className="bg-[url('vegetables.jpg')] h-screen">
            <div className="absolute inset-0 bg-black/70" >
                <div className="z-10 flex items-center justify-center h-full">
                    <h1 className="text-5xl font-bold text-white">Welcome to TAZA</h1>
                </div>
            </div>
            <div className=" flex justify-between m-auto  w-7xl p-2 items-center relative">
                <h1 className=" font-higher text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">TAZA</h1>
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
                       hover:via-green-600 hover:to-green-700 hover:shadow-lg transition duration-300 "
                            onClick={() => {
                                navigate("/signin")
                            }}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}