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

import TextField from "@mui/material/TextField";
import List from "../components/List"
import "../pages/Searchstyle.css";

import data  from "../assets/JsonData/mock_data.json";
import { fontSize } from '@mui/system';
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import "./searchtitle.css"

const Webopac1 = (props) => {
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
                names: "Percy Jackson 1 The Lightning Thief",
                author: "Rick Riordan",
                isbn: "9780786838653",
                view: <Link to="../files/Percy Jackson 1 The Lightning Thief.pdf" target="blank" >View</Link>,
                down: <Link to="../files/Percy Jackson 1 The Lightning Thief.pdf" target="blank" download>Download</Link>
            },
            {
                names: "Percy Jackson 2 The Sea Of Monsters",
                author: "Rick Riordan",
                isbn: "9780786290741",
                view: <Link to="../files/Percy Jackson 2 The Sea Of Monsters.pdf" target="blank" >View</Link>,
                down: <Link to="../files/Percy Jackson 2 The Sea Of Monsters.pdf" target="blank" download>Download</Link>
            },
            {
                names: "Percy Jackson 3 The Titans Curse",
                author: "Rick Riordan",
                isbn: "9780786435786",
                view: <Link to="../files/Percy Jackson 3 The Titans Curse.pdf" target="blank" >View</Link>,
                down: <Link to="../files/Percy Jackson 3 The Titans Curse.pdf" target="blank" download>Download</Link>
            },
            {
                names: "Percy Jackson 4 The Battle Of The Labyrinth",
                author: "Rick Riordan",
                isbn: "9780786095689",
                view: <Link to="../files/Percy Jackson 4 The Battle Of The Labyrinth.pdf" target="blank" >View</Link>,
                down: <Link to="../files/Percy Jackson 4 The Battle Of The Labyrinth.pdf" target="blank" download>Download</Link>
            },
            {
                names: "Percy Jackson 5 The Last Olympian",
                author: "Rick Riordan",
                isbn: "9780786187492",
                view: <Link to="../files/Percy Jackson 5 The Last Olympian.pdf" target="blank" >View</Link>,
                down: <Link to="../files/Percy Jackson 5 The Last Olympian.pdf" target="blank" download>Download</Link>
            },
            {
                names: "Percy Jackson Heroes Of Olympus The House Of Hades",
                author: "Rick Riordan",
                isbn:"9780816705528",
                view: <Link to="../files/Percy Jackson Heroes Of Olympus The House Of Hades.pdf" target="blank" >View</Link>,
                down: <Link to="../files/Percy Jackson Heroes Of Olympus The House Of Hades.pdf" target="blank" download>Download</Link>
            },
            {
                names: "Percy Jackson The Heroes Of Olympus Blood Of Olympus",
                author: "Rick Riordan",
                isbn:"9780816095532",
                view: <Link to="../files/Percy Jackson The Heroes Of Olympus Blood Of Olympus.pdf" target="blank" >View</Link>,
                down: <Link to="../files/Percy Jackson The Heroes Of Olympus Blood Of Olympus.pdf" target="blank" download>Download</Link>
            },
            {
                names: "The Heroes Of Olympus 1 The Lost Hero",
                author: "Rick Riordan",
                isbn:"9780816619045",
                view: <Link to="../files/The Heroes Of Olympus 1 The Lost Hero.pdf" target="blank" >View</Link>,
                down: <Link to="../files/The Heroes Of Olympus 1 The Lost Hero.pdf" target="blank" download>Download</Link>
            },
            {
                names: "The Heroes Of Olympus 2 The Son Of Neptune",
                author: "Rick Riordan",
                isbn:"9780816187645",
                view: <Link to="../files/The Heroes Of Olympus 2 The Son Of Neptune.pdf" target="blank" >View</Link>,
                down: <Link to="../files/The Heroes Of Olympus 2 The Son Of Neptune.pdf" target="blank" download>Download</Link>
            },
            {
                names: "The Heroes Of Olympus 3 The Mark Of Athena",
                author: "Rick Riordan",
                isbn:"9780816092577",
                view: <Link to="../files/The Heroes Of Olympus 3 The Mark Of Athena.pdf" target="blank" >View</Link>,
                down: <Link to="../files/The Heroes Of Olympus 3 The Mark Of Athena.pdf" target="blank" download>Download</Link>
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

    

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
        return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
        setFilteredData([]);
    } else {
        setFilteredData(newFilter);
    }
    };
    

    return (
        <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                    <Sidebar1 {...props} />
                    <div className="layout__content">
                        <TopNav1/>
                        <div className="layout__content-main">
                            <div>
                                <h2 className="page-header">Webopac</h2>
                                
                                <div className="main">
                                    <div className="search">
                                        <div className="searchInputs">
                                            <select name="status" id="status">
                                                <option value="returned">Search by Title</option>
                                                <option value="pending">Search by Author</option>
                                                </select>
                                            <input
                                            type="text"
                                            placeholder="Search..."
                                            value={wordEntered}
                                            onChange={handleFilter}
                                            />
                                            <div className="searchIcon">
                                            {filteredData.length === 0 ? (
                                                <SearchIcon />
                                            ) : (
                                                <CloseIcon id="clearBtn" onClick={clearInput} />
                                            )}
                                            </div>
                                        </div>
                                        {filteredData.length != 0 && (
                                            <div className="dataResult">
                                            {filteredData.slice(0, 15).map((value, key) => {
                                                return (
                                                <a className="dataItem" href={value.website} target="_blank">
                                                    <p>{value.title} </p>
                                                    <p>{value.author}</p>
                                                </a>
                                                );
                                            })}
                                            </div>
                                        )}
                                    </div>
                                    

                                </div>
                                <br></br>
                                <div className='card'>
                                    <div className='card_header'>
                                        <h3>Book List</h3>
                                    </div>
                                    <div className='card_body'>
                                        <Table
                                            headData={books.header}
                                            renderHead={(item, index) => renderOrderHead(item,index)}
                                            bodyData={books.body}
                                            renderBody={(item, index) => renderOrderBody(item,index)}
                                        />
                                        <div className="card__footer">
                                            <a href="https://rickriordan.com/series/percy-jackson-and-the-olympians/" target="blank">view all</a>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default Webopac1