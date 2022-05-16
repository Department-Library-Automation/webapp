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
   const topCustomers = {
    head: [
        'user',
        'total orders',
        'total spending'
    ],
    body: [
        {
            "username": "john doe",
            "order": "490",
            "price": "$15,870"
        },
        {
            "username": "frank iva",
            "order": "250",
            "price": "$12,251"
        },
        {
            "username": "anthony baker",
            "order": "120",
            "price": "$10,840"
        },
        {
            "username": "frank iva",
            "order": "110",
            "price": "$9,251"
        },
        {
            "username": "anthony baker",
            "order": "80",
            "price": "$8,840"
        }
    ]
}
const actions = [
    { label: "Add", value: 1 ,color:"Red"},
    { label: "Edit", value: 2 },
    { label: "Delete", value: 3 }
  ];
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
        "user id",
        "user",
        "Book",
        "ISBN number",
        "date",
        "status",
        "Details"
    ],
    body: [
        {
            id: "19610",
            user: "Damian Nithish",
            date: "25 Dec 2021",
            book:"Percy Jackson vol-2",
            price: "9780786838653",
            status: "overdue",
            details:"view"
        },
        {
            id: "19613",
            user: "Deenadayalan",
            book:"The Alchemist",
            date: "1 Mar 2022",
            price: "9780786290741",
            status: "returned",
            details:"view"
        },
        {
            id: "19616",
            user: "Gankes",
            book:"The Girl with no dream",
            date: "22 Apr 2022",
            price: "9780786435786",
            status: "pending",
            details:"view"
        },
        {
            id: "19622",
            user: "Jaganathan",
            book:"One Piece ",
            date: "5 Feb 2022",
            price: "9780786095689",
            status: "returned",
            details:"view"
        },
        {
            id: "19635",
            user: "Murali",
            book:"Percy Jackson vol-1",
            date: "22 Jun 2022",
            price: "9780786187492",
            status: "pending",
            details:"view"
        },
        {
            id: "19610",
            user: "Damian Nithish",
            date: "25 Dec 2021",
            book:"Harry Potter Goblet of Fire",
            price: "9780786838624",
            status: "overdue",
            details:"view"
        },
        {
            id: "19613",
            user: "Deenadayalan",
            book:"Game Of Thrones",
            date: "1 Mar 2022",
            price: "9780786290722",
            status: "returned",
            details:"view"
        },
        {
            id: "19616",
            user: "Gankes",
            book:"Houses Of Dragon",
            date: "22 Apr 2022",
            price: "9780786435213",
            status: "pending",
            details:"view"
        },
        {
            id: "19622",
            user: "Jaganathan",
            book:"Dragon Ball z Super",
            date: "5 Feb 2022",
            price: "9780786095123",
            status: "returned",
            details:"view"
        },
        {
            id: "19635",
            user: "Murali",
            book:"Breaking Bad",
            date: "22 Jun 2022",
            price: "9780786187432",
            status: "pending",
            details:"view"
        },
        {
            id: "19610",
            user: "Damian Nithish",
            date: "25 Dec 2021",
            book:"The Half Girlfriend",
            price: "9780786838123",
            status: "overdue",
            details:"view"
        },
        {
            id: "19613",
            user: "Deenadayalan",
            book:"The Flash",
            date: "1 Mar 2022",
            price: "9780786290147",
            status: "returned",
            details:"view"
        },
        {
            id: "19616",
            user: "Gankes",
            book:"Broklyyn",
            date: "23 Dec 2022",
            price: "9781236435786",
            status: "pending",
            details:"view"
        },
        {
            id: "19622",
            user: "Jaganathan",
            book:"Two States",
            date: "6 Mar 2022",
            price: "97807867495689",
            status: "returned",
            details:"view"
        },
        {
            id: "19635",
            user: "Murali",
            book:"Paper Towns",
            date: "05 Apr 2022",
            price: "9780788617492",
            status: "pending",
            details:"view"
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
const status = [
    { label: "Overdue", value: 1 },
    { label: "Returned", value: 2 },
    { label: "Pending", value: 3 }
  ];
const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.book}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        
        <td>
            
        <select name="status" id="status">
            <option value={item.status}>{item.status}</option>
          <option value="returned">returned</option>
          <option value="pending">pending</option>
          <option value="overdue">overdue</option>
        </select>
        </td>
        <td><a href='/details'>{item.details}</a></td>
       
    </tr>
)

const Circulation1 = (props) => {
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
                                <h2 className="page-header">Circulation</h2>
                                <div>
                                <div className="card" style={mystyle69}>
                        <div className="card__header">
                            <h3>Books Checked Out/In</h3>
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

export default Circulation1