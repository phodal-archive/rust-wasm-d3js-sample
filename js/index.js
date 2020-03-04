import * as d3 from "d3";
import RadarChart from "./graph/radarChart";

function renderChart(data) {
    var margin = {top: 50, right: 80, bottom: 50, left: 80},
        width = Math.min(700, window.innerWidth / 4) - margin.left - margin.right,
        height = Math.min(width, window.innerHeight - margin.top - margin.bottom);

    var radarChartOptions = {
        w: 290,
        h: 350,
        margin: margin,
        levels: 5,
        roundStrokes: true,
        color: d3.scaleOrdinal().range(["#26AF32", "#762712", "#2a2fd4"]),
        format: '.0f'
    };

    let svg_radar1 = RadarChart(".radarChart", data, radarChartOptions);
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
    let svg_radar2 = RadarChart(".radarChart2", data, radarChartOptions2);
}

import("../pkg/index.js")
    .then(wasm => {
        let matual = wasm.Matual.new(5);
        let originAlert = window.alert;
        window.alert = function(message) {
            renderChart(JSON.parse(message))
        };
        matual.get_data_from_alert();
        window.alert = originAlert;
    })
    .catch(console.error);
