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

import Sidebar1 from '../components/sidebar/Sidebar1'
import TopNav1 from '../components/topnav/TopNav1'

import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar'

import  { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { textAlign } from '@mui/system';


const Faq1 = (props) => {
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
    
    
    return (
        <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                    <Sidebar1 {...props} />
                    <div className="layout__content">
                        <TopNav1/>
                        <div className="layout__content-main">
                            <div>
                                <h2 className="page-header">Faq</h2>
                                <div className="card">
                                    <h2 style={{color: "Aquamarine"}} >Where can I find all list of books?</h2><br></br>
                                    <h3>You can find in the Map option. In section block all section of books have been listed.
                                        The catagories of books have been listed in the floor and shelf wise. The shelf has been named
                                        as XXZA_B_Catagory. The XX indicated floor, Z indicates Left or Right, A indicates Row and B indicates 
                                        Front or Back followed by catagories of books arranged.
                                    </h3>
                                    <h2 style={{color: "Aquamarine"}} ></h2>
                                </div>
                                <div className="card">
                                    <h2 style={{color: "Aquamarine"}} >What are the working times for Library in Working Days?</h2><br></br>
                                    <h3>The working days of Library is from Monday to Friday. In working days, it will be open from 8 AM to 10 PM.
                                    </h3>
                                    <h2 style={{color: "Aquamarine"}} ></h2>
                                </div>
                                <div className="card">
                                    <h2 style={{color: "Aquamarine"}} >What are the working times for Library in Leave(Speacial Events) Days?</h2><br></br>
                                    <h3>The weekends of Library are Saturday and Sunday. In weekends, it will be open from 7AM to 7PM. 
                                        In special events like festival it will be open from 9 Am to 8PM.
                                    </h3>
                                    <h2 style={{color: "Aquamarine"}} ></h2>
                                </div>
                            </div>

                        </div>
                    </div>
        </div>
    )
}
export default Faq1