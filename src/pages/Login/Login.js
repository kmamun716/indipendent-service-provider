import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.config";

const Login = () => {
    const [loggedUser, setLoggedUser] = useState({
        email:"",
        password:""
    });
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
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
    if(user){
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
        </div>
    );
};

export default Login;