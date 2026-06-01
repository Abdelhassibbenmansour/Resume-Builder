import { Facebook, Instagram, Twitter, Linkedin, Logo } from "../images"
import { footerLinks } from "../data/data"

const Footer = () => {
    return (
        <div className="container">
            <div className="flex justify-between max-sm:flex-col">
                <div className="max-sm:mb-16">
                    <div className="max-sm:mb-16 mb-24 cursor-pointer max-sm:w-[150px] max-sm:h-[50px] mx-auto">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div>
                        <div className="text-lg max-sm:text-base text-[#000112] mb-6">Updates right to your Inbox</div>
                        <div className="flex space-x-5">
                            <input type="text" placeholder="Email Address" className="text-base text-[#404653] w-[320px] max-sm:w-[236px] h-[54px] pl-4 border border-[#CCCCCC] rounded-xl outline-none focus:border-[#EB5757]" />
                            <button type="button" className="button w-[130px] max-sm:w-[100px] h-[54px]">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between ">
                        {footerLinks.map((item, index) => {
                            return (
                                <div key={index} className="flex flex-col">
                                    <div className="mb-4 text-[#000112] text-lg max-sm:text-sm">{item.title}</div>
                                    {item.links.map((link, i) => {
                                        return (
                                            <div key={i} className="text-[#404653] mb-4 cursor-pointer text-lg max-sm:text-xs transition duration-300 hover:text-[#EB5757]">{link.label}</div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                    <div className="flex space-x-4 justify-center mt-12">
                        <img src={Facebook} alt="Facebook logo" className="cursor-pointer" />
                        <img src={Linkedin} alt="Linkedin logo" className="cursor-pointer" />
                        <img src={Instagram} alt="Instagram Logo" className="cursor-pointer" />
                        <img src={Twitter} alt="Twitter logo" className="cursor-pointer" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center md:space-x-10 mt-8 md:mt-26 cursor-pointer font-bold text-[#000112]">
                <div><span className="mr-4">&copy;</span> ceVBuilder 2026</div>
                <div className="max-sm:hidden">Privacy Policy</div>
                <div className="max-sm:hidden">Terms Of Use</div>
            </div>
        </div>
    )
}

export default Footer