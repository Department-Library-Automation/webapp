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

import section from '../../src/pages/images/section.jpg'
import first from '../../src/pages/images/FirstFloor.jpg'
import second from '../../src/pages/images/SecondFloor.jpg'
import third from '../../src/pages/images/ThirdFloor.jpg'

const mystyle69 = {
    marginLeft:"10%",
    marginRight:"10%",
    width:"200%"
   };

const mystyle1 = {
    marginLeft:"0%"
   };
   const mystyle2 = {
    marginLeft:"25%"
   };
   const mystyle3 = {
    marginLeft:"25%"
   };

const Map1 = (props) => {
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
                            <div className='card'>
                                <h2 className="page-header">Map</h2>
                                <div className='row'>
                                    <div className='card' style={mystyle69} >
                                        <h1>Section Block</h1>
                                        <br></br>
                                        <br></br>
                                        <div className='card'>
                                            <h1>Books</h1><br></br>
                                    <div className='row' style={{margin: "auto"}} >
                                        <div className='col-1' style={mystyle1}>
                                            <h3>FirstFloor</h3>
                                            
                                        </div>
                                        <div className='col-1' style={mystyle2}  >
                                            <h3>SecondFloor</h3>
                                        </div>
                                        <div className='col-1' style={mystyle3}>
                                            <h3>ThirdFloor</h3>
                                        </div>
                                        </div>
                                        <br></br>
                                        <hr></hr>
                                        <br></br>
                                        <div className='row' style={{margin: "auto"}} >
                                        <div className='col-1' style={mystyle1}>
                                            <h4>FFL1_1_Fantasy</h4>
                                            <h4>FFL1_2_Fantasy</h4>
                                            <h4>FFL2_1_Proverb_Story</h4>
                                            <h4>FFL2_2_Proverb_Story</h4>
                                            <h4>FFL3_1_Picture_Book</h4>
                                            <h4>FFL3_2_Picture_Book</h4>
                                            <h4>FFR1_1_Fairy_Tales</h4>
                                            <h4>FFR1_2_Fairy_Tales</h4>
                                            <h4>FFR2_1_Fact_Story</h4>
                                            <h4>FFR2_2_Fact_Story</h4>
                                            <h4>FFR3_1_Poetry</h4>
                                            <h4>FFR3_2_Poetry</h4>
                                            
                                        </div>
                                        <div className='col-1' style={mystyle2}  >
                                            <h4>SFL1_1_Mystery</h4>
                                            <h4>SFL1_2_Mystery</h4>
                                            <h4>SFL2_1_Encyclopedia</h4>
                                            <h4>SFL2_2_Encyclopedia</h4>
                                            <h4>SFL3_1_Anime_Manga</h4>
                                            <h4>SFL3_2_Anime_Manga</h4>
                                            <h4>SFR1_1_Crime_Investigation</h4>
                                            <h4>SFR1_2_Crime_Investigation</h4>
                                            <h4>SFR2_1_Novel</h4>
                                            <h4>SFR2_2_Novel</h4>
                                            <h4>SFR3_1_Horror</h4>
                                            <h4>SFR3_2_Horror</h4>
                                        </div>
                                        <div className='col-1' style={mystyle3}>
                                            <h4>TFL1_1_Autobiography</h4>
                                            <h4>TFL1_2_Autobiography</h4>
                                            <h4>TFL2_1_Poetry</h4>
                                            <h4>TFL2_2_Poetry</h4>
                                            <h4>TFL3_1_Science_Fiction</h4>
                                            <h4>TFL3_2_Science_Fiction</h4>
                                            <h4>TFR1_1_Autobiography</h4>
                                            <h4>TFR1_2_Autobiography</h4>
                                            <h4>TFR2_1_Science_Fiction</h4>
                                            <h4>TFR2_2_Science_Fiction</h4>
                                            <h4>TFR3_1_Novel</h4>
                                            <h4>TFR3_2_Novel</h4>
                                        </div>
                                        </div>
                                        </div>
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

export default Map1
