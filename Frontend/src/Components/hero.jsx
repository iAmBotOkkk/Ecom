import  { Search, MapPin, Clock } from 'lucide-react';
export const Hero = () => {
    return (
        <div className="bg-gradient-to-br from-emerald-50 via-white to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Fresh Groceries,
            <span className="text-emerald-600 block">Delivered Fresh</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover local grocery stores in your neighborhood. Get fresh produce, 
            daily essentials, and quality ingredients delivered right to your doorstep.
          </p>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-2 flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center px-4 py-3 border-r border-gray-200">
                <MapPin className="h-5 w-5 text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Enter your location"
                  className="w-full outline-none text-gray-700 placeholder-gray-400"
                />
              </div>
              <div className="flex-1 flex items-center px-4 py-3">
                <Search className="h-5 w-5 text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Search for groceries, stores..."
                  className="w-full outline-none text-gray-700 placeholder-gray-400"
                />
              </div>
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-xl hover:bg-emerald-700 transition-colors duration-200 font-semibold">
                Search
              </button>
            </div>
          </div>

    
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <Clock className="h-8 w-8 text-emerald-600" />
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">Quick Delivery</h3>
                <p className="text-gray-600 text-sm">30 min delivery</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <Search className="h-8 w-8 text-emerald-600" />
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">Easy Discovery</h3>
                <p className="text-gray-600 text-sm">Find local stores</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <MapPin className="h-8 w-8 text-emerald-600" />
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">Local Focus</h3>
                <p className="text-gray-600 text-sm">Support neighborhood</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}