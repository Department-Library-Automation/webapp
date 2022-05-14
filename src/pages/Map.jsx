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

import Sidebar from '../components/sidebar/Sidebar'
import TopNav from '../components/topnav/TopNav'

import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar'

import  { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import section from '../../src/pages/images/section.jpg'
import first from '../../src/pages/images/FirstFloor.jpg'
import second from '../../src/pages/images/SecondFloor.jpg'
import third from '../../src/pages/images/ThirdFloor.jpg'




const Map = (props) => {
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
                    <Sidebar {...props} />
                    <div className="layout__content">
                        <TopNav/>
                        <div className="layout__content-main">
                            <div>
                                <h2 className="page-header">Map</h2>
                                <div className='row'>
                                    <div className='card' style={{margin: "auto"}}>
                                        <h1>Section Block</h1>
                                        <br></br>
                                    <img style={{height: "500px", width: "800px"}} src={section} alt="Not available" />
                                    </div>
                                </div>
                                <br></br>
                                <div className='row'>
                                    <div className='card' style={{margin: "auto"}}>
                                        <h1>Architectural Design</h1>
                                    <img style={{height: "500px", width: "800px"}} src={first} alt="Not available" />
                                    </div>
                                </div>
                                <br></br>
                                <div className='row'>
                                    <div className='card' style={{margin: "auto"}}>
                                    
                                    <img style={{height: "500px", width: "800px"}} src={second} alt="Not available" />
                                    </div>
                                </div>
                                <br></br>
                                <div className='row'>
                                    <div className='card' style={{margin: "auto"}}>
                                    <img style={{height: "500px", width: "800px"}} src={third} alt="Not available" />
                                    </div>
                                </div>
                                <br></br>
                                <div className='row'>
                                    <div className='card' style={{margin: "auto"}}>
                                    <h2>If you want to know Library Location <Link to="/simpleMap" target="_blank"> Click here</Link></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default Map
