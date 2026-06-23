import { Link, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Certification, ResumeNavbar } from "../components"
import { GoPerson } from "react-icons/go";
import { LuUserPen } from "react-icons/lu";
import { LiaChartBarSolid } from "react-icons/lia";
import { RiGraduationCapLine } from "react-icons/ri";
import { PiUserList } from "react-icons/pi";
import { BiMenuAltLeft, BiMenu } from "react-icons/bi";
import { ResumePreview } from "../components";
import clsx from "clsx";
import { ContactInformation, Experience, PersonalInfo, TechnicalSkills } from "../components";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useLocation } from "react-router-dom";

const resumeLinks = [
    {
        title: "Personal Information",
        icon: <GoPerson />,
        destination: "PersonalInfo",
        element: <PersonalInfo />,
    },
    {
        title: "Experience",
        icon: <LuUserPen />,
        destination: "Experience",
        element: <Experience />,
    },
    {
        title: "Technical Skills",
        icon: <LiaChartBarSolid />,
        destination: "TechnicalSkills",
        element: <TechnicalSkills />,
    },
    {
        title: "Certification",
        icon: <RiGraduationCapLine />,
        destination: "Certification",
        element: <Certification />,
    },
    {
        title: "Contact Information",
        icon: <PiUserList />,
        destination: "ContactInformation",
        element: <ContactInformation />,
    },
];

const Resume = () => {
    const [show, setShow] = useState(window.innerWidth >= 1024);
    const { page, setPage } = useContext(AppContext);
    const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case "/Resume/PersonalInfo": setPage('PersonalInfo'); break;
            case "/resume/Experience": setPage("Experience"); break;
            case "/resume/TechnicalSkills": setPage("TechnicalSkills"); break;
            case "/resume/Education": setPage("Certification"); break;
            case "/resume/ContactInformation": setPage("ContactInformation"); break;
            default: setPage('PersonalInfo'); break;
        }
    }, [])
    return (
        <div className="min-h-screen flex flex-col">
            <ResumeNavbar />
            <div className="flex flex-1 overflow-hidden relative">
                <div className={clsx("h-full bg-white z-20 overflow-y-auto transition-[width] duration-300 left-0 top-0 md:relative", show ? "absolute w-full md:w-[304px]" : "absolute w-[80px] md:w-[120px]")}>
                    <div className={clsx("py-4 px-2 mb-3 flex text-3xl", show ? "justify-end pr-6 md:pr-2" : "justify-center md:justify-start md:pl-10")}>
                        {show ? <BiMenuAltLeft onClick={() => setShow((prev) => (!prev))} className="cursor-pointer" /> : <BiMenu onClick={() => setShow((prev) => (!prev))} className="cursor-pointer" />}
                    </div>
                    <div className="flex flex-col ">
                        {resumeLinks.map((item, index) => {
                            return (
                                <Link key={index} to={`/resume/${item.destination}`} onClick={() => {
                                    setPage(item.destination);
                                    if (window.innerWidth < 768) {
                                        setShow(false);
                                    }
                                }}>
                                    <div className={clsx("flex space-x-4 py-4 text-xl items-center transition duration-150 hover:bg-[#EB5757]/20", show ? "pl-10" : "justify-center md:justify-start md:pl-10", page === item.destination ? "bg-[#EB5757]/20" : "")}>
                                        {item.icon}
                                        {show && (
                                            <div className="text-[#404653] text-base whitespace-nowrap">{item.title}</div>
                                        )}
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <div className={clsx("flex flex-1 px-4 md:px-8 pt-2 pb-10 bg-[#E4E7EB] ml-[80px] md:ml-0 overflow-y-auto w-full", show ? "space-x-4 md:space-x-10" : "space-x-4 md:space-x-30")} >
                    <Routes>
                        <Route index element={<Navigate to="PersonalInfo" replace />} />
                        {resumeLinks.map((item, index) => {
                            return (
                                <Route key={index} path={item.destination} element={item.element} />
                            )
                        })}
                    </Routes>
                    <div className="max-w-[690px] min-h-[820px] max-md:hidden flex-shrink-0">
                        <ResumePreview />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume