import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    setCompany,
    setEmployer,
    setRole,
    setWorkAddress,
    setStartDate,
    setEndDate,
} from "../redux/infos";
import { setPage } from "../redux/links";

const Experience = () => {
    const dispatch = useDispatch();
    const { company, employer, role, workAddress, startDate, endDate } = useSelector((s) => s.infos);
    return (
        <form action="" className="py-2 w-full md:w-auto max-w-full">
            <div className="label">Company</div>
            <input
                type="text"
                placeholder="E.g Google"
                className="input"
                value={company}
                onChange={(e) => dispatch(setCompany(e.target.value))}
            />
            <div className="label">Employer</div>
            <input
                type="text"
                placeholder="Employer's name"
                className="input"
                value={employer}
                onChange={(e) => dispatch(setEmployer(e.target.value))}
            />
            <div className="label">Role</div>
            <input
                type="text"
                placeholder="e.g Software Engineer"
                className="input"
                value={role}
                onChange={(e) => dispatch(setRole(e.target.value))}
            />
            <div className="label">Address</div>
            <input
                type="text"
                placeholder="NG 1112 oreville"
                className="input"
                value={workAddress}
                onChange={(e) => dispatch(setWorkAddress(e.target.value))}
            />
            <div className="flex flex-col md:flex-row md:space-x-1">
                <div className="w-full md:w-auto">
                    <div className="label">Start Date</div>
                    <input
                        type="text"
                        placeholder="MM / YY"
                        className="min-input"
                        value={startDate}
                        onChange={(e) => dispatch(setStartDate(e.target.value))}
                    />
                </div>
                <div className="w-full md:w-auto">
                    <div className="label">Finish Date</div>
                    <input
                        type="text"
                        placeholder="MM / YY"
                        className="min-input"
                        value={endDate}
                        onChange={(e) => dispatch(setEndDate(e.target.value))}
                    />
                </div>
            </div>
            <div className="flex space-x-4 items-center">
                <input type="checkbox" id="work" name="work" className="checkbox" />
                <label htmlFor="work" className="text-[#404653] cursor-pointer">Currently work here</label>
            </div>
            <Link to="/resume/TechnicalSkills">
                <button type="button" className="form-button" onClick={() => dispatch(setPage('TechnicalSkills'))}>Next</button>
            </Link>
        </form>
    );
};

export default Experience;