import LoginForm from './LoginForm';
import styles from './LoginPage.module.css';

export const LoginPage = () => {
    return (
        <div className={styles.container}>
            <LoginForm />
        </div>
    );
};

export default LoginPage;
