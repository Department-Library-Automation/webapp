import React, {useEffect} from 'react'

import './layout/layout.css'

import Sidebar from './sidebar/Sidebar'
import TopNav from './topnav/TopNav'
// import Routes from './Routes'
// import MainPage from '../MainPage'

import { BrowserRouter } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

// import ThemeAction from '../../redux/actions/ThemeAction'
import ThemeAction from '../redux/actions/ThemeAction'

import { Route, Switch } from 'react-router-dom'

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


const Routes = () => {
    const themeReducer = useSelector(state => state.ThemeReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(ThemeAction.setMode(themeClass))

        dispatch(ThemeAction.setColor(colorClass))
    }, [dispatch])


    return (
        <BrowserRouter>
            <Switch>
                {/* <Route path='/dashboard' exact component={Dashboard}/>
                <Route path='/customers' component={Customers}/> */}
                <Route exact path='/' component={MainPage}/>
                <Route exact path='/dashboard' component={Dashboard}/>
                <Route exact path='/circulation' component={Circulation}/>
                <Route exact path='/map' component={Map}/>
                <Route exact path='/magazine' component={Magazine}/>
                <Route exact path='/student' component={Student}/>
                <Route exact path='/webopac' component={Webopac}/>
                <Route exact path='/library' component={Library}/>
                <Route exact path='/membership' component={Membership}/>
                <Route exact path='/settings' component={Settings}/>
                <Route exact path='/simpleMap' component={SimpleMap}/>
                <Route exact path='/profile' component={Profile}/>
                <Route exact path='/wallet' component={Wallet}/>
                <Route exact path='/settings' component={Settings}/>
                <Route exact path='/logout' component={Logout}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/faq' component={Faq}/>


            </Switch>
        </BrowserRouter>
    )
}

export default Routes
