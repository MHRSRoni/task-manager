import BlockButton from './BlockButton'
import InputField from './InputField'
import PasswordField from './PasswordField'
import { AiOutlineMail } from 'react-icons/ai'
import { BiLockAlt } from 'react-icons/bi'

const LoginForm = () => {
  return (
    <div>
      <InputField title="Email" icon={<AiOutlineMail/>} placeholder="Enter your Email"/>
      <PasswordField title="Password" icon={<BiLockAlt/>} placeholder="Enter your password"/>
      <BlockButton title="Login" color="black" onClick={{}}/>
    </div>
  )
}

export default LoginForm
