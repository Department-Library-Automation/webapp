import React, {useEffect} from 'react'
import './layout/layout.css'
import { useSelector, useDispatch } from 'react-redux'
import ThemeAction from '../redux/actions/ThemeAction'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './home'
import Dashboard from '../pages/Dashboard'
import Dashboard1 from '../pages/Dashboard1'
import Circulation from '../pages/Circulation'
import Circulation1 from '../pages/Circulation1'
import Map from '../pages/Map'
import Map1 from '../pages/Map1'
import MainPage from '../MainPage'
import MainPage1 from '../MainPage1'
import Magazine from '../pages/Magazine'
import Magazine1 from '../pages/Magazine1'
import Student from '../pages/Student'
import Student1 from '../pages/Student1'
import Webopac from '../pages/Webopac'
import Webopac1 from '../pages/Webopac1'
import Library from '../pages/Library'
import Membership from '../pages/Membership'
import Membership1 from '../pages/Membership1'
import Settings from '../pages/Settings'
import Settings1 from '../pages/Settings1'
import SimpleMap from '../pages/SimpleMap'
import Profile from '../pages/Profile'
import Profile1 from '../pages/Profile1'
import Wallet from '../pages/Wallet'
import Wallet1 from '../pages/Wallet1'
import Logout from '../pages/Logout'
import About from '../pages/about'
import About1 from '../pages/about1'
import Faq from '../pages/faq'
import Contact from '../pages/contact'
import Pay from '../pages/Pay'
import Details from '../pages/Details'
import Faq1 from '../pages/faq1'
import Contact1 from '../pages/contact1'
import Details1 from '../pages/Details1'

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
                <Route exact path='/main1' element={<MainPage1/>}/>
                <Route  path='/dashboard' element={<Dashboard/>}/>
                <Route  path='/dashboard1' element={<Dashboard1/>}/>
                <Route  path='/circulation' element={<Circulation/>}/>
                <Route  path='/circulation1' element={<Circulation1/>}/>
                <Route  path='/map' element={<Map/>}/>
                <Route  path='/map1' element={<Map1/>}/>
                <Route  path='/magazine' element={<Magazine/>}/>
                <Route  path='/magazine1' element={<Magazine1/>}/>
                <Route  path='/student' element={<Student/>}/>
                <Route  path='/student1' element={<Student1/>}/>
                <Route  path='/webopac' element={<Webopac/>}/>
                <Route  path='/webopac1' element={<Webopac1/>}/>
                <Route  path='/library' element={<Library/>}/>
                <Route  path='/membership' element={<Membership/>}/>
                <Route  path='/membership1' element={<Membership1/>}/>
                <Route  path='/settings' element={<Settings/>}/>
                <Route  path='/settings1' element={<Settings1/>}/>
                <Route  path='/simpleMap' element={<SimpleMap/>}/>
                <Route  path='/profile' element={<Profile/>}/>
                <Route  path='/profile1' element={<Profile1/>}/>
                <Route  path='/wallet' element={<Wallet/>}/>
                <Route  path='/wallet1' element={<Wallet1/>}/>
                <Route  path='/logout' element={<Logout/>}/>
                <Route  path='/about' element={<About/>}/>
                <Route  path='/about1' element={<About1/>}/>
                <Route  path='/contact' element={<Contact/>}/>
                <Route  path='/contact1' element={<Contact1/>}/>
                <Route  path='/faq' element={<Faq/>}/>
                <Route  path='/faq1' element={<Faq1/>}/>
                <Route  path='/pay' element={<Pay/>}/>
                <Route  path='/details' element={<Details/>}/>
                <Route  path='/details1' element={<Details1/>}/>


            </Routes>
        </Router>
    )
}

export default Routing
