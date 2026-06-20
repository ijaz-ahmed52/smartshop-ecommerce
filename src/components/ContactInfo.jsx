
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa"

const ContactInfo = () => {
  const info = [
    {
      icon: <FaMapMarkerAlt className="text-2xl text-blue-800" />,
      title: "Visit Us",
      detail: "123 Main Street, Peshawar, Khyber Pakhtunkhwa, Pakistan"
    },
    {
      icon: <FaPhoneAlt className="text-2xl text-blue-800" />,
      title: "Call Us",
      detail: "+92 300 1234567"
    },
    {
      icon: <FaEnvelope className="text-2xl text-blue-800" />,
      title: "Email Us",
      detail: "support@smartshop.pk"
    },
    {
      icon: <FaClock className="text-2xl text-blue-800" />,
      title: "Working Hours",
      detail: "Mon - Sat: 9AM - 8PM"
    }
  ]

  return (
    <section className="py-16 md:py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Contact Information</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {info.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default ContactInfo