import React from 'react'
import Dashboard from '../dashboard/Dashboard'
import Dashboardtable from '../dashboardtable/Dashboardtable'
import Navbar from '../navbar/Navbar'
import './Home.css'

const Home = () => {
    return (
        <>
            <Navbar />
            <Dashboard />  
            <Dashboardtable />
        </>
    )
}

export default Home;
