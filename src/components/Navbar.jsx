import { Logo } from "../images"
import { Link } from "react-router-dom"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"


const Navbar = () => {
    useGSAP(() => {
        gsap.from(".image", {
            x: -100,
            opacity: 0,
            ease: "power1.out",
            duration: 1,
        });
        gsap.from(".link", {
            x: 100,
            opacity: 0,
            ease: "power1.out",
            duration: 1,
        });
    }, []);
    return (
        <div className="container relative flex justify-between items-center">
            <div className="w-[180px] h-[56px] max-sm:w-[110px] max-sm:h-[36px] cursor-pointer image">
                <img src={Logo} alt="Logo" className="w-full h-full" />
            </div>
            <Link to="/register" className="link">
                <div className="w-[180px] max-sm:w-[100px] max-sm:text-xs! justify-center items-center button">Get Started</div>
            </Link>
        </div>
    )
}
export default Navbar
