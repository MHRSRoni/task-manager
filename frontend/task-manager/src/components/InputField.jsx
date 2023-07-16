import PropTypes from 'prop-types';
import { useState } from 'react';
import {Input, InputGroup } from 'rsuite';


function InputField(props) {
  const pStyle = {
    textAlign: 'start',
    color: '#0d1b2a',
    fontWeight: 'bold',
    marginBottom: '4px',
  };

  const [value,setValue] = useState("")
  const getData =(e) =>{
    setValue(e)
    console.log(value)
  }
  
  const checkForValue = (e)=>{
    e.target.value === "" ? e.target.style.border = "1px solid red" : e.target.style.border = "";
  };
  
  return (
    <div style={{ marginBottom: '12px' }}>
      <p style={pStyle}>{props.title}</p>
        <InputGroup inside style={{marginRight : '8px'}}>
        <InputGroup.Addon >{props.icon}</InputGroup.Addon>
          <Input
            type={'text'}
            style={{ paddingStart: '8px' }}
            placeholder={props.placeholder}
            name={props.placeholder}
            value={value}
            onChange={(e)=>getData(e)}
            ref={props.Ref}
            onBlur={(e)=>checkForValue(e)}
          />
        </InputGroup>
    </div>
  );
}

InputField.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.element,
};

export default InputField;
