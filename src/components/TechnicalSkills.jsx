import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const skills = [
    "JavaScript", "TypeScript", "React", "Vue", "Angular",
    "Node.js", "Python", "Java", "C++", "C#",
    "PHP", "Ruby", "Swift", "Kotlin", "Go",
    "Rust", "SQL", "MongoDB", "GraphQL", "Docker",
];

const TechnicalSkills = () => {
    const { skill, setSkill, setPage } = useContext(AppContext);

    return (
        <form action="" className="py-2 w-full md:w-auto max-w-full">
            <div className="label">Skill</div>
            <select
                name="skill"
                id="skill"
                className="input"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
            >
                <option value="">Select a skill</option>
                {skills.map((s) => (
                    <option key={s} value={s} className="option">{s}</option>
                ))}
            </select>
            <Link to="/resume/Certification">
                <button type="button" className="form-button" onClick={() => setPage('Certification')}>Next</button>
            </Link>
        </form>
    );
};

export default TechnicalSkills;