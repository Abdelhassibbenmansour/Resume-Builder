import { Cv } from "../images"

const Intro = () => {
    return (
        <div className="py-6 mb-14">
            <div className="container flex items-center justify-between">
                <div className="max-w-[527px]">
                    <div className="text-[#000112] text-6xl font-bold mb-6">
                        <span className="text-[#EB5757] text-8xl" >Create</span><br />a career in tech.
                    </div>
                    <p className="text-[#404653] text-xl mb-10">The template includes carefully structured sections for personal information, summary or objective, work experience, education, skills, projects, certifications, and more. You can easily customize these sections to fit your unique background.</p>
                    <div className="button w-[334px] font-nunito text-xl">Create Resume for free</div>
                </div>
                <div className="w-[574px] h-[750px] overflow-hidden">
                    <img src={Cv} alt="Cv image" className="w-full" />
                </div>
            </div>
        </div>
    )
}
export default Intro
