import { signOut } from 'firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.config";
const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <header>
            <Link to="/checkout">Checkout</Link><br/>
            {
                user?<button onClick={()=>signOut(auth)}>Log Out</button> : <Link to='/login'>Login</Link>
            }
        </header>
    );
};

export default Header;