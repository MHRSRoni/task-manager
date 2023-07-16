import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { BiLockAlt } from 'react-icons/bi';
import BlockButton from "./BlockButton";
import Check from "./Check";
import InputField from "./InputField";
import PasswordField from "./PasswordField";
import { useRef } from 'react';
import { signupFormValidate } from '../validation/signupForm';
import { Message, useToaster } from 'rsuite';
import { signupFormSubmit } from '../handler/signupForm';
import { Link, useNavigate } from 'react-router-dom';



const SignUpForm = () => {

  let name,email,password,cpassword,check = useRef();
  const navigate = useNavigate()
  const toster= useToaster()
  let tostType , msg

  const getData = async () =>{
    if(check.classList[1]=== "rs-checkbox-checked"){
      check.style.color = 'black'
      const result = await signupFormValidate({name : name.value, email : email.value, password : password.value, cpassword : cpassword.value})
      if (!result.error) {
            const response = await signupFormSubmit(result.value)
            if(response.msg){
              tostType = 'success'
              msg = response.msg
              navigate('/')
            }
            else{
              tostType = 'error'
              msg = response.Error
            }
           
      } else {
        tostType = 'error'
        msg = result.error.message
      }
      const message = (<Message showIcon type={tostType} closable >{msg}</Message>);
      toster.push(message, {placement : "topEnd", duration : "5000"})
    }
    else{
          check.style.color = 'red'
        }
    
    
  }

  return (
    <div>
      
      <InputField Ref={(a)=>name=a} title="Name" icon={<AiOutlineUser/>} placeholder="Enter your name"/>
      <InputField Ref={(a)=>email=a} title="Email" icon={<AiOutlineMail/>} placeholder="Enter your Email"/>
      <PasswordField Ref={(a)=>password=a} title="Password" icon={<BiLockAlt/>} placeholder="Enter your password"/>
      <PasswordField Ref={(a)=>cpassword=a} title="Confirm Password" icon={<BiLockAlt/>} placeholder="Enter your password"/>
      <Check Ref={(a)=>check=a} text="I agree with all the terms" style={{float : "left"}}/>
      <Link to="/"><p style={{float : "right",marginLeft: "-10px",marginBottom : "20px", fontSize : "12px", marginTop : "10px"}}> Already have Account?</p></Link>
      <BlockButton title="Sign Up Now" color="black" onClick={getData}/>
    </div>
  )
}

export default SignUpForm
