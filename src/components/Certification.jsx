import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCertifications } from "../redux/infos";

const Certification = () => {
    const dispatch = useDispatch();
    const { certifications } = useSelector((s) => s.infos);

    return (
        <form action="" className="py-2 w-full md:w-auto max-w-full">
            <div className="label">Certifications</div>
            <input
                type="text"
                placeholder="e.g Certificate of Engineering, AWS Certified..."
                className="input"
                value={certifications}
                onChange={(e) => dispatch(setCertifications(e.target.value))}
            />
            <Link to="/Congratulations">
                <button type="button" className="form-button">Submit</button>
            </Link>
        </form>
    );
};

export default Certification;