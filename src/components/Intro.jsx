import { Cv } from "../images"

const Intro = () => {
    return (
        <div className="max-sm:py-20 py-6  max-sm:mb-0 mb-14">
            <div className="container flex max-lg:flex-col max-lg:space-y-20 items-center justify-between">
                <div className="max-w-[527px]">
                    <div className="text-[#000112] text-6xl max-sm:text-4xl font-bold mb-6">
                        <span className="text-[#EB5757] text-8xl max-sm:text-6xl" >Create</span><br />a career in tech.
                    </div>
                    <p className="text-[#404653] text-xl max-sm:text-sm mb-10">The template includes carefully structured sections for personal information, summary or objective, work experience, education, skills, projects, certifications, and more. You can easily customize these sections to fit your unique background.</p>
                    <div className="button w-[334px] max-sm:w-[223px] font-nunito ">Create Resume for free</div>
                </div>
                <div className="w-[574px] h-[750px] max-sm:w-[300px] max-sm:h-[463px] overflow-hidden">
                    <img src={Cv} alt="Cv image" className="w-full" />
                </div>
            </div>
        </div>
    )
}
export default Intro
