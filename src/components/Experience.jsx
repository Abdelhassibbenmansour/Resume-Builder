import { Link } from "react-router-dom"

const Experience = () => {
    return (
        <form action="" className="py-2 w-full md:w-auto max-w-full">
            <div className="label">Company</div>
            <input type="text" placeholder="E.g Google" className="input" />
            <div className="label">Employer</div>
            <input type="email" placeholder="Employer’s name" className="input" />
            <div className="label">Role</div>
            <input type="text" placeholder="e.g Software Engineer" className="input" />
            <div className="label" >Address</div>
            <input type="text" placeholder="NG 1112 oreville" className="input" />
            <div className="flex flex-col md:flex-row md:space-x-1">
                <div className="w-full md:w-auto">
                    <div className="label">Start Date</div>
                    <input type="text" placeholder="MM / YY" className="min-input" />
                </div>
                <div className="w-full md:w-auto">
                    <div className="label">Finish Date</div>
                    <input type="text" placeholder="MM / YY" className="min-input" />
                </div>
            </div>
            <div className="flex space-x-4 items-center">
                <input type="checkbox" id="work" name="work" className="checkbox" />
                <label htmlFor="work" className="text-[#404653] cursor-pointer">Currently work here</label>
            </div>
            <Link to="/TechnicalSkills">
                <button type="button" className="form-button">Next</button>
            </Link>
        </form>
    )
}

export default Experience