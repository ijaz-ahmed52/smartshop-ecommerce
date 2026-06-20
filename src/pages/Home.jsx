import { useState } from "react"
import Category from "../components/CategoryFilter"
import FeaturedProducts from "../components/FeatureProducts"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"

const Home = () => {
    const [activeCat, setActiveCat] = useState("All");
    const [searchTerm , setSearchTerm] = useState("")

    return(
        <div>
            <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Hero/>
            <Category activeCat={activeCat} setActiveCat={setActiveCat} />
            <FeaturedProducts activeCat={activeCat} searchTerm={searchTerm}/>
            <Footer/>
        </div>
    )
}
export default Home