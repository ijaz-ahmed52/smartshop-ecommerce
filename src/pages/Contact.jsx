import ContactForm from "../components/ContactForm"
import ContactHero from "../components/ContactHero"
import ContactInfo from "../components/ContactInfo"
import Footer from "../components/Footer"
import Header from "../components/Header"
const Contact = () => {
    return(
        <div>
            <Header/>
            <ContactHero/>
            <ContactInfo/>
            <ContactForm/>
            <Footer/>
        </div>
    )
}
export default Contact