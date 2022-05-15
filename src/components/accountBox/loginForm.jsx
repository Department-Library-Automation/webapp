import React, { useContext,useState } from "react";
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
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';



export function LoginForm() {
  const { switchToSignup } = useContext(AccountContext);
  

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [formError, setFormError] = useState("")

    const login = e => {
        e.preventDefault()
        console.log('SignIn Form')
        if(email == '' || password == ''){
            setFormError("Please fill every field")
            return
        }
        else{
            Axios.post("http://localhost:3001/Signin",{
                email: email,
                password: password
            }).then((response) => {
              console.log(response.data)
                if(!response.data.error) { 
                  console.log(response.data) 
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
      <FormContainer >
      <p style= {{color: 'red'}}>{formError ? formError : ''}</p>
        <Input type="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value)}} />
        <Input type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value)}} />
        <hr></hr>
        
        <br />
        <SubmitButton type="submit" onClick={login}>Signin</SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#" style={{color:'black'}}>Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#" style={{color:'black'}}>
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );

  
}

export default LoginForm
