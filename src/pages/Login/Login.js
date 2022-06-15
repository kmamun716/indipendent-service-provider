import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.config";

const Login = () => {
    const [loggedUser, setLoggedUser] = useState({
        email:"",
        password:""
    });
    const [
        signInWithEmailAndPassword,
        user
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, error] = useSignInWithGoogle(auth);
    const [user1] = useAuthState(auth);
    const handleChange=e=>{
        setLoggedUser({
            ...loggedUser,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit=e=>{
        e.preventDefault();
        signInWithEmailAndPassword(loggedUser.email, loggedUser.password);        
    };
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if(user||user1){
        navigate(from, { replace: true });
    }
    return (
        <div>
            <h3 className='text-center text-decoration-underline'>Login Here</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleChange} type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handleChange} type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p className="my-2">Not Have Any Account? <Link to="/register">Register Here</Link></p>
            <Button variant="info" onClick={()=>signInWithGoogle()}> <img src="https://mpng.subpng.com/20180803/vob/kisspng-clip-art-google-logo-computer-icons-vector-graphic-google-icons-download-for-free-in-png-and-svg-5b650f9ebb3371.3188325515333497907668.jpg" alt="sign in with google" className="img-fluid img-thumbnail" width="30px"/> Sign In With Google</Button>
        </div>
    );
};

export default Login;