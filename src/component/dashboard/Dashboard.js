import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import Axios from 'axios';
import { ENV } from '../environment/EnvrUrl'
import CanvasJSReact from '../../assets/canvasjs.react';
import './Dashboard.css'

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Dashboard = () => {
    const [chartData, setChartData] = useState([{
        label: "",
        y: ''
    }]);
    const token = localStorage.getItem('token');
    const chartRef = React.createRef();

    useEffect(() => {
        Axios.get(ENV.URL + 'expense/monthly', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                setChartData(response.data)
            }).catch((reponse) => {
                console.log(reponse);
            })
    }, [])
    //console.log(chartData)
    const options = {
        exportEnabled: false,
        animationEnabled: false,
        title: {
            text: "My Expenses"
        },
        data: [{
            type: "pie",
            startAngle: 75,
            toolTipContent: "<b>{lable} </b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 15,
            indexLabel: "{label} - {y}%",
            dataPoints: chartData
        }]
    }
    return (
        <>
        <div className="chart_dashboard">
            <CanvasJSChart options={options}
                ref={chartRef} />
                </div>
        </>
    )
}

export default Dashboard
