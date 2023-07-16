import { useRef } from 'react'
import BlockButton from './BlockButton'
import InputField from './InputField'
import PasswordField from './PasswordField'
import { AiOutlineMail } from 'react-icons/ai'
import { BiLockAlt } from 'react-icons/bi'
import { Link, useNavigate} from 'react-router-dom';
import { loginFormValidate } from '../validation/loginForm'
import { loginFormSubmit } from '../handler/loginForm'
import { Message, useToaster } from 'rsuite';



const LoginForm = () => {

  let toaster = useToaster()
  let msg, type;

  let email, password = useRef("")
  const navigate = useNavigate()
  
  const login = async ()=>{
    const {value, error} = loginFormValidate({email : email.value, password : password.value})
    if(!error){
        const result = await loginFormSubmit(value)
          if(result?.msg){
              msg = result.msg 
              type = 'success'
            }
          else{
                msg = result.Error 
                type = 'error'
              }
      }
    else{
          type = 'error'
          msg = error.message;
        }

        
        const toast = <Message showIcon type={type} >{msg}</Message>
        toaster.push(toast, {placement : "topEnd", duration : "5000"})
  }



  return (
    <div style={{width : '100%'}}>
      <InputField Ref={(a)=>email=a} title="Email" icon={<AiOutlineMail/>} placeholder="Enter your Email"/>
      <PasswordField Ref={(a)=>password=a} title="Password" icon={<BiLockAlt/>} placeholder="Enter your password"/>
      <Link to="/signup" style={{float : "right" ,marginBottom : '18px', fontSize : '12px'}}>Forgot password?</Link>
      <BlockButton title="Login" color="black" onClick={login}/>
    </div>
  )
}

export default LoginForm
