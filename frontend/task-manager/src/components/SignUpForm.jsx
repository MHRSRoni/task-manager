import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { BiLockAlt } from 'react-icons/bi';
import BlockButton from "./BlockButton";
import Check from "./Check";
import InputField from "./InputField";
import PasswordField from "./PasswordField";
import { useRef, useState } from 'react';
import { signupFormValidate } from '../validation/signupForm';
import { Message, useToaster } from 'rsuite';


const SignUpForm = () => {

  let name,email,password,cpassword,check = useRef();
  let [data, setData] = useState("")
  const toster= useToaster()

  const getData = async () =>{
    if(check.classList[1]=== "rs-checkbox-checked"){
      const result = await signupFormValidate({name : name.value, email : email.value, password : password.value, cpassword : cpassword.value})
      const formData = result.value
      const reqOpt = {
        method : "POST",
        headers : {
          'content-type' : "application/json"
        },
        body : JSON.stringify(formData)
      }
    
       await fetch("http://localhost:4000/signup", reqOpt)
      .then(res => res.json())
      .then(data => {setData(data)})
      .catch(err=>console.log(err))
      let tostType
      if(data.Error){
        tostType = 'error';
        data.msg = data.Error
      }else{
        tostType = 'success'
      }
      const message = await (<Message showIcon type={tostType} closable >{data.msg}</Message>);
      toster.push(message, {placement : "topEnd", duration : "5000"})
    }
    
    
  }

  return (
    <div>
      
      <InputField Ref={(a)=>name=a} title="Name" icon={<AiOutlineUser/>} placeholder="Enter your name"/>
      <InputField Ref={(a)=>email=a} title="Email" icon={<AiOutlineMail/>} placeholder="Enter your Email"/>
      <PasswordField Ref={(a)=>password=a} title="Password" icon={<BiLockAlt/>} placeholder="Enter your password"/>
      <PasswordField Ref={(a)=>cpassword=a} title="Confirm Password" icon={<BiLockAlt/>} placeholder="Enter your password again"/>
      <Check Ref={(a)=>check=a} text="I agree with all the terms" style={{float : "left"}}/>
      <p style={{float : "right",marginLeft: "-10px",marginBottom : "20px", fontSize : "12px", marginTop : "10px" , color: "skyblue"}}>Already have Account? Login</p>
      <BlockButton title="Sign Up Now" color="black" onClick={getData}/>
    </div>
  )
}

export default SignUpForm
