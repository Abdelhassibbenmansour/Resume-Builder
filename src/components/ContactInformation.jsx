import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ContactInformation = () => {
    const { phoneNumber, setPhoneNumber, linkedinLink, setLinkedinLink, twitterLink, setTwitterLink, address, setAddress, githubLink, setGithubLink, portfolioLink, setPortfolioLink, setPage } = useContext(AppContext);

    return (
        <form action="" className="py-2 w-full md:w-auto max-w-full">
            <div className="label">Phone Number</div>
            <input
                type="tel"
                placeholder="05../06../07.."
                className="input"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <div className="label">LinkedIn Profile Link</div>
            <input
                type="url"
                placeholder="e.g https://linkedin.com/in/johndoe"
                className="input"
                value={linkedinLink}
                onChange={(e) => setLinkedinLink(e.target.value)}
            />
            <div className="label">Twitter Profile Link</div>
            <input
                type="url"
                placeholder="e.g https://twitter.com/johndoe"
                className="input"
                value={twitterLink}
                onChange={(e) => setTwitterLink(e.target.value)}
            />
            <div className="label">Address</div>
            <input
                type="text"
                placeholder="NG 1112 oreville"
                className="input"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <div className="label">GitHub Profile Link</div>
            <input
                type="url"
                placeholder="e.g https://github.com/johndoe"
                className="input"
                value={githubLink}
                onChange={(e) => setGithubLink(e.target.value)}
            />
            <div className="label">Portfolio Link</div>
            <input
                type="url"
                placeholder="e.g https://johndoe.dev"
                className="input"
                value={portfolioLink}
                onChange={(e) => setPortfolioLink(e.target.value)}
            />
            <Link to="/resume/Certification">
                <button type="button" className="form-button" onClick={() => setPage('Certification')}>Next</button>
            </Link>
        </form>
    );
};

export default ContactInformation;