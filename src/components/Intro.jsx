import { useGSAP } from "@gsap/react"
import { Cv } from "../images"
import gsap from "gsap"
import SplitText from "gsap/SplitText.js"


const Intro = () => {
    useGSAP(() => {
        const title = SplitText.create(".title", { type: "words" });
        const lines = SplitText.create('.lines', { type: "lines" })

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(title.words, {
            opacity: 0,
            y: 80,
            duration: 1,
            stagger: 0.08,
        })
            .from(lines.lines, {
                opacity: 0,
                y: 60,
                duration: 0.9,
                stagger: 0.15,
            }, "-=0.5")
            .from(".cv", {
                opacity: 0,
                x: 100,
                duration: 1,
            }, "-=1");

    }, []);
    return (
        <div className="max-sm:py-10 py-6  max-sm:mb-0 mb-14 overflow-hidden">
            <div className="container flex max-lg:flex-col max-lg:space-y-20 items-center justify-between">
                <div className="max-w-[527px]">
                    <div className="text-[#000112] text-6xl max-sm:text-4xl font-bold mb-6 title">
                        <span className="text-[#EB5757] text-8xl max-sm:text-6xl" >Create</span><br />a career in tech.
                    </div>
                    <p className="text-[#404653] text-xl max-sm:text-sm mb-10 lines">The template includes carefully structured sections for personal information, summary or objective, work experience, education, skills, projects, certifications, and more. You can easily customize these sections to fit your unique background.</p>
                    <div className="button w-[334px] max-sm:w-[223px] font-nunito create ">Create Resume for free</div>
                </div>
                <div className="w-[574px] h-[750px] max-sm:w-[300px] max-sm:h-[463px] overflow-hidden cv">
                    <img src={Cv} alt="Cv image" className="w-full" />
                </div>
            </div>
        </div>
    )
}
export default Intro
