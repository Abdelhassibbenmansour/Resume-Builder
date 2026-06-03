import { Logo } from "../images"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="container relative flex justify-between items-center">
            <div className="w-[180px] h-[56px] max-sm:w-[110px] max-sm:h-[36px] cursor-pointer">
                <img src={Logo} alt="Logo" className="w-full h-full" />
            </div>
            <Link to="/register">
                <div className="w-[180px] max-sm:w-[100px] max-sm:text-xs! justify-center items-center button">Get Started</div>
            </Link>
        </div>
    )
}
export default Navbar
