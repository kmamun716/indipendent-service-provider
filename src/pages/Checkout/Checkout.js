import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.config";

const Checkout = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <img src="https://t4.ftcdn.net/jpg/03/41/47/73/360_F_341477352_FPoRvWnWWqdzVFnIWn3on34gYWaSEX2K.jpg" alt="" />
            <h1>Thanks To Login.</h1>
            <p>Your Email is : {user.email}</p>
        </div>
    );
};

export default Checkout;