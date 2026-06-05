import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    setSchoolName,
    setSchoolLocation,
    setDegree,
    setStudyField,
    setGraduationMonth,
    setGraduationYear,
} from "../redux/infos";
import { setPage } from "../redux/links";

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
];

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 50 }, (_, i) => String(currentYear - i));

const Education = () => {
    const dispatch = useDispatch();
    const { schoolName, schoolLocation, degree, studyField, graduationMonth, graduationYear } =
        useSelector((s) => s.infos);

    return (
        <form action="" className="py-2 w-full md:w-auto max-w-full">
            <div className="label">School Name</div>
            <input
                type="text"
                placeholder="e.g University of Lagos"
                className="input"
                value={schoolName}
                onChange={(e) => dispatch(setSchoolName(e.target.value))}
            />
            <div className="label">School Location</div>
            <input
                type="text"
                placeholder="e.g Lagos"
                className="input"
                value={schoolLocation}
                onChange={(e) => dispatch(setSchoolLocation(e.target.value))}
            />
            <div className="label">Degree / Program</div>
            <input
                type="text"
                placeholder="e.g Bachelor of Science"
                className="input"
                value={degree}
                onChange={(e) => dispatch(setDegree(e.target.value))}
            />
            <div className="label">Field of Study</div>
            <input
                type="text"
                placeholder="e.g Computer Science"
                className="input"
                value={studyField}
                onChange={(e) => dispatch(setStudyField(e.target.value))}
            />
            <div className="label">Graduation Month</div>
            <select
                name="graduationMonth"
                id="graduationMonth"
                className="input"
                value={graduationMonth}
                onChange={(e) => dispatch(setGraduationMonth(e.target.value))}
            >
                <option value="">Select</option>
                {months.map((m) => (
                    <option key={m} value={m}>{m}</option>
                ))}
            </select>
            <div className="label">Graduation Year</div>
            <select
                name="graduationYear"
                id="graduationYear"
                className="input"
                value={graduationYear}
                onChange={(e) => dispatch(setGraduationYear(e.target.value))}
            >
                <option value="">Select</option>
                {years.map((y) => (
                    <option key={y} value={y}>{y}</option>
                ))}
            </select>
            <Link to="/resume/ContactInformation">
                <button type="button" className="form-button" onClick={() => dispatch(setPage('ContactInformation'))}>Next</button>
            </Link>
        </form>
    );
};

export default Education;