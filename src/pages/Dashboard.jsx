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
import Clock from 'react-live-clock';


const chartOptions = {
    series: [{
        name: 'No. of Users',
        data: [387,372,204,391,362,285,334,191,360]
    }, {
        name: 'Total Time Spent',
        data: [800, 967, 732, 987, 932, 845, 897, 935, 763, 921]
    }],
    options: {
        color: ['#6ab04c', '#6ab04c'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const mystyle68 = {
    height:"10%"
   };

const mystyle69 = {
    marginLeft:"5%",
    width:"90%"
   };
   const mystyle70 = {
    marginLeft:"8%",
    width:"40%"
   };
   const mystyle71 = {
    marginLeft:"7%",
    width:"40%"
   };

const slideImages = [
    'images/circ4.jpg',
    'images/circ5.jpg',
    'images/circ2.jpg'
  ];

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
        "ISBN number",
        "date",
        "status"
    ],
    body: [
        {
            id: "19610",
            user: "Damian Nithish",
            date: "25 Dec 2021",
            price: "9780786838653",
            status: "overdue"
        },
        {
            id: "19613",
            user: "Deenadayalan",
            date: "1 Mar 2022",
            price: "9780786290741",
            status: "returned"
        },
        {
            id: "19616",
            user: "Gankes",
            date: "22 Apr 2022",
            price: "9780786435786",
            status: "pending"
        },
        {
            id: "19622",
            user: "Jaganathan",
            date: "5 Feb 2022",
            price: "9780786095689",
            status: "returned"
        },
        {
            id: "19635",
            user: "Murali",
            date: "22 Jun 2022",
            price: "9780786187492",
            status: "pending"
        }
    ]
}
const lilist ={
    position: 'relative',
    display: 'inline-block',
    width: '200px',
    height: '100px'
};


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
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status}/>
        </td>
    </tr>
)

const Dashboard = (props) => {
    const [calValue, calOnChange] = useState(new Date());
    const onClickDay = (dayVal) => {
        let day = dayVal.getDay()
        let date = dayVal.getDate()
        let month = dayVal.getMonth()
        let year = dayVal.getFullYear()

        alert(`${date}-${month}-${year}`)
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
            <h2 className="page-header">Dashboard</h2>
            <div>
                <Slide easing="ease">
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(/${slideImages[0]})`}}>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(/${slideImages[1]})`}}>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(/${slideImages[2]})`}}>
                        </div>
                    </div>
                </Slide>
                <br></br>
                <br></br>
            </div>
            <div className="row">
                <img src=''></img>
                <div className="col-6">
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div className="col-6" key={index}>
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        {/* chart */}
                        <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: { mode: 'dark'}
                            } : {
                                ...chartOptions.options,
                                theme: { mode: 'dark'}
                            }}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
                
                <div className="row" >
                    <div className="card" style={mystyle69}>
                        <div className="card__header">
                            <h3>latest orders</h3>
                        </div>
                        <div className="card__body" >
                            <Table
                                headData={latestOrders.header}
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={latestOrders.body}
                                renderBody={(item, index) => renderOrderBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                    <div className='card ' style={mystyle70} >
                        <h3><center>Calender</center></h3>
                        <br></br>
                        <br></br>
                    <center><Calendar onChange={calOnChange} value={calValue} onClickDay={onClickDay} /></center>
                    </div>
                    <div className='card' style={mystyle71}>
                        <div style={{marginLeft:"7%",height:"10%"}}>
                            <h2 >Working Hours </h2>
                             <h3><center><i class='bx bx-time-five' ></i>
                    <Clock format={'HH:mm:ss'} ticking={true} timezone={'Ind'} /></center></h3>
                       
                    </div>
                    <br></br>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <div>
                        <li>Mon - Fri (8AM to 10PM) </li>
                        <li>Sat & Sun (7AM to 7PM) </li>
                        <li>Special Event (9AM to 8PM) </li>
                        
                    </div>
                    </div>
                    
                </div>
                <br></br>
                <br></br>
                <br></br>
                                        <div className='row'>
                                            
                                            <div className='col-6'>
                                                <hr></hr>
                                                <h2 style={{marginRight:"60%"}}>Contact Details:<br></br><br></br></h2>
                                                <p>Registrar’s Office : +91-422-2685111<br></br>
                                                Campus Director’s Office : +91-422-2685010<br></br>
                                                Corporate and Industry Relations  :  +91-422-2685005, +91-422-2685004<br></br>
                                                Human Resource Director's office : +91-422-2685031</p><br></br><hr></hr><br></br>
                                                <p><h3>Amrita School of Engineering :</h3><br></br>
                                                Dean’s Office : +91-422-2685502<br></br>
                                                Dy. Dean’s Office : +91-422-2685503<br></br>
                                                Administrative Office : +91-422-2685509<br></br>
                                                Accounts Office : +91-422-2685072<br></br>
                                                Dy. Controller’s Office : +91-422-2685064<br></br>
                                                Professor of Students Welfare : +91-422-2685050</p><br></br><hr></hr><br></br>
                                                <p><h3>Amrita School of Business :</h3><br></br>
                                                    Chairperson Office : +91-422-2685401<br></br>
                                                    Administrative Office : +91-422-2685402<br></br>
                                                    Admission Office : +91-422-8685407, +91-422-8685410 <br></br>
                                                    Dy. Controller’s Office : +91-422-2685439<br></br>
                                                    Post Graduate Programs and Ph.D Office : +91-422-2685403<br></br></p>
                                            </div>
                                            <div className='col-6'>
                                                <hr></hr>
                                                <p><br></br><br></br><h3>Address:</h3>Amrita Vishwa Vidyapeetham,<br></br><br></br>
                                                    Coimbatore Campus,<br></br>
                                                    Amritanagar PO, Coimbatore 641112<br></br>
                                                    Tel  : +91-422-2685000</p>
                                                    
                                            </div>
                                            
                                                <br></br>
                                                <br></br>
                                                <h1><li style={lilist}><a href="http://www.facebook.com" target="_blank"><i class='bx bxl-facebook-circle' ></i></a></li>
                                                <li style={lilist}><a href="http://www.twitter.com" target="_blank"><i class='bx bxl-twitter' ></i></a></li>
                                                <li style={lilist}><a href="http://www.instagram.com" target="_blank"><i class='bx bxl-instagram' ></i></a></li>
                                                <li style={lilist}><a href="http://www.linkedin.com" target="_blank"><i class='bx bxl-linkedin' ></i></a></li></h1>
                                                
                                                <p>Address: Amrita Vishwa Vidyapeetham,Coimbatore Campus,Amritanagar PO, Coimbatore 641112, Tel  : +91-422-2685000</p>
                                                
                                            
                                            
                                        </div>
            </div>
        </div>

        </div>
        </div>
        </div>
    )
}

export default Dashboard
