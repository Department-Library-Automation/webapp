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

import Details from '../components/Details'
import Forms from '../components/Forms'
import PayCard from '../components/PayCard'
import PaymentMode from '../components/PaymentMode'
import Success from '../components/Success'
import Footer from '../components/Footer'

import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar'

import  { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Form from '../components/Forms';





const Membership1 = (props) => {
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

    const mystyle = {
        backgroundColor: "white",
        height:'30px',
        width:'100px',
        marginLeft:'400px'
       };
       const mystyle1 = {
        width:'200%'
       };
       const mystyle2 = {
        marginRight:'300px'
       };
       const mystyle3 = {
        height:'450px',
        width:'960px'
       };
       const mystyle4 = {
        marginRight:'600px'
       };
       
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
                        
                    <div className='card'>
                        <div className='col-6'>
                            <h1>MEMBERSHIP</h1>
                            
                            <div className='card' style={mystyle1}>
                                <img style={mystyle3} src="./images/membership.jpg"/>

                                <br></br>
                                <br></br>
                                <a href='/pay' target="_self">
                            <div  style={mystyle}>
                                <a href='/Pay'   target="blank"><h4>Join Now</h4></a>
                            </div>
                            
                            </a> 
                                <br></br>
                                <br></br>
                                <br></br><br></br>
                                <h2><blockquote style={mystyle4}>Do I need library membership?</blockquote></h2>
                                <br></br>
                                <br></br>
                                <br></br>
                                <h3>Anyone who is member can visit the library and use the materials on the shelves. You only have to join the library if you need to access materials from the library stores or use our online subscription resources. It’s best to email us if you're planning to visit the library for the first time, so that we can advise you on the membership options available to you. 
                                </h3>
                                <br></br>
                                <h3>
                                Membership is applicable to every socially legitimate person who provides proper Id. It allows you to: 
                                </h3>
                                
                                <br></br>
                                
                                <h3><li>Become a member of the readers club and socialize with other users. </li>
                                    <li>Order items from the library's closed stores to view in our Rare Materials Room.</li>
                                <li>Avail bonus issues of books and return privileges.</li>
                                <li>Access library wifi.</li>
                                <li>Login to the library's computer network to access our online subscription databases.</li>
                                <li>Use the library scanners and printers for research purposes.</li>
                                <li>Book a study room.</li>
                                </h3>
                            </div>
                            
                            
                            <br></br>
                            <hr></hr>
                            <br></br>
                            <br></br>
                            <div style={mystyle2}>
                            <h2>Top 3 Comments:</h2>
                            </div>
                            
                                <br></br>
                                <div className='card' style={mystyle1}>
                                    <div className='row'>
                                    <div className="col-6"><h3><blockquote>Jagan :</blockquote></h3></div>
                                    <div className="col-6">It is very useful.This is why it is extremely important to know exactly what the surrounding elements will or can be, and exactly which CSS classes/IDs are nearby. We are basically trying to hook into something and correctly identify the left child in Box and add margin to the right of it, or target the right child and add margin to the left of it (or depending on everything, target both and split the additional margin onto both).</div>
                                    </div>
                                    <div className='row'>
                                    <div className="col-6"><h3><blockquote>Luffy Dragon:</blockquote></h3></div>
                                    <div className="col-6">It is very useful.This is why it is extremely important to know exactly what the surrounding elements will or can be, and exactly which CSS classes/IDs are nearby. We are basically trying to hook into something and correctly identify the left child in Box and add margin to the right of it, or target the right child and add margin to the left of it (or depending on everything, target both and split the additional margin onto both).</div>
                                    </div>
                                    <div className='row'>
                                    <div className="col-6"><h3><blockquote>Asta staria :</blockquote></h3></div>
                                    <div className="col-6">It is very useful.This is why it is extremely important to know exactly what the surrounding elements will or can be, and exactly which CSS classes/IDs are nearby. We are basically trying to hook into something and correctly identify the left child in Box and add margin to the right of it, or target the right child and add margin to the left of it (or depending on everything, target both and split the additional margin onto both).</div>
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

export default Membership1