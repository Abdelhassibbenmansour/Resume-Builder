import { Desktop } from "../images"

const Join = () => {
    return (
        <div className="container flex justify-between items-center my-14 relative">
            <div className="absolute w-full h-[237px] bg-[#0073E6]/10 -bottom-4 max-sm:w-[360px] max-sm:h-[190px] left-4 -z-10" />
            <div className="w-[573px] lg:pl-12">
                <div className="text-[#000112] max-sm:text-4xl text-6xl mb-6 md:leading-[80px]">Join the<br className="max-sm:none" /> ceVBuilder family</div>
                <div className="w-[346px] h-[267px] md:hidden mb-6">
                    <img src={Desktop} alt="Desktop" className="w-full" />
                </div>
                <p className="text-[#404653] text-lg mb-4">We're thrilled to welcome you to the ceVBuilder family, where your journey to crafting<br className="max-sm:hidden" /> exceptional resumes begins!</p>
                <div className="button max-sm:w-[223px] w-[334px]">Join ceVBuilder</div>
            </div>
            <div className="max-sm:hidden w-[506px] h-[390pxs]">
                <img src={Desktop} alt="Desktop" className="w-full" />
            </div>
        </div>
    )
}

export default Join