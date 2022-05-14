import React, {useEffect} from 'react'
import './layout/layout.css'
import { useSelector, useDispatch } from 'react-redux'
import ThemeAction from '../redux/actions/ThemeAction'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './home'
import Dashboard from '../pages/Dashboard'
import Circulation from '../pages/Circulation'
import Map from '../pages/Map'
import MainPage from '../MainPage'
import Magazine from '../pages/Magazine'
import Student from '../pages/Student'
import Webopac from '../pages/Webopac'
import Library from '../pages/Library'
import Membership from '../pages/Membership'
import Settings from '../pages/Settings'
import SimpleMap from '../pages/SimpleMap'
import Profile from '../pages/Profile'
import Wallet from '../pages/Wallet'
import Logout from '../pages/Logout'
import About from '../pages/about'
import Faq from '../pages/faq'
import Contact from '../pages/contact'


const Routing = () => {
    const themeReducer = useSelector(state => state.ThemeReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(ThemeAction.setMode(themeClass))

        dispatch(ThemeAction.setColor(colorClass))
    }, [dispatch])


    return (
        <Router>
            <Routes>
                <Route  path='/' element={<Home/>}/>
                <Route exact path='/main' element={<MainPage/>}/>
                <Route  path='/dashboard' element={<Dashboard/>}/>
                <Route  path='/circulation' element={<Circulation/>}/>
                <Route  path='/map' element={<Map/>}/>
                <Route  path='/magazine' element={<Magazine/>}/>
                <Route  path='/student' element={<Student/>}/>
                <Route  path='/webopac' element={<Webopac/>}/>
                <Route  path='/library' element={<Library/>}/>
                <Route  path='/membership' element={<Membership/>}/>
                <Route  path='/settings' element={<Settings/>}/>
                <Route  path='/simpleMap' element={<SimpleMap/>}/>
                <Route  path='/profile' element={<Profile/>}/>
                <Route  path='/wallet' element={<Wallet/>}/>
                <Route  path='/settings' element={<Settings/>}/>
                <Route  path='/logout' element={<Logout/>}/>
                <Route  path='/about' element={<About/>}/>
                <Route  path='/contact' element={<Contact/>}/>
                <Route  path='/faq' element={<Faq/>}/>


            </Routes>
        </Router>
    )
}

export default Routing
