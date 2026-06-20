import { FaBullseye } from "react-icons/fa"

const Mission = () => {
    return(
        <section className="py-16 md:py-20 px-6 md:px-12 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  Our mission is to make online shopping accessible, convenient, and enjoyable for everyone. 
                  We strive to provide quality products, competitive prices, and a seamless shopping experience 
                  that customers can trust.
                </p>
            </div>

            {/* Mission Card */}
            <div className="flex justify-center">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center max-w-md">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaBullseye className="text-4xl text-blue-800" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer First</h3>
                
                <p className="text-gray-600 leading-relaxed">
                  To make quality shopping accessible to everyone by delivering authentic products, 
                  fair prices, and reliable service. We carefully select every item so you can shop 
                  online with confidence and ease.
                </p>
              </div>
            </div>
        </section>
    )
}
export default Mission