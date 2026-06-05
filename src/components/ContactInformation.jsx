import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    setPhoneNumber,
    setLinkedinLink,
    setTwitterLink,
    setAddress,
    setGithubLink,
    setPortfolioLink,
} from "../redux/infos";
import { setPage } from "../redux/links";

const ContactInformation = () => {
    const dispatch = useDispatch();
    const { phoneNumber, linkedinLink, twitterLink, address, githubLink, portfolioLink } =
        useSelector((s) => s.infos);

    return (
        <form action="" className="py-2 w-full md:w-auto max-w-full">
            <div className="label">Phone Number</div>
            <input
                type="tel"
                placeholder="05../06../07.."
                className="input"
                value={phoneNumber}
                onChange={(e) => dispatch(setPhoneNumber(e.target.value))}
            />
            <div className="label">LinkedIn Profile Link</div>
            <input
                type="url"
                placeholder="e.g https://linkedin.com/in/johndoe"
                className="input"
                value={linkedinLink}
                onChange={(e) => dispatch(setLinkedinLink(e.target.value))}
            />
            <div className="label">Twitter Profile Link</div>
            <input
                type="url"
                placeholder="e.g https://twitter.com/johndoe"
                className="input"
                value={twitterLink}
                onChange={(e) => dispatch(setTwitterLink(e.target.value))}
            />
            <div className="label">Address</div>
            <input
                type="text"
                placeholder="NG 1112 oreville"
                className="input"
                value={address}
                onChange={(e) => dispatch(setAddress(e.target.value))}
            />
            <div className="label">GitHub Profile Link</div>
            <input
                type="url"
                placeholder="e.g https://github.com/johndoe"
                className="input"
                value={githubLink}
                onChange={(e) => dispatch(setGithubLink(e.target.value))}
            />
            <div className="label">Portfolio Link</div>
            <input
                type="url"
                placeholder="e.g https://johndoe.dev"
                className="input"
                value={portfolioLink}
                onChange={(e) => dispatch(setPortfolioLink(e.target.value))}
            />
            <Link to="/resume/Certification">
                <button type="button" className="form-button" onClick={() => dispatch(setPage('Certification'))}>Next</button>
            </Link>
        </form>
    );
};

export default ContactInformation;