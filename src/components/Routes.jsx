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
import Customers from '../pages/Customers'
import MainPage from '../MainPage'

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
                <Route path='/customers' component={Customers}/>
                
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
