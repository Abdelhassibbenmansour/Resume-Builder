import { Navbar, Intro, Features, Join, About, Footer } from "../components"

const LandingPage = () => {
    return (
        <div className="font-poppins">
            <Navbar />
            <div className="w-full h-0.5 bg-[#E4E7EB]" />
            <Intro />
            <Features />
            <Join />
            <About />
            <div className="w-full h-0.5 bg-[#E4E7EB] mb-16" />
            <Footer />
        </div>
    )
}

export default LandingPage