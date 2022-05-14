import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    background: linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) ));
    display: flex;
    flex-direction: row;
    height: 100vh;
    margin-left: auto;
    margin-right: auto;
  `

export default function 
() {
  return (
    <Div >
    <div className='card' style={{width:'50%',height:'35%' ,margin: '15em',marginLeft:'27%',backgroundColor:'lightgreen'}}>
        <h2>Logout successful <i class='bx bx-check-circle'></i></h2>
        <br></br>
        <div className='card'>
            <p>You have successfully logged out of the Central Authentication Service.</p>
            <p>For security reasons, exit your web browser.</p>
        </div>
        <div>
        <h2> <a href="/">Click Here to login </a></h2> 
        </div>
    </div>
    </Div>
  )
}