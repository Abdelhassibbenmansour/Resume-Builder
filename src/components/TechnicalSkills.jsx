import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSkill } from "../redux/infos";
import { setPage } from "../redux/links";

const skills = [
    "JavaScript", "TypeScript", "React", "Vue", "Angular",
    "Node.js", "Python", "Java", "C++", "C#",
    "PHP", "Ruby", "Swift", "Kotlin", "Go",
    "Rust", "SQL", "MongoDB", "GraphQL", "Docker",
];

const TechnicalSkills = () => {
    const dispatch = useDispatch();
    const { skill } = useSelector((s) => s.infos);

    return (
        <form action="" className="py-2 w-full md:w-auto max-w-full">
            <div className="label">Skill</div>
            <select
                name="skill"
                id="skill"
                className="input"
                value={skill}
                onChange={(e) => dispatch(setSkill(e.target.value))}
            >
                <option value="">Select a skill</option>
                {skills.map((s) => (
                    <option key={s} value={s} className="option">{s}</option>
                ))}
            </select>
            <Link to="/resume/Education">
                <button type="button" className="form-button" onClick={() => dispatch(setPage('Education'))}>Next</button>
            </Link>
        </form>
    );
};

export default TechnicalSkills;