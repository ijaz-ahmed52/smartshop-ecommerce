import { Link } from "react-router-dom"
import { FaExclamationTriangle } from "react-icons/fa"

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <FaExclamationTriangle className="text-6xl text-blue-800 mb-6" />
      
      <h1 className="text-7xl md:text-8xl font-bold text-gray-900 mb-4">404</h1>
      
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
        Page Not Found
      </h2>
      
      <p className="text-gray-600 max-w-md mb-8">
        Sorry, the page you’re looking for doesn’t exist or was moved. 
        Let’s get you back to shopping.
      </p>
      
      <Link 
        to="/" 
        className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300"
      >
        Go Back Home
      </Link>
    </div>
  )
}
export default NotFound