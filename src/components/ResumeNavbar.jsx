import { Logo } from "../images"

const ResumeNavbar = () => {
    return (
        <div className="bg-[#E4E7EB] border-b border-[#000112]/10 shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
            <div className="px-6 py-6 md:px-14 md:py-10 max-sm:w-[150px]">
                <img src={Logo} alt="Logo" />
            </div>
        </div>
    )
}

export default ResumeNavbar