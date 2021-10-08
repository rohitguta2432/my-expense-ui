import React from 'react'
import Dashboard from '../dashboard/Dashboard'
import Dashboardtable from '../dashboardtable/Dashboardtable'
import Navbar from '../navbar/Navbar'
import './Home.css'

const Home = () => {
    return (
        <>
        <div class="nakul"></div>
            <Navbar />
            <Dashboard />  
            <Dashboardtable />
        </>
    )
}

export default Home;
