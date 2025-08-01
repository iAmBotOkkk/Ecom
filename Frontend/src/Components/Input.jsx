

export const Inputfield = ({ fields }) => {
  
    //        <div className="grid place-items-center h-screen">
    //   <div className="w-full max-w-sm p-6 bg-white rounded shadow">
    //     <h1 className="text-2xl font-bold mb-4">Login</h1>
    //     <label className="block mb-2">Email Address</label>
    //     <input
    //       type="text"
    //       placeholder="Email Address"
    //       className="w-full px-3 py-2 mb-4 border rounded"
    //     />
    //     <label className="block mb-2">Password</label>
    //     <input
    //       type="password"
    //       placeholder="Password (min 6 characters)"
    //       className="w-full px-3 py-2 mb-4 border rounded"
    //     /> 
    //     <div className="flex items-center mb-4">
      // <input
      //   required
      //   type="checkbox"
      //   id="remember"
      //   className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
      // />
      // <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
      //   Remember me
      // </label>
    // </div>
           
    //   </div>
    // </div>
return (
    <div>
      {fields.map((field, index) => (
        <div key={index}>
          <label className="block mb-2 pl-2">{field.label}</label>
           <label  className="ml-2 text-sm text-gray-700">{field.check}</label>
          <input  className="w-full px-3 py-2 mb-4 border rounded" type= {field.type}
                placeholder={field.placeholder}
                id={field.id}
                value={field.value}
                onChange={field.onChange}
                required/>
        </div>
        
      ))}
      <div>
          <div className="flex items-center mb-4 pl-2">
        <input
        required
        type="checkbox"
        id="remember"
        className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
      />
      <label htmlFor="remember" className="ml-2 text-sm text-gray-700 ">
        Remember me
      </label>
      </div>
    
      </div>
    
    </div>
  )
}