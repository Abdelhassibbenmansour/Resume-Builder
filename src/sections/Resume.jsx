import { Link, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ResumeNavbar } from "../components"
import { GoPerson } from "react-icons/go";
import { LuUserPen } from "react-icons/lu";
import { LiaChartBarSolid } from "react-icons/lia";
import { RiGraduationCapLine } from "react-icons/ri";
import { PiUserList, PiCertificateThin } from "react-icons/pi";
import { BiMenuAltLeft, BiMenu } from "react-icons/bi";
import { Cv2 } from "../images";
import clsx from "clsx";
import { Certification, ContactInformation, Education, Experience, PersonalInfo, TechnicalSkills } from "../components";

const resumeLinks = [
    {
        title: "Personal Information",
        icon: <GoPerson />,
        destination: "/PersonalInfo",
        element: <PersonalInfo />,
    },
    {
        title: "Experience",
        icon: <LuUserPen />,
        destination: "/Experience",
        element: <Experience />,
    },
    {
        title: "Technical Skills",
        icon: <LiaChartBarSolid />,
        destination: "/TechnicalSkills",
        element: <TechnicalSkills />,
    },
    {
        title: "Education",
        icon: <RiGraduationCapLine />,
        destination: "/Education",
        element: <Education />,
    },
    {
        title: "Contact Information",
        icon: <PiUserList />,
        destination: "/ContactInformation",
        element: <ContactInformation />,
    },
    {
        title: "Certification",
        icon: <PiCertificateThin />,
        destination: "/Certification",
        element: <Certification />,
    },
];

const Resume = () => {
    const [show, setShow] = useState(true);
    const [page, setPage] = useState("/PersonalInfo")
    return (
        <div className="min-h-screen flex flex-col">
            <ResumeNavbar />
            <div className="flex flex-1 overflow-hidden">
                <div className={clsx("h-full overflow-y-auto transition-[width] duration-300", show ? "w-[304px]" : "w-[120px]")}>
                    <div className={clsx("py-4 px-2 mb-3  flex text-3xl", show ? "justify-end" : "pl-10")}>
                        {show ? <BiMenuAltLeft onClick={() => setShow((prev) => (!prev))} className="cursor-pointer" /> : <BiMenu onClick={() => setShow((prev) => (!prev))} className="cursor-pointer" />}
                    </div>
                    <div className="flex flex-col space-y-4">
                        {resumeLinks.map((item, index) => {
                            return (
                                <Link key={index} to={item.destination} onClick={() => setPage(item.destination)}>
                                    <div className={clsx("flex space-x-4 py-4 pl-10 text-xl items-center transition duration-150 hover:bg-[#EB5757]/20", page === item.destination ? "bg-[#EB5757]/20" : "")}>
                                        {item.icon}
                                        {show && (
                                            <div className="text-[#404653] text-base">{item.title}</div>
                                        )}
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <div className="flex space-x-10 flex-1 px-8 py-10 bg-[#E4E7EB]">
                    <Routes>
                        {resumeLinks.map((item, index) => {
                            return (
                                <Route key={index} path={item.destination} element={item.element} />
                            )
                        })}
                    </Routes>
                    <div className="max-w-[690px] h-[820px]">
                        <img src={Cv2} alt="Resume" className="w-full h-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume