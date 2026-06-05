import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    setFullName,
    setEmailAddress,
    setProfession,
    setAddress,
    setCity,
    setState,
} from "../redux/infos";
import { setPage } from "../redux/links";

const PersonalInfo = () => {
    const dispatch = useDispatch();
    const { fullName, emailAddress, profession, address, city, state } = useSelector((s) => s.infos);

    return (
        <form action="" className="py-2 w-full md:w-auto max-w-full">
            <div className="label">Full Name</div>
            <input
                type="text"
                placeholder="John Doe"
                className="input"
                value={fullName}
                onChange={(e) => dispatch(setFullName(e.target.value))}
            />
            <div className="label">Email Address</div>
            <input
                type="email"
                placeholder="JohnDoe@gmail.com"
                className="input"
                value={emailAddress}
                onChange={(e) => dispatch(setEmailAddress(e.target.value))}
            />
            <div className="label">Profession</div>
            <input
                type="text"
                placeholder="E.G Software Engineer"
                className="input"
                value={profession}
                onChange={(e) => dispatch(setProfession(e.target.value))}
            />
            <div className="label">Address</div>
            <input
                type="text"
                placeholder="NG 1112 oreville "
                className="input"
                value={address}
                onChange={(e) => dispatch(setAddress(e.target.value))}
            />
            <div className="flex flex-col md:flex-row md:space-x-1">
                <div className="w-full md:w-auto">
                    <div className="label">City</div>
                    <input
                        type="text"
                        placeholder="Houston"
                        className="min-input"
                        value={city}
                        onChange={(e) => dispatch(setCity(e.target.value))}
                    />
                </div>
                <div className="w-full md:w-auto">
                    <div className="label">State</div>
                    <input
                        type="text"
                        placeholder="Texas"
                        className="min-input"
                        value={state}
                        onChange={(e) => dispatch(setState(e.target.value))}
                    />
                </div>
            </div>
            <Link to="/resume/Experience">
                <button type="button" className="form-button" onClick={() => dispatch(setPage('Experience'))}>Next</button>
            </Link>
        </form>
    );
};

export default PersonalInfo;