export const Details = () => {
    return (
        <div className="grid place-items-center h-screen m-auto">
            <div className="  p-10">

                
                <h2 className="font-bold text-3xl ">SHOP FORM</h2>

                <div className="drop-shadow-2xl">
                    <div className="pt-3">
                        <label className="font-semibold text-lg">Grocery Shop Name*</label>
                    </div >
                    <input className="w-xl px-3 py-4 mb-4 border rounded" type="text" name="groceryShopName" placeholder="Enter shop name" />
                </div>

                <h3 className="font-bold text-3xl ">Owner Details</h3>
                <div>
                    <div className="pt-3">

                        <label className="font-semibold text-lg">Owner Name*</label>
                    </div>
                    <input className="w-xl px-3 py-4 mb-4 border rounded" type="text" name="ownerName" placeholder="Enter owner name" />
                </div>

                <div>
                    <div className="pt-3">
                        <label className="font-semibold text-lg">Email*</label>
                    </div>
                    <input className="w-xl px-3 py-4 mb-4 border rounded" type="email" name="email" placeholder="Enter email" />
                </div>


                <div>
                    <div className="pt-3">
                        <label className="font-semibold text-lg">Phone Number*</label>
                    </div>
                    <input className="w-xl px-3 py-4 mb-4 border rounded" type="text" name="phoneNumber" placeholder="Enter phone number" />
                </div>

                <h3 className="font-bold text-3xl">Shop Details</h3>


                <div>
                    <div className="pt-3">
                        <label className="font-semibold text-lg">Shop No</label>
                    </div>

                    <input className="w-xl px-3 py-4 mb-4 border rounded" type="text" name="shopNo" placeholder="Enter shop number" />
                </div>


                <div>
                    <div className="pt-3">
                        <label className="font-semibold text-lg">Area*</label>
                    </div>
                    <input className="w-xl px-3 py-4 mb-4 border rounded" type="text" name="area" placeholder="Enter area" />
                </div>


                <div>
                    <div className="pt-3">
                        <label className="font-semibold text-lg">City*</label>
                    </div>
                    <input className="w-xl px-3 py-4 mb-4 border rounded" type="text" name="city" placeholder="Enter city" />
                </div>

                <div>
                    <div className="pt-3">
                        <label className="font-semibold text-lg">Landmark</label>
                    </div>

                    <input className="w-xl px-3 py-4 mb-4 border rounded" type="text" name="landmark" placeholder="Enter landmark" />
                </div>


                <div>
                    <div className="pt-3">
                        <label className="font-semibold text-lg">Pincode</label>
                    </div>

                    <input className="w-xl px-3 py-4 mb-4 border rounded" type="text" name="pincode" placeholder="Enter pincode" />
                </div>

                <div className="flex justify-center mt-2" >
                    <button className="w-xl px-3 py-4 mb-4 bg-gradient-to-r from-green-500
               to-green-600 text-white font-semibold 
              rounded shadow-md cursor-pointer hover:from-green-600
               hover:to-green-700 transition duration-300 text-lg"  type="submit">Submit</button>
                </div>
               
            </div>
        </div>
    );
}
