import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";



const Education = () => {
    const { schoolName, setSchoolName, degree, setDegree, studyField, setStudyField, graduationDate, setGraduationDate, setPage } = useContext(AppContext);

    return (
        <form action="" className="py-2 w-full md:w-auto max-w-full">
            <div className="label">School Name</div>
            <input
                type="text"
                placeholder="e.g University of Lagos"
                className="input"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
            />
            <div className="label">Degree / Program</div>
            <input
                type="text"
                placeholder="e.g Bachelor of Science"
                className="input"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
            />
            <div className="label">Field of Study</div>
            <input
                type="text"
                placeholder="e.g Computer Science"
                className="input"
                value={studyField}
                onChange={(e) => setStudyField(e.target.value)}
            />
            <div className="label">Graduation Date</div>
            <input
                type="date"
                className="input"
                value={graduationDate}
                onChange={(e) => setGraduationDate(e.target.value)}
            />
            <Link to="/resume/ContactInformation">
                <button type="button" className="form-button" onClick={() => setPage('ContactInformation')}>Next</button>
            </Link>
        </form>
    );
};

export default Education;