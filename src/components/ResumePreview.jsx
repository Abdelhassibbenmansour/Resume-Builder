import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Section = ({ title, children }) => (
    <div>
        <h3 className="text-sm font-semibold uppercase tracking-widest text-[#EB5757] border-b border-[#EB5757]/30 pb-1 mb-3">
            {title}
        </h3>
        <div className="space-y-1">
            {children}
        </div>
    </div>
);

const Field = ({ label, value }) => {
    if (!value) return null;
    return (
        <div className="flex gap-2 text-sm">
            <span className="font-medium text-[#1a1a2e] min-w-[110px]">{label}:</span>
            <span className="text-[#404653]">{value}</span>
        </div>
    );
};

const ResumePreview = () => {
    const {
        fullName, emailAddress, profession, address, city, state,
        company, role, workAddress, startDate, endDate,
        skill,
        schoolName, degree, studyField, graduationDate,
        phoneNumber, linkedinLink, twitterLink, githubLink, portfolioLink,
        certifications,
    } = useContext(AppContext);

    return (
        <div className="w-[580px] h-full overflow-y-auto bg-white rounded-lg shadow-md p-6 text-[#404653] space-y-6">

            <Section title="Personal Information">
                <Field label="Full Name" value={fullName} />
                <Field label="Email" value={emailAddress} />
                <Field label="Profession" value={profession} />
                <Field label="Address" value={address} />
                <Field label="City" value={city} />
                <Field label="State" value={state} />
            </Section>

            <Section title="Experience">
                <Field label="Company" value={company} />
                <Field label="Role" value={role} />
                <Field label="Work Address" value={workAddress} />
                <Field label="Start Date" value={startDate} />
                <Field label="End Date" value={endDate} />
            </Section>

            <Section title="Technical Skills">
                <Field label="Skill" value={skill} />
            </Section>

            <Section title="Education">
                <Field label="School Name" value={schoolName} />
                <Field label="Degree" value={degree} />
                <Field label="Field of Study" value={studyField} />
                <Field label="Graduation date" value={graduationDate} />
            </Section>

            <Section title="Contact Information">
                <Field label="Phone" value={phoneNumber} />
                <Field label="LinkedIn" value={linkedinLink} />
                <Field label="Twitter" value={twitterLink} />
                <Field label="GitHub" value={githubLink} />
                <Field label="Portfolio" value={portfolioLink} />
            </Section>

            {certifications && (
                <Section title="Certifications">
                    <Field label="Certifications" value={certifications} />
                </Section>
            )}
        </div>
    );
};

export default ResumePreview;
