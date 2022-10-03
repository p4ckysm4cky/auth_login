import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './RegisterForm.module.css';
import CloseButton from 'react-bootstrap/CloseButton';
import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/login');
    };

    return (
        <div className={styles.container}>
            <Form>
                <CloseButton onClick={handleClick} />
                <h1 className={styles.title}>Register</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control placeholder="Username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="formBasicConfirmPassword"
                >
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button variant="primary">Submit</Button>
                </div>
            </Form>
        </div>
    );
};

export default RegisterForm;
