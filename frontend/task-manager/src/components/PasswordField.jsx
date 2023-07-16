import PropTypes from 'prop-types';
import React from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Input, InputGroup } from 'rsuite';

function PasswordField(props) {
  const pStyle = {
    textAlign: 'start',
    color: '#0d1b2a',
    fontWeight: 'bold',
    marginBottom: '4px',
  };

  const [visible, setVisible] = React.useState(false);

  const handleChange = () => {
    setVisible(!visible);
  };

  const checkForValue = (e)=>{
    e.target.value === "" ? e.target.style.border = "1px solid red" : e.target.style.border = "";
  };

  return (
    <div style={{ marginBottom: '12px' }}>
      <p style={pStyle}>{props.title}</p>
        <InputGroup inside style={{marginRight : '8px'}}>
        <InputGroup.Addon >{props.icon}</InputGroup.Addon>
          <Input
            type={visible ? 'text' : 'password'}
            style={{ paddingStart: '8px' }}
            placeholder={props.placeholder}
            name={props.placeholder}
            ref={props.Ref}
            onBlur={(e)=>checkForValue(e)}
          />
          <InputGroup.Button onClick={handleChange}>
            {visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </InputGroup.Button>
        </InputGroup>
    </div>
  );
}

PasswordField.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.element,
};

export default PasswordField;
