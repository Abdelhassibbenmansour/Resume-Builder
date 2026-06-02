import { Link } from "react-router-dom"

const TechnicalSkills = () => {
    return (
        <form action="" className="py-2 w-full md:w-auto max-w-full">
            <div className="label">Skill 01</div>
            <select name="skill" id="skill" className="input">
                <option value="">Select a skill</option>
                <option value="Skill 01" className="option">Skill 01</option>
                <option value="Skill 01" className="option">Skill 01</option>
                <option value="Skill 01" className="option">Skill 01</option>
                <option value="Skill 01" className="option">Skill 01</option>
                <option value="Skill 01" className="option">Skill 01</option>
                <option value="Skill 01" className="option">Skill 01</option>
                <option value="Skill 01" className="option">Skill 01</option>
                <option value="Skill 01" className="option">Skill 01</option>
                <option value="Skill 01" className="option">Skill 01</option>
                <option value="Skill 01" className="option">Skill 01</option>
            </select>
            <Link to="/Education">
                <button type="form-button" className="form-button">Next</button>
            </Link>
        </form>
    )
}

export default TechnicalSkills