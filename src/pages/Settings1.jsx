import React, {useEffect} from 'react'

import { useState } from 'react'

import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'

import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css'

// import { useSelector } from 'react-redux'

import "./style.css"

import StatusCard from '../components/status-card/StatusCard'

import Table from '../components/table/Table'

import Badge from '../components/badge/Badge'

import statusCards from '../assets/JsonData/status-card-data.json'

import { useSelector, useDispatch } from 'react-redux'

import ThemeAction from '../redux/actions/ThemeAction'

import Sidebar1 from '../components/sidebar/Sidebar1'
import TopNav1 from '../components/topnav/TopNav1'

import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar'

import  { Component } from 'react';
import GoogleMapReact from 'google-map-react';





const Settings1 = (props) => {
    const [calValue, calOnChange] = useState(new Date());
    class SimpleMap extends React.Component {
        static defaultProps = {
          center: {lat: 59.95, lng: 30.33},
          zoom: 11
        }
    }

    // const themeReducer = useSelector(state => state.ThemeReducer.mode)
    const themeReducer = useSelector(state => state.ThemeReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(ThemeAction.setMode(themeClass))

        dispatch(ThemeAction.setColor(colorClass))
    }, [dispatch])

    return (
        <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                    <Sidebar1 {...props} />
                    <div className="layout__content">
                        <TopNav1/>
                        <div className="layout__content-main">
                            <div>
                                <h2 className="page-header">Settings</h2>
                                <div>
                                    <div className="row">
                                        <div className='col-6'>
                                            
                                        <a href='/faq' target="_self">
                                            <div className='card'>
                                                <h1>FAQ</h1>
                                            </div>
                                            </a>  
                                            <a href='/about' target="_self">
                                            <div className='card'>
                                                <h1>About Us</h1>

                                            </div>
                                            </a>  
                                        </div>
                                        <div className="col-6">
                                            <a href='/contact' target="_self">
                                            <div className='card'>
                                                <h1>Contact Us</h1>
                                            </div>
                                            </a>  
                                            <div className='card'> 
                                                <h1>Version</h1>
                                                <h2> 1.0.0.0 </h2>
                                            </div>
                                        </div>
                                    </div>
                                
                                </div>
                                                                
                                
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default Settings1