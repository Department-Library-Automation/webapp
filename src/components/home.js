import React from 'react'
import {useNavigate} from 'react-router-dom'
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter,FaLinkedin} from 'react-icons/fa'


import styled from 'styled-components'

import student from '../assets/images/students.png'
import faculty from '../assets/images/facultys.png'
import back from '../assets/images/back.jpg.crdownload'

const Div = styled.div`
    background: linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) ), url(${back});
    display: flex;
    flex-direction: row;
    height: 100vh;
    background-repeat: no-repeat;
    back=ckground-size: cover;
  `

const SocialMedia = styled.section`
  width: 100%;
`
const SocialMediaWrap = styled.div`
  display: flex;
  justify-contents: space-between;
  align-items: center;
`

const WebsiteRights = styled.small`
  color: white;
  margin-top: 68em ;
`

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  margin-top: 56em;
  margin-left: 10em;
`

const SocialIconLink = styled.a`
  color: white;
  font-size: 24px;
`


const LogHome = () => {

    const navigate = useNavigate()

  return (

    <Div>

        <div style={{width:'50%' ,margin: '8em'}}>
            <button onClick={ () => navigate('/main')} style={{background:'none',border:'none',cursor:'pointer'}}>
                <img src={student} alt=''/>
            </button>
        </div>
        <div style={{width:'50%' ,margin: '8em'}}>
            <button onClick={ () => navigate('/main')}  style={{background:'none',border:'none',cursor:'pointer'}}>
                <img src={faculty} alt=''/>
            </button>
        </div>
        
            <SocialMedia>
                <SocialMediaWrap>
                    <WebsiteRights> BiblioTheca © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="http://www.facebook.com" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                        <SocialIconLink href="http://www.instagram.com" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                        <SocialIconLink href="http://www.youtube.com" target="_blank" aria-label="Youtube"><FaYoutube /></SocialIconLink>
                        <SocialIconLink href="http://www.twitter.com" target="_blank" aria-label="Twitter"><FaTwitter /></SocialIconLink>
                        <SocialIconLink href="http://www.linkedin.com" target="_blank" aria-label="LinkedIn"><FaLinkedin /></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
            
           
            
    </Div>
  )
}

export default LogHome