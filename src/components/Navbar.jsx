import {Logo}  from "../images"
import {useState} from "react"
import clsx from "clsx"

const Links = [
    {link : "Home"},
    {link : "Template"},
    {link : "Jobs"},
    {link : "About"}
];

const Navbar = () => {
    const [link,setLink] = useState("Home");
    return (
        <div className="container flex justify-between items-center">
            <div className="w-[180px] h-[56px] cursor-pointer">
                <img src={Logo} alt="Logo" className="w-full h-full" />
            </div>
            <div className="flex items-center space-x-10">
                {Links.map((item,index) => {
                    return (
                        <div key={index} onClick={() => setLink(item.link)} className={clsx(link == item.link ? "text-[#EB5757]" : '','cursor-pointer transition duration-300 hover:text-[#EB5757]' )} >{item.link}</div>
                    )
                })}
            </div>
            <div className="w-[180px] h-[56px] cursor-pointer bg-[#EB5757] text-white text-lg rounded-xl flex justify-center items-center hover:text-[#EB5757] transition duration-500 hover:bg-white hover:border hover:border-[#EB5757] transition ">Get Started</div>
        </div>
    )
}
export default Navbar
