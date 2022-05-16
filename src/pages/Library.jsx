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

const mystyle = {
    backgroundColor: "white",
    height:'30px',
    width:'120px',
    marginLeft:'270px',
    
   };
const Library = (props) => {
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

    const renderCusomerHead = (item, index) => (
        <th key={index}>{item}</th>
    )
    
    const renderCusomerBody = (item, index) => (
        <tr key={index}>
            <td>{item.username}</td>
            <td>{item.order}</td>
            <td>{item.price}</td>
        </tr>
    )

    const latestOrders = {
        header: [
            "Date",
            "Total number of books",
            "Stock Verify"
        ],
        body: [
            {
                id: "15/05/2022",
                user: "522",
                status:"Yes"
            },
            {
                id: "16/05/2022",
                user: "520",
                status:"Yes"
            },
            {
                id: "17/05/2022",
                user: "-",
                status:"No"
            },
            {
                id: "18/05/2022",
                user: "-",
                status:"No"
            },
            {
                id: "19/05/2022",
                user: "-",
                status:"No"
            },
            {
                id: "20/05/2022",
                user: "-",
                status:"No"
            },
            {
                id: "21/05/2022",
                user: "-",
                status:"No"
            },
            {
                id: "22/05/2022",
                user: "-",
                status:"No"
            
            }
        ]
    }
    
    const renderOrderHead = (item, index) => (
        <th key={index}>{item}</th>
    )

    const renderOrderBody = (item, index) => (
        <tr key={index}>
            <td>{item.id}</td>
            <td><input type="number"min={100} max={1000} /></td>
            
            <td>
                
            <select name="status" id="status">
                <option value={item.status}>{item.status}</option>
              <option value="returned">Yes</option>
              <option value="pending">No</option>
              
            </select>
            </td>
            <td><a href='/details'>{item.details}</a></td>
           
        </tr>
    )
    
    return (
        <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                    <Sidebar {...props} />
                    <div className="layout__content">
                        <TopNav/>
                        <div className="layout__content-main">
                            <div className='card'>
                                <h2 className="page-header">Library Management</h2>
                                <div className="card__body" >
                                    <Table
                                        headData={latestOrders.header}
                                        renderHead={(item, index) => renderOrderHead(item, index)}
                                        bodyData={latestOrders.body}
                                        renderBody={(item, index) => renderOrderBody(item, index)}
                                    
                                    />
                                    
                                </div>
                                <br></br>
                                <br></br>
                                <div className='card'>
                                        Update Books: <br></br>
                                        Add:we can add the book - <a href='/Pay'  style={mystyle} target="blank"><h4>Add Books</h4></a><br></br>
                                        Delete:we can Delete the book -<a href='/Pay' style={mystyle}  target="blank"><h4>Delete Books</h4></a>
                                        
                                            
                                                
                                       
                                            
                                        
                                        
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default Library