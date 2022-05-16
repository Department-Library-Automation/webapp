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

const mystyle69 = {
    marginLeft:"5%",
    width:"90%"
   };
   

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
const status = [
    { label: "Add", value: 1 ,color:"Red"},
    { label: "Edit", value: 2 },
    { label: "Delete", value: 3 }
  ];
const latestOrders = {
    header: [
        "Title",
        "Details"
    ],
    body: [
        {
            id: "User ID",
            user: "19610"
        },
        {
            id: "Name",
            user: "Damian Nithish"
        },
        {
            id: "Number of Books taken",
            user: "15"
        },
        {
            id: "Library Member Since",
            user: "12.09.2021"
        },
        {
            id: "User card renewed",
            user: "14.09.2021"
        },
        {
            id: "User card expire date",
            user: "12.09.2023"
        },
        {
            id: "Recent Book taken",
            user: "Percy Jackson Vol-2"
        },
        {
            id: "Status of Book",
            user: "Overdue"
        }
    ]
}

const orderStatus = {
    "shipping": "primary",
    "pending": "warning",
    "returned": "success",
    "overdue": "danger"
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)
const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>
            <Badge type={orderStatus[item.user]} content={item.user}/>
        </td>
    </tr>
)

const Details1 = (props) => {
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
                                <h2 className="page-header">Details</h2>
                                <div>
                                <div className="card" style={mystyle69}>
                        <div className="card__header">
                            <h3>Personal Details</h3>
                        </div>
                        <div className="card__body" >
                            <Table
                                headData={latestOrders.header}
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={latestOrders.body}
                                renderBody={(item, index) => renderOrderBody(item, index)}
                              
                            />
                            
                        </div>
                        
                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default Details1