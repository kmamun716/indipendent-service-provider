import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="d-flex mt-2">
            <div className="w-50">
                <img className="img-fluid rounded" src="https://static.vecteezy.com/system/resources/previews/002/711/857/original/detective-holding-a-magnifying-glass-behind-404-text-error-404-page-not-found-system-maintenance-vector.jpg" alt="page not found" />
            </div>
            <div className="my-auto px-2">
                <h3>Please Go To Another Page or <Link to="/" className="text-decoration-none">Home Page</Link></h3>
            </div>
        </div>
    );
};

export default NotFound;