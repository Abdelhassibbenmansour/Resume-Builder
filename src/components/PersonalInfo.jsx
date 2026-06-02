import { Link } from "react-router-dom"

const PersonalInfo = () => {
    return (
        <form action="" className="py-2">
            <div className="label">Full Name</div>
            <input type="text" placeholder="John Doe" className="input" />
            <div className="label" >Email Address</div>
            <input type="email" placeholder="JohnDoe@gmail.com" className="input" />
            <div className="label">Profession</div>
            <input type="text" placeholder="E.G Software Engineer" className="input" />
            <div className="label">Address</div>
            <input type="text" placeholder="NG 1112 oreville " className="input" />
            <div className="flex space-x-1">
                <div>
                    <div className="label">City</div>
                    <input type="text" placeholder="Houston" className="min-input" />
                </div>
                <div>
                    <div className="label">State</div>
                    <input type="text" placeholder="Texas" className="min-input" />
                </div>
            </div>
            <Link to="/Experience">
                <button type="button" className="form-button">Next</button>
            </Link>
        </form>
    )
}

export default PersonalInfo