import { Logo } from "../images"
import { useState } from "react"
import clsx from "clsx"
import { navLinks } from "../data/data"
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
    const [link, setLink] = useState("Home");
    const [menu, setMenu] = useState(false)
    return (
        <div className="container flex justify-between items-center">
            <div className="w-[180px] h-[56px] max-sm:w-[110px] max-sm:h-[36px] cursor-pointer">
                <img src={Logo} alt="Logo" className="w-full h-full" />
            </div>
            <div className="flex items-center space-x-14 max-sm:hidden">
                {navLinks.map((item, index) => {
                    return (
                        <div key={index} onClick={() => setLink(item.link)} className={clsx(link === item.link ? "text-[#EB5757]" : '', 'cursor-pointer transition duration-300 hover:text-[#EB5757]')} >{item.link}</div>
                    )
                })}
            </div>
            <div className="hidden! md:block w-[180px]  button ">Get Started</div>
            <div className="md:hidden" onClick={() => setMenu((prev) => (!prev))}>{menu ? <IoClose /> : <IoMenu />}</div>
        </div>
    )
}
export default Navbar
