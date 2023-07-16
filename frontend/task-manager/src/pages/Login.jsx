import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <div
    style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f8f9fa',
    }}
    >
      <div
        style={{
          width: '35%',
          backgroundColor: '#ffffff',
          padding: '2% 5%',
          borderRadius: '5%',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBlock: '16px',
          }}
        >
          <img src={logo} width="30px" alt="logo" />
          <p style={{ fontSize: '18px', marginInline : '8px', color : '#252422' }}>Task Manager</p>
        </div>
        <LoginForm />
        <Link
          to="/signup"
          style={{
            display: 'block',
            marginTop: '16px',
            fontSize: '12px',
          }}
        >
          Don't have account? Signup{' '}
        </Link>
      </div>
    </div>
  );
};

export default Login;
