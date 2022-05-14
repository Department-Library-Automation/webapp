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





const Magazine = (props) => {
    const [calValue, calOnChange] = useState(new Date());
    class SimpleMap extends React.Component {
        static defaultProps = {
          center: {lat: 59.95, lng: 30.33},
          zoom: 11
        }
    }

    const slideImages = [
        'images/hindu.png',
        'images/express.jpg',
        'images/tamil.png'
      ];

    // const themeReducer = useSelector(state => state.ThemeReducer.mode)
    const themeReducer = useSelector(state => state.ThemeReducer)

    const dispatch = useDispatch()

    const openLinkInNewTab = (link) => {
        window.open(link, '_blank')
    }

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
                                <h1 className="page-header">Magazines</h1>
                                <h2>Popular Magazines</h2>
                                <div>
                                    <Slide easing="ease">
                                        <div className="each-slide">
                                            <div className='slide-image' style={{'backgroundImage': `url(/${slideImages[0]})`}} onClick={() => openLinkInNewTab("https://www.thehindu.com/todays-paper/")}>
                                            </div>
                                            
                                            
                                        </div>
                                        <div className="each-slide">
                                            <div style={{'backgroundImage': `url(/${slideImages[1]})`}} className='slide-image' onClick={() => openLinkInNewTab("https://indianexpress.com/todays-paper/")}>
                                            </div>
                                        </div>
                                        <div className="each-slide">
                                            <div style={{'backgroundImage': `url(/${slideImages[2]})`}} className='slide-image' onClick={() => openLinkInNewTab("https://tamil.indianexpress.com/")}>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                                <br></br>
                                <h2>Best selling Novels</h2>
                                <div>
                                    <div className='row'>
                                        <a href='https://www.goodreads.com/book/show/36809135-where-the-crawdads-sing/' target="_blank">
                                            <div className='card' >
                                                <img src="./images/where.jpg"/>
                                            </div>
                                        </a>
                                        <a href='https://www.goodreads.com/book/show/18144590-the-alchemist/' target="_blank">
                                            <div className='card'>
                                                <img src="./images/alchemist.jpg"/>
                                            </div>
                                        </a>
                                        <a href='https://www.jkrowling.com/book/harry-potter-philosophers-stone/' target="_blank">
                                            <div className='card'>
                                                <img src="./images/harrypotter.jpg"/>"
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default Magazine