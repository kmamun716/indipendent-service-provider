import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.config';

const Register = () => {
    const [regUser, setRegUser] = useState({
        email:"",
        password:""
    });
    const [checked, setChecked] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const handleChange=e=>{
        setRegUser({
            ...regUser,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit=e=>{
        e.preventDefault();
        console.log(regUser.email, regUser.password)
        createUserWithEmailAndPassword(regUser.email, regUser.password);
        console.log(user)
    }
    return (
        <div>
            <h3 className='text-center text-decoration-underline'>Register Here</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleChange} type="email" name="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handleChange} type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" onChange={() => setChecked(!checked)} label="Agree to Register" />
                </Form.Group>
                <Button variant="primary" disabled={checked? false: true} type="submit">
                    Register
                </Button>
            </Form>
            <p>Already Have Account? <Link to="/login">Login Here</Link></p>
        </div>
    );
};

export default Register;