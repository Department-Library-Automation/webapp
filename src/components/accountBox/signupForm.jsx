import React, { useContext,useState } from "react";
import Axios from 'axios';
import {useNavigate} from "react-router-dom";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";


export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const navigate = useNavigate()
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [formError, setFormError] = useState("")


  const register = e => {
    e.preventDefault()
    if(fullName =='' || email == '' || password == '' || confirmPassword == ''){
        setFormError("Please fill every field!!")
        return
    }

    if(password != confirmPassword){
        setFormError("Password doesn't match!!")
    }

    else{
        Axios.post("http://localhost:3001/SignUp",{
            fullName: fullName,
            email: email,
            password: password
        }).then((response) => {
            console.log(response);
            if(!response.data.error) {
              navigate('/dashboard')

              }

            if (response.data.error) {
                console.log('error', response.data.error)
            }
            setFormError(response.data.error)
        })
    }
}

  return (
    
    <BoxContainer>

      <FormContainer>
        <p style= {{color: 'red'}}>{formError ? formError : ''}</p>
        <Input id="name" type="text" placeholder="Full Name" onChange={(e) => { setFullName(e.target.value)}} required />
        <Input id="mail" type="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value)}} required />
        <Input id="pass" type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value)}} required />
        <Input id="pwd" type="password" placeholder="Confirm Password"  onChange={(e) => { setConfirmPassword(e.target.value)}} required />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={register}>Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      
    </BoxContainer>
  );
}

export default SignupForm
