import { useState } from "react";
import { AppContext } from "./AppContext";

export const AppProvider = ({ children }) => {
    // Page state
    const [page, setPage] = useState("PersonalInfo");

    // Infos states
    const [fullName, setFullName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [profession, setProfession] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [company, setCompany] = useState("");
    const [role, setRole] = useState("");
    const [workAddress, setWorkAddress] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [skill, setSkill] = useState("");
    const [schoolName, setSchoolName] = useState("");
    const [degree, setDegree] = useState("");
    const [studyField, setStudyField] = useState("");
    const [graduationDate, setGraduationDate] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [linkedinLink, setLinkedinLink] = useState("");
    const [twitterLink, setTwitterLink] = useState("");
    const [githubLink, setGithubLink] = useState("");
    const [portfolioLink, setPortfolioLink] = useState("");
    const [certifications, setCertifications] = useState("");

    const value = {
        page, setPage,
        fullName, setFullName,
        emailAddress, setEmailAddress,
        profession, setProfession,
        address, setAddress,
        city, setCity,
        state, setState,
        company, setCompany,
        role, setRole,
        workAddress, setWorkAddress,
        startDate, setStartDate,
        endDate, setEndDate,
        skill, setSkill,
        schoolName, setSchoolName,
        degree, setDegree,
        studyField, setStudyField,
        graduationDate, setGraduationDate,
        phoneNumber, setPhoneNumber,
        linkedinLink, setLinkedinLink,
        twitterLink, setTwitterLink,
        githubLink, setGithubLink,
        portfolioLink, setPortfolioLink,
        certifications, setCertifications,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};
