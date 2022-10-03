import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
    return (
        <div className={styles.container}>
            <Form>
                <h1 className={styles.title}>Login</h1>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control placeholder="Username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button variant="primary">Submit</Button>
                </div>
                <p className="text-center mt-4 text-muted">
                    Not a member?{' '}
                    <Link
                        className={`${styles.link} text-primary`}
                        to="/register"
                    >
                        Sign up now
                    </Link>
                </p>
            </Form>
        </div>
    );
};

export default LoginForm;
