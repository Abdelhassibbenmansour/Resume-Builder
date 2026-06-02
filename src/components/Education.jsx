import { Link } from "react-router-dom"

const Education = () => {
    return (
        <form action="" className="py-2 w-full md:w-auto max-w-full">
            <div className="label">School Name</div>
            <input type="text" placeholder="e.g University of Lagos" className="input" />
            <div className="label">School Location</div>
            <input type="email" placeholder="e.g Lagos" className="input" />
            <div className="label">Degree/Program</div>
            <input type="text" placeholder="" className="input" />
            <div className="label">Field of Study</div>
            <input type="text" placeholder="" className="input" />
            <div className="label">Graduation Month</div>
            <select name="skill" id="skill" className="input">
                <option value="">Select</option>
                <option value="Skill 01">Skill 01</option>
            </select>
            <div className="label">Graduation Year</div>
            <select name="skill" id="skill" className="input">
                <option value="">Select</option>
                <option value="Skill 01">Skill 01</option>
            </select>
            <Link to="/ContactInformation" >
                <button type="button" className="form-button">Next</button>
            </Link>
        </form>
    )
}

export default Education