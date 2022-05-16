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



const books =
    {
        header: [
            "Book name",
            "Author",
            "ISBN",
            "View",
            "Download"
        ],
        body: [
            {
                names: "Journal of Finance and Accounting",
                author: "Weli Imbiri",
                isbn: "9780786838653",
                view: <Link to="../files/financeaccounting.pdf" target="blank" >View</Link>,
                down: <Link to="../files/financeaccounting.pdf" target="blank" download>Download</Link>
            },
            {
                names: "Top finance journals",
                author: "Cnv Krishnan",
                isbn: "8231093290741",
                view: <Link to="../files/TopFinanceJournals.pdf" target="blank" >View</Link>,
                down: <Link to="../files/TopFinanceJournals.pdf" target="blank" download>Download</Link>
            },
            {
                names: "características dos principais periódicos, autores importantes e artigos mais citados",
                author: "Newton da Costa Jr",
                isbn: "9372626435938",
                view: <Link to="../files/RevistaBrasileiradeFinanas.pdf" target="blank" >View</Link>,
                down: <Link to="../files/RevistaBrasileiradeFinanas.pdf" target="blank" download>Download</Link>
            }
            
        ]
    }

    const books1 =
    {
        header: [
            "Book name",
            "Author",
            "ISBN",
            "View",
            "Download"
        ],
        body: [
            {
                names: "SARS-CoV-2 infection and venous thromboembolism after surgery",
                author: "Alonço Viana",
                isbn: "1432626435938",
                view: <Link to="../files/SARS-CoV-2infectionandvenousthromboembolismafter.pdf" target="blank" >View</Link>,
                down: <Link to="../files/SARS-CoV-2infectionandvenousthromboembolismafter.pdf" target="blank" download>Download</Link>
            },
            {
                names: "On the Role of Electronic Preprint Exchange in the Distribution of Scientific Literature",
                author: "Kristrún Thorlacius Gunnarsdóttir",
                isbn: "1724786838653",
                view: <Link to="../files/Scientific_Journal_Publications.pdf" target="blank" >View</Link>,
                down: <Link to="../files/Scientific_Journal_Publications.pdf" target="blank" download>Download</Link>
            },
            {
                names: "Ranking List for Scientists: From Heightening the Rat-Race to Fraying the Scientific Temper",
                author: "Mohamed Rela",
                isbn: "10283093290741",
                view: <Link to="../files/JPGM_112_21ECopy.pdf" target="blank" >View</Link>,
                down: <Link to="../files/JPGM_112_21ECopy.pdf" target="blank" download>Download</Link>
            }
            
            
        ]
    }

    const renderOrderHead = (item, index) => (
        <th key = {index}>{item}</th>
    )
    const renderOrderBody = (item, index) => (
        <tr key = {index}>
            <td>{item.names}</td>
            <td>{item.author}</td>
            <td>{item.isbn}</td>
            <td>{item.view}</td>
            <td>{item.down}</td>
        </tr>
    )

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
        'images/wire.jpg',
        'images/quint.jpg',
        'images/scroll.jpg'
      ];

      const slideImages1 = [
        'images/nakkiran.jpg',
        'images/thandhi.jpg',
        'images/aransei.jpg'
      ];

    // const themeReducer = useSelector(state => state.ThemeReducer.mode)
    const themeReducer = useSelector(state => state.ThemeReducer)

    const dispatch = useDispatch()
    
    const mystyle = {
 
        height:'30%',
        
        
       };
       const mystyle1 = {
        marginLeft:"5%"
       };
       const mystyle2 = {
        marginLeft:"10%"
       };
       const mystyle3 = {
        marginLeft:"8%"
       };
       const mystyle4 = {
        marginLeft:"10%"
       };
       const mystyle5 = {
        marginLeft:"8%"
       };
       const mystyle6 = {
        marginLeft:"6%"
       };
       const mystyle69 = {
        height:'10%',
        width:'10%'
       };
       
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
                            <div className='card'>
                                <h1 className="page-header">Magazines</h1>
                                <br></br>
                                <div className='card'>
                                <h2>Popular English Magazines</h2>
                                <br></br>
                                <div >
                                    <Slide easing="ease">
                                        <div className="each-slide" >
                                            <div className='slide-image' style={{'backgroundImage': `url(/${slideImages[0]})`}} onClick={() => openLinkInNewTab("https://www.thehindu.com/todays-paper/")}>
                                            </div>                                           
                                            
                                        </div>
                                        <div className="each-slide">
                                            <div style={{'backgroundImage': `url(/${slideImages[1]})`}} className='slide-image' onClick={() => openLinkInNewTab("https://indianexpress.com/todays-paper/")}>
                                            </div>
                                        </div>
                                        <div className="each-slide">
                                            <div style={{'backgroundImage': `url(/${slideImages[2]})`}} className='slide-image' onClick={() => openLinkInNewTab("https://thewire.in/")}>
                                            </div>
                                        </div>
                                        <div className="each-slide">
                                            <div style={{'backgroundImage': `url(/${slideImages[3]})`}} className='slide-image' onClick={() => openLinkInNewTab("https://www.thequint.com/")}>
                                            </div>
                                        </div>
                                        <div className="each-slide">
                                            <div style={{'backgroundImage': `url(/${slideImages[4]})`}} className='slide-image' onClick={() => openLinkInNewTab("https://scroll.in/")}>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                                </div>
                                <br></br>
                                
                                <br></br>
                                <div className='card'>
                                <h2>Popular Tamil Magazines</h2>
                                <br></br>
                                <div>
                                    <Slide easing="ease">
                                        <div className="each-slide" >
                                            <div className='slide-image' style={{'backgroundImage': `url(/${slideImages1[0]})`}} onClick={() => openLinkInNewTab("https://www.nakkheeran.in/")}>
                                            </div>
                                            
                                            
                                        </div>
                                        <div className="each-slide">
                                            <div style={{'backgroundImage': `url(/${slideImages1[1]})`}} className='slide-image' onClick={() => openLinkInNewTab("https://www.dailythanthi.com/")}>
                                            </div>
                                        </div>
                                        <div className="each-slide">
                                            <div style={{'backgroundImage': `url(/${slideImages1[2]})`}} className='slide-image' onClick={() => openLinkInNewTab("https://www.aransei.com/")}>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                                </div>
                                <br></br>
                                <br></br>
                                
                                <div className='card'>
                                    <h2>TOP Finance Journals</h2>
                                    <Table
                                            headData={books.header}
                                            renderHead={(item, index) => renderOrderHead(item,index)}
                                            bodyData={books.body}
                                            renderBody={(item, index) => renderOrderBody(item,index)}
                                        />

                                </div>

                                <br></br>
                                <br></br>
                                
                                <div className='card'>
                                <h2>TOP Science Journals</h2>
                                    <Table
                                            headData={books1.header}
                                            renderHead={(item, index) => renderOrderHead(item,index)}
                                            bodyData={books1.body}
                                            renderBody={(item, index) => renderOrderBody(item,index)}
                                        />

                                </div>

                                <br></br>
                                <br></br>
                                
                                <div className='card'>
                                <h2>Journals </h2>
                                <br></br>
                                    <div className='row'  >
                                        <div className='col-1' style={mystyle1}>
                                            politics
                                            
                                        </div>
                                        <div className='col-1' style={mystyle2}  >
                                            Sports
                                        </div>
                                        <div className='col-1' style={mystyle3}>
                                            Entertainment
                                        </div>
                                        <div className='col-1' style={mystyle4}>
                                            Crime
                                        </div>
                                        <div className='col-1' style={mystyle5}>
                                            Business
                                        </div>
                                        <div className='col-1' style={mystyle6}>
                                            Research paper
                                        </div>
                                        
                                    </div>
                                    <br></br>
                                    <hr></hr>
                                    <br></br>
                                    <div className='row'  >
                                        <div className='col-1' style={mystyle1}>
                                            <h4>State</h4>
                                            <a href='https://www.educationforindia.org/articles' target='_blank'><h4>Country</h4></a>
                                            <a href='https://www.en-hrana.org/category/news/?gclid=Cj0KCQjwg_iTBhDrARIsAD3Ib5h_BIGNxN4SBDWcSolw45KNL8qJhIrVTNl7vde0Jj_I_6lPqxtLZzQaAtM9EALw_wcB' target='_blank'><h4>Global</h4></a>
                                        </div>
                                        <div className='col-1' style={mystyle2}  >
                                        <a href='https://www.educationforindia.org/articles' target='_blank'><h4>Cricket</h4></a>
                                        <a href='https://www.educationforindia.org/articles' target='_blank'><h4>Football</h4></a>
                                        <a href='https://www.educationforindia.org/articles' target='_blank'><h4>Basketball</h4></a>
                                        <a href='https://www.educationforindia.org/articles' target='_blank'><h4>Tennis</h4></a>
                                        <a href='https://www.educationforindia.org/articles' target='_blank'><h4>Badminton</h4></a>
                                        <a href='https://www.educationforindia.org/articles' target='_blank'><h4>Swimming</h4></a>
                                        <a href='https://www.educationforindia.org/articles' target='_blank'><h4>Boxing</h4></a>
                                        </div>
                                        <div className='col-1' style={mystyle3}>
                                            <h4>Arts</h4>
                                            <h4>Literature</h4>
                                            <h4>Music</h4>
                                            <h4>Cinema</h4>
                                            <h4>Travel</h4>
                                            <h4>Food</h4>
                                        </div>
                                        <div className='col-1' style={mystyle4}>
                                            <h4>Organized</h4>
                                            <h4>Unorganized</h4>
                                            <h4>Law and order</h4>
                                            <h4>Civil</h4>
                                        </div>
                                        <div className='col-1' style={mystyle5}>
                                            <h4>Stock Market</h4>
                                            <h4>Gold Price</h4>
                                            <h4>Market Price</h4>
                                            
                                        </div>
                                        <div className='col-1' style={mystyle6}>
                                            <h4>Stock Market</h4>
                                            <h4>Gold Price</h4>
                                            <h4>Market Price</h4>
                                            
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default Magazine