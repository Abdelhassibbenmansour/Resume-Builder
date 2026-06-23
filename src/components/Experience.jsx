import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Experience = () => {
    const { company, setCompany, role, setRole, workAddress, setWorkAddress, startDate, setStartDate, endDate, setEndDate, setPage } = useContext(AppContext);
    return (
        <form action="" className="py-2 w-full md:w-auto max-w-full">
            <div className="label">Company</div>
            <input
                type="text"
                placeholder="E.g Google"
                className="input"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
            />

            <div className="label">Role</div>
            <input
                type="text"
                placeholder="e.g Software Engineer"
                className="input"
                value={role}
                onChange={(e) => setRole(e.target.value)}
            />
            <div className="label">Address</div>
            <input
                type="text"
                placeholder="NG 1112 oreville"
                className="input"
                value={workAddress}
                onChange={(e) => setWorkAddress(e.target.value)}
            />
            <div className="flex flex-col md:flex-row md:space-x-1">
                <div className="w-full md:w-auto">
                    <div className="label">Start Date</div>
                    <input
                        type="text"
                        placeholder="MM / YY"
                        className="min-input"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>
                <div className="w-full md:w-auto">
                    <div className="label">Finish Date</div>
                    <input
                        type="text"
                        placeholder="MM / YY"
                        className="min-input"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex space-x-4 items-center">
                <input type="checkbox" id="work" name="work" className="checkbox" />
                <label htmlFor="work" className="text-[#404653] cursor-pointer">Currently work here</label>
            </div>
            <Link to="/resume/TechnicalSkills">
                <button type="button" className="form-button" onClick={() => setPage('TechnicalSkills')}>Next</button>
            </Link>
        </form>
    );
};

export default Experience;