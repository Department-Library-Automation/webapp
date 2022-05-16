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

import Sidebar from '../components/sidebar/Sidebar1'
import TopNav from '../components/topnav/TopNav1'

import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar'

import  { Component } from 'react';
import GoogleMapReact from 'google-map-react';





const Wallet1 = (props) => {
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
            <td>{item.user}</td>
            <td>{item.amount}</td>
            <td>
                <Badge type={orderStatus[item.status]} content={item.status}/>
            </td>
        </tr>
    )

    return (
        <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                    <Sidebar {...props} />
                    <div className="layout__content">
                        <TopNav/>
                        <div className="layout__content-main">
                            <div>
                                <h2 className="page-header">My Wallet</h2>
                                <div className="row">
                                    <div className='col-6'>
                                        <h1>Amount</h1>
                                        <div className='card'>
                                            <h1>Balance</h1>
                                            <h2><i class='bx bx-rupee'></i> 1234</h2>
                                        </div>
                                        <div className='card'>
                                            <h1>Recent Transaction Amount</h1>
                                            <h2><i class='bx bx-rupee'></i> 2321</h2>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        
                                            <h1>Transaction</h1>
                                            <div className='card'>
                                                <h1>Number of Transaction</h1>
                                                <h2><i class='bx bx-rupee'></i> 1234</h2>
                                            </div>
                                            <div className='card'>
                                                <h1>Last Month Transaction</h1>
                                                <h2><i class='bx bx-rupee'></i> 2321</h2>
                                            </div>
                                        
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default Wallet1