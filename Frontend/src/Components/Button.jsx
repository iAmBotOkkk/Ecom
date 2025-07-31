

export const ButtonComponent = ({btn , onClick}) => {
  
    return (
        <div className="w-full m-1.5">
            <button className="bg-gradient-to-r from-green-500
               to-green-600 text-white font-semibold px-4 py-2 
              rounded-md shadow-md cursor-pointer hover:from-green-600
               hover:to-green-700 transition duration-300 w-full" onClick={onClick}>{btn}</button>
        </div>
    )
}