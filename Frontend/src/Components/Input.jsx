
import { useNavigate } from 'react-router-dom';   

export const Inputfield = () => {
  const navigate = useNavigate();
    return (
       <div className="grid place-items-center h-screen">
  <div className="w-full max-w-sm p-6 bg-white rounded shadow">
    <h1 className="text-2xl font-bold mb-4">Login</h1>
    <label className="block mb-2">Email Address</label>
    <input
      type="text"
      placeholder="Email Address"
      className="w-full px-3 py-2 mb-4 border rounded"
    />
    <label className="block mb-2">Password</label>
    <input
      type="password"
      placeholder="Password (min 6 characters)"
      className="w-full px-3 py-2 mb-4 border rounded"
    /> 
    <div className="flex items-center mb-4">
  <input
    required
    type="checkbox"
    id="remember"
    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
  />
  <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
    Remember me
  </label>
</div>
       <button className="bg-gradient-to-r from-green-500
           to-green-600 text-white font-semibold px-4 py-2 
          rounded-md shadow-md cursor-pointer hover:from-green-600
           hover:to-green-700 transition duration-300 w-full" onClick={() => {
            navigate("/signin")
           }} > Login</button>
  </div>
</div>

    )
}