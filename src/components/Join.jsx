import { Desktop } from "../images"

const Join = () => {
    return (
        <div className="container flex justify-between items-center my-14 relative">
            <div className="absolute w-full h-[237px] bg-[#0073E6]/10 -bottom-12 -z-10" />
            <div className="w-[573px] pl-12">
                <div className="text-[#000112] text-6xl mb-6 leading-[80px]">Join the<br /> ceVBuilder family</div>
                <p className="text-[#404653] text-xl mb-10">We're thrilled to welcome you to the ceVBuilder family, where your journey to crafting<br /> exceptional resumes begins!</p>
                <div className="button w-[334px]">Join ceVBuilder</div>
            </div>
            <div className="w-[506px] h-[390pxs]">
                <img src={Desktop} alt="Desktop" className="w-full" />
            </div>
        </div>
    )
}

export default Join