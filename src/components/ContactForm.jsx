import { useState } from "react"

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
    alert("Message sent! We’ll contact you soon.")
    setForm({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section className="py-16 md:py-20 px-6 md:px-12 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Send us a Message</h2>
        <p className="text-center text-gray-600 mb-10">Fill the form below and we’ll respond within 24 hours</p>

        <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-2xl shadow-lg space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({...form, name: e.target.value})}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-800 focus:ring-2 focus:ring-blue-200 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({...form, email: e.target.value})}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-800 focus:ring-2 focus:ring-blue-200 outline-none"
            />
          </div>
          
          <input
            type="text"
            placeholder="Subject"
            value={form.subject}
            onChange={(e) => setForm({...form, subject: e.target.value})}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-800 focus:ring-2 focus:ring-blue-200 outline-none"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={(e) => setForm({...form, message: e.target.value})}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-800 focus:ring-2 focus:ring-blue-200 outline-none resize-none"
          />

          <button 
            type="submit"
            className="w-full bg-blue-800 hover:bg-blue-900 text-white py-3 rounded-lg font-semibold text-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
export default ContactForm