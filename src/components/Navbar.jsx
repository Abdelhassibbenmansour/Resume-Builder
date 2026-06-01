import { Logo } from "../images"
import { useState } from "react"
import clsx from "clsx"
import { navLinks } from "../data/data"
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
    const [link, setLink] = useState("Home");
    const [menu, setMenu] = useState(false);
    return (
        <div className="container relative flex justify-between items-center">
            <div className="w-[180px] h-[56px] max-sm:w-[110px] max-sm:h-[36px] cursor-pointer">
                <img src={Logo} alt="Logo" className="w-full h-full" />
            </div>
            <div className="flex items-center md:space-x-6 lg:space-x-14 max-md:hidden">
                {navLinks.map((item, index) => {
                    return (
                        <div key={index} onClick={() => setLink(item.link)} className={clsx(link === item.link ? "text-[#EB5757]" : '', 'cursor-pointer transition duration-300 hover:text-[#EB5757]')} >{item.link}</div>
                    )
                })}
            </div>
            <div className="hidden! md:flex! w-[180px]  justify-center items-center button">Get Started</div>
            <div className={clsx("md:hidden text-3xl z-20", menu ? "text-white" : "")} onClick={() => setMenu((prev) => (!prev))}>{menu ? <IoClose /> : <IoMenu />}</div>
            {menu && (
                <div className="absolute top-0 left-0 z-10 w-full min-h-screen bg-[#1E1E1E]/90 flex py-40  justify-center">
                    <div className="flex flex-col items-center space-y-8 text-white text-2xl">
                        {navLinks.map((item, index) => {
                            return (
                                <div key={index} onClick={() => { setLink(item.link); setMenu(false); }} className={clsx(link === item.link ? "text-[#EB5757]" : '', 'cursor-pointer transition duration-300 hover:text-[#EB5757]')} >{item.link}</div>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}
export default Navbar
