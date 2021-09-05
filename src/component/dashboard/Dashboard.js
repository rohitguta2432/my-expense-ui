import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import Axios from 'axios';
import { ENV } from '../environment/EnvrUrl'
import CanvasJSReact from '../../assets/canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Dashboard = () => {
    const [chartData, setChartData] = useState([{
        label: "",
        y: ''
    }]);
    const chartRef = React.createRef();

    useEffect(() => {
        Axios.get(ENV.URL + 'expense/monthly')
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
            indexLabelFontSize: 14,
            indexLabel: "{label} - {y}%",
            dataPoints: chartData
        }]
    }
    return (
        <>
           <CanvasJSChart options={options}
           ref = {chartRef} />
        </>
    )
}

export default Dashboard
