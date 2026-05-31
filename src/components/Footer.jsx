import { Facebook, Instagram, Twitter, Linkedin, Logo } from "../images"
import { footerLinks } from "../data/data"

const Footer = () => {
    return (
        <div className="container flex justify-between">
            <div>
                <div className="mb-24 cursor-pointer">
                    <img src={Logo} alt="Logo" />
                </div>
                <div>
                    <div className="text-lg text-[#000112] mb-6">Updates right to your Inbox</div>
                    <div className="flex space-x-5">
                        <input type="text" placeholder="Email Address" className="text-base text-[#404653] w-[320px] h-[54px] pl-4 border border-[#CCCCCC] rounded-xl outline-none focus:border-[#EB5757]" />
                        <button type="button" className="button w-[130px] h-[54px]">Subscribe</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-between space-x-10 text-lg">
                    {footerLinks.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-col">
                                <div className="mb-4 text-[#000112]">{item.title}</div>
                                {item.links.map((link, i) => {
                                    return (
                                        <div key={i} className="text-[#404653] mb-4 cursor-pointer transition duration-300 hover:text-[#EB5757]">{link.label}</div>
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
    )
}

export default Footer