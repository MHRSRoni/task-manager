import logo from '../assets/logo.png';
import SignUpForm from '../components/SignUpForm';

function Signup() {
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
        <h1
          style={{
            fontSize: '24px',
            color: 'black',
            lineHeight: '38px',
          }}
        >
          Get started
        </h1>
        <p
          style={{
            fontSize: '17px',
            marginBottom: '8px',
            color: '#8a817c',
          }}
        >
          create your account now
        </p>
        <SignUpForm />
      </div>
    </div>
  );
}

export default Signup;
