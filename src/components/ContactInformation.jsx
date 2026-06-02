import { Link } from "react-router-dom"

const ContactInformation = () => {
    return (
        <form action="" className="py-2">
            <div className="label">Phone Number</div>
            <input type="email" placeholder="05../06../07.." className="input" />
            <div className="label">Linkedin Profile Link</div>
            <input type="email" placeholder="e.g https/johndoe" className="input" />
            <div className="label">Twitter Profile Link</div>
            <input type="text" placeholder="e.g https/johndoe" className="input" />
            <div className="label">Address</div>
            <input type="text" placeholder="NG 1112 oreville" className="input" />
            <div className="label">GitHub Profile Link</div>
            <input type="text" placeholder="e.g https/johndoe" className="input" />
            <div className="label">Portfolio Link</div>
            <input type="text" placeholder="e.g https/johndoe" className="input" />
            <Link to="/Certification">
                <button type="button" className="form-button">Next</button>
            </Link>
        </form>
    )
}

export default ContactInformation