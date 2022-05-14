import React, {useEffect} from 'react'

import { useState } from 'react'

import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'

import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css'

// import { useSelector } from 'react-redux'

import "./style.css"

import styled from 'styled-components'

import StatusCard from '../components/status-card/StatusCard'

import Table from '../components/table/Table'

import Badge from '../components/badge/Badge'

import statusCards from '../assets/JsonData/status-card-data.json'

import { useSelector, useDispatch } from 'react-redux'

import ThemeAction from '../redux/actions/ThemeAction'

import Sidebar from '../components/sidebar/Sidebar'
import TopNav from '../components/topnav/TopNav'

import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar'

import  { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { textAlign } from '@mui/system';

import Group from './Group'

const About = (props) => {
    const [calValue, calOnChange] = useState(new Date());
    class SimpleMap extends React.Component {
        static defaultProps = {
          center: {lat: 59.95, lng: 30.33},
          zoom: 11
        }
    }

    // const themeReducer = useSelector(state => state.ThemeReducer.mode)
    const themeReducer = useSelector(state => state.ThemeReducer)

    const Div = styled.div`
    background: linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) ));
    display: flex;
    flex-direction: row;
    height: 100vh;
    margin-left: auto;
    margin-right: auto;
  `

    const dispatch = useDispatch()

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(ThemeAction.setMode(themeClass))

        dispatch(ThemeAction.setColor(colorClass))
    }, [dispatch])
    
    const ullist={
        margin: '10px auto',
		textAlign: 'center',
		padding: '20px',
        display: 'flex',
        justifyContent: 'space-between'
    };

    const lilist ={
		position: 'relative',
		display: 'inline-block',
		width: '200px',
		height: '100px'
    };
    
    return (
        <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                    <Sidebar {...props} />
                    <div className="layout__content">
                        <TopNav/>
                        <div className="layout__content-main">
                            <div>
                                <h2 className="page-header">About</h2>
                                <div className='card'>
                                    <h1>Uses</h1>
                                    <ul style={ullist}>
                                        <li style={lilist}>Students can access library anywhere and anytime</li>
                                        <li style={lilist}>Students can read in online or download books offline</li>
                                        <li style={lilist}>Students can update their day to day knowledge</li>
                                        <li style={lilist}>Students can access daily newspaper and magazines</li>
                                    </ul>

                                    <h2 style={{textAlign: "center"}}>Register now and start learning new and fascinating things!!</h2><br></br>
                                    <div className='card'><hr></hr><br></br>
                                        <h1><li style={lilist}><a href="http://www.facebook.com" target="_blank"><i class='bx bxl-facebook-circle' ></i></a></li>
                                        <li style={lilist}><a href="http://www.twitter.com" target="_blank"><i class='bx bxl-twitter' ></i></a></li>
                                        <li style={lilist}><a href="http://www.instagram.com" target="_blank"><i class='bx bxl-instagram' ></i></a></li>
                                        <li style={lilist}><a href="http://www.linkedin.com" target="_blank"><i class='bx bxl-linkedin' ></i></a></li></h1>
                                        
                                        <p>Address: Amrita Vishwa Vidyapeetham,Coimbatore Campus,Amritanagar PO, Coimbatore 641112, Tel  : +91-422-2685000</p>
                                        
                                    </div>
                                        
                    
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    )
}
export default About