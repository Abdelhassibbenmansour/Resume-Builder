import { Desktop } from "../images"

const Join = () => {
    return (
        <div className="container flex justify-between items-center my-14 relative">
            <div className="absolute w-[calc(100%-2rem)] h-[237px] bg-[#0073E6]/10 -bottom-4 max-sm:h-[170px] left-4 -z-10" />
            <div className="w-full max-w-[573px] lg:pl-12">
                <div className="text-[#000112] max-sm:text-4xl text-6xl mb-6 md:leading-[80px]">Join the<br className="max-sm:none" /> ceVBuilder family</div>
                <div className="w-full max-w-[346px] h-auto lg:hidden mb-6">
                    <img src={Desktop} alt="Desktop" className="w-full" />
                </div>
                <p className="text-[#404653] text-lg mb-4">We're thrilled to welcome you to the ceVBuilder family, where your journey to crafting<br className="max-sm:hidden" /> exceptional resumes begins!</p>
                <div className="button w-full max-w-[334px] max-sm:max-w-[223px]">Join ceVBuilder</div>
            </div>
            <div className="max-lg:hidden w-full max-w-[506px] h-[390px]">
                <img src={Desktop} alt="Desktop" className="w-full" />
            </div>
        </div>
    )
}

export default Join