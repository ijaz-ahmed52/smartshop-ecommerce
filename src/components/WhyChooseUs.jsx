import { FaShippingFast, FaShieldAlt, FaHeadset } from "react-icons/fa"

const WhyChooseUs = () => {
    const features = [
        {
            icon: <FaShippingFast className="text-4xl text-blue-800" />,
            title: "Fast Delivery",
            desc: "Get your orders delivered quickly and safely to your doorstep. We partner with trusted couriers for on-time shipping across Pakistan."
        },
        {
            icon: <FaShieldAlt className="text-4xl text-blue-800" />,
            title: "100% Authentic",
            desc: "Every product is verified for quality and authenticity. Shop with confidence knowing you’ll always receive genuine items."
        },
        {
            icon: <FaHeadset className="text-4xl text-blue-800" />,
            title: "24/7 Support",
            desc: "Our customer support team is always here to help. Got a question or issue? We respond fast and solve it for you."
        }
    ]

    return(
        <section className="py-16 md:py-20 px-6 md:px-12 bg-white">
            {/* Heading + Intro */}
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  Shopping with SmartShop means more than just buying products. 
                  We focus on trust, speed, and service to make your online shopping experience stress-free.
                </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {features.map((item, index) => (
                    <div 
                        key={index}
                        className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
                    >
                        <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                            {item.icon}
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                        
                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default WhyChooseUs