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


const Contact = (props) => {
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
                                <h2 className="page-header">Contact</h2>
                                <p>
                                    <div className='card'>
                                        <hr></hr><br></br>
                                        <div className='row'>
                                            <div className='col-6'>
                                                
                                                <p>Registrar’s Office : +91-422-2685111<br></br>
                                                Campus Director’s Office : +91-422-2685010<br></br>
                                                Corporate and Industry Relations  :  +91-422-2685005, +91-422-2685004<br></br>
                                                Human Resource Director's office : +91-422-2685031</p><br></br><hr></hr><br></br>
                                                <p><h3>Amrita School of Engineering :</h3><br></br>
                                                Dean’s Office : +91-422-2685502<br></br>
                                                Dy. Dean’s Office : +91-422-2685503<br></br>
                                                Administrative Office : +91-422-2685509<br></br>
                                                Accounts Office : +91-422-2685072<br></br>
                                                Dy. Controller’s Office : +91-422-2685064<br></br>
                                                Professor of Students Welfare : +91-422-2685050</p><br></br><hr></hr><br></br>
                                                <p><h3>Amrita School of Business :</h3><br></br>
                                                    Chairperson Office : +91-422-2685401<br></br>
                                                    Administrative Office : +91-422-2685402<br></br>
                                                    Admission Office : +91-422-8685407, +91-422-8685410 <br></br>
                                                    Dy. Controller’s Office : +91-422-2685439<br></br>
                                                    Post Graduate Programs and Ph.D Office : +91-422-2685403<br></br></p>
                                            </div>
                                            <div className='col-6'>
                                                <p><h3>Address:</h3>Amrita Vishwa Vidyapeetham,<br></br>
                                                    Coimbatore Campus,<br></br>
                                                    Amritanagar PO, Coimbatore 641112<br></br>
                                                    Tel  : +91-422-2685000</p>
                                                    
                                            </div>
                                            <div className='card'>
                                                <hr></hr><br></br>
                                                <h1><li style={lilist}><a href="http://www.facebook.com" target="_blank"><i class='bx bxl-facebook-circle' ></i></a></li>
                                                <li style={lilist}><a href="http://www.twitter.com" target="_blank"><i class='bx bxl-twitter' ></i></a></li>
                                                <li style={lilist}><a href="http://www.instagram.com" target="_blank"><i class='bx bxl-instagram' ></i></a></li>
                                                <li style={lilist}><a href="http://www.linkedin.com" target="_blank"><i class='bx bxl-linkedin' ></i></a></li></h1>
                                                
                                                <p>Address: Amrita Vishwa Vidyapeetham,Coimbatore Campus,Amritanagar PO, Coimbatore 641112, Tel  : +91-422-2685000</p>
                                                
                                            </div>
                                            
                                        </div>
                                    </div>
                                    
                                </p>
                            </div>
                        </div>
                    </div>
        </div>
    )
}
export default Contact