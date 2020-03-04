import * as d3 from "d3";
import RadarChart from "./radarChart";

function renderChart() {
    var margin = {top: 50, right: 80, bottom: 50, left: 80},
        width = Math.min(700, window.innerWidth / 4) - margin.left - margin.right,
        height = Math.min(width, window.innerHeight - margin.top - margin.bottom);

    //////////////////////////////////////////////////////////////
    ////////////////////////// Data //////////////////////////////
    //////////////////////////////////////////////////////////////

    var data = [
        {
            name: 'Allocated budget',
            axes: [
                {axis: 'Sales', value: 42},
                {axis: 'Marketing', value: 20},
                {axis: 'Development', value: 60},
                {axis: 'Customer Support', value: 26},
                {axis: 'Information Technology', value: 35},
                {axis: 'Administration', value: 20}
            ],
            color: '#26AF32'
        },
        {
            name: 'Actual Spending',
            axes: [
                {axis: 'Sales', value: 50},
                {axis: 'Marketing', value: 45},
                {axis: 'Development', value: 20},
                {axis: 'Customer Support', value: 20},
                {axis: 'Information Technology', value: 25},
                {axis: 'Administration', value: 23}
            ],
            color: '#762712'
        },
        {
            name: 'Further Test',
            axes: [
                {axis: 'Sales', value: 32},
                {axis: 'Marketing', value: 62},
                {axis: 'Development', value: 35},
                {axis: 'Customer Support', value: 10},
                {axis: 'Information Technology', value: 20},
                {axis: 'Administration', value: 28}
            ],
            color: '#2a2fd4'
        }
    ];

    console.log(data[0].color);

    //////////////////////////////////////////////////////////////
    ////// First example /////////////////////////////////////////
    ///// (not so much options) //////////////////////////////////
    //////////////////////////////////////////////////////////////
    var radarChartOptions = {
        w: 290,
        h: 350,
        margin: margin,
        levels: 5,
        roundStrokes: true,
        color: d3.scaleOrdinal().range(["#26AF32", "#762712", "#2a2fd4"]),
        format: '.0f'
    };

    // Draw the chart, get a reference the created svg element :
    let svg_radar1 = RadarChart(".radarChart", data, radarChartOptions);

    //////////////////////////////////////////////////////////////
    ///// Second example /////////////////////////////////////////
    ///// Chart legend, custom color, custom unit, etc. //////////
    //////////////////////////////////////////////////////////////
    var radarChartOptions2 = {
        w: 290,
        h: 350,
        margin: margin,
        maxValue: 60,
        levels: 6,
        roundStrokes: false,
        color: d3.scaleOrdinal().range(["#AFC52F", "#ff6600", "#2a2fd4"]),
        format: '.0f',
        legend: {title: 'Organization XYZ', translateX: 100, translateY: 40},
        unit: '$'
    };

    // Draw the chart, get a reference the created svg element :
    let svg_radar2 = RadarChart(".radarChart2", data, radarChartOptions2);
}

import("../pkg/index.js")
    .then(wasm => {
        let matual = wasm.Matual.new(5);
        matual.set(10);
        console.log(matual.get())
        renderChart()
    })
    .catch(console.error);
