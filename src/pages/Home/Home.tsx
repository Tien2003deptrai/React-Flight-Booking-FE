import About from "~/components/About/About"
import Banner from "~/components/Banner/Banner"
import Blog from "~/components/Blog/Blog"
import Features from "~/components/Features/Features"
import Hero from "~/components/Hero/Hero"
import Plans from "~/components/Plans/Plans"


const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            <About />
            <Plans />
            <Banner />
            <Blog />
        </>
    )
}

export default Home