import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from "react-firebase-hooks/auth";
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';
import auth from "../../firebase.config";
const Header = () => {
    const [user] = useAuthState(auth);
    const location = useLocation();
    console.log(location)
    return (
        <header>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>Navbar</Navbar.Brand>
                    </LinkContainer>
                    <Nav className="me-auto">
                        <LinkContainer to='/about-us'>
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/checkout'>
                            <Nav.Link>Checkout</Nav.Link>
                        </LinkContainer>
                        {
                            user ? <Nav.Link onClick={()=>signOut(auth)}>Log Out</Nav.Link> : 
                            location.pathname!=='/login' && <LinkContainer to='/login'>
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;