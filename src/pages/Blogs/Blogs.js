import AboutFirebase from "../../components/Blogs/AboutFirebase";
import Authenticationandauthorization from "../../components/Blogs/Authenticationandauthorization";
import FirebaseService from "../../components/Blogs/FirebaseService";

const Blogs = () => {
    return (
        <div>
            <Authenticationandauthorization/>
            <AboutFirebase/>
            <FirebaseService/>
        </div>
    );
};

export default Blogs;