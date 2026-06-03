import { Link } from "react-router-dom"

const Certification = () => {
    return (
        <form action="" className="py-2 w-full md:w-auto max-w-full">
            <div className="label">Certification #1</div>
            <input type="text" placeholder="e.g Certificate of Engineering" className="input" />
            <div className="label">Certification #2</div>
            <input type="text" placeholder="e.g Certificate of Engineering" className="input" />
            <div className="label">Certification #3</div>
            <input type="text" placeholder="e.g Certificate of Engineering" className="input" />
            <div className="label">Certification #4</div>
            <input type="text" placeholder="e.g Certificate of Engineering" className="input" />
            <Link to="/Congratulations">
                <button type="button" className="form-button">Submit</button>
            </Link>
        </form>
    )
}

export default Certification