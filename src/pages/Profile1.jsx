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


import Group from '../components/Group';
import ColorBox from '../components/ColorBox';
import { months, calcButtonTextColor } from '../components/tools';
import UserProfile from '../pages/UserProfile';
// import EditableUserProfile from '../components/EditableUserProfile';
import EditableUserProfile from '../components/EditableUserProfile';

const animals = [
    "Aardvark",
    "Albatross",
    "Alpaca",
    "Alligator",
    "Anchovie",
    "Angelfish",
    "Ant",
    "Antelope",
    "Armadillo",
    "Aurochs",
    "Axolotl"
]

function randomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function randomName() {
    return "Anonymous " + animals[Math.floor(Math.random() * animals.length)]
}

const Profile1 = (props) => {
    const now = new Date(Date.now());
    const defaultBirthday = new Date(now.getTime() + 86400000);

    const [editMode, setEditMode] = useState(false);

    const [name, setName] = useState(randomName());
    const [month, setMonth] = useState(defaultBirthday.getMonth());
    const [day, setDay] = useState(defaultBirthday.getDate());
    const [color, setColor] = useState(randomColor());

    const stored = {name, month, day, color};
    const isBirthdayToday = now.getMonth() === month && now.getDate() === day;

    function handleEditComplete(result) {
        console.log("handleEditComplete", result);
        if (result != null) {
            setName(result.name);
            setMonth(result.month);
            setDay(result.day);
            setColor(result.color);
        }        
        setEditMode(false);
    }

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
                        <h2 className="page-header">Profile</h2>
                        <div className='card'>
                            {/* <UserProfile/> */}
                            {
                                editMode
                                    ? <>
                                        <h1>My Profile</h1>
                                        <EditableUserProfile
                                                stored={stored}
                                                editCompleteCallback={handleEditComplete}                            
                                        />
                                    </>
                                    : <>
                                        {
                                            isBirthdayToday
                                                ? <div className="birthday">Happy Birthday!</div>
                                                : <h1>My Profile</h1>
                                        }
                                        <UserProfile
                                                stored={stored}
                                                startEditCallback={() => setEditMode(true)}
                                        />
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile1
