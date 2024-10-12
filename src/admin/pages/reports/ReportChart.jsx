import { useState } from "react";
import Chart from 'react-apexcharts';

const ReportChart = () => {
    const [data, setData] = useState({
        series: [
            {
                name: "Sales",
                data: [31, 40, 28, 51, 42, 82, 56]
            },
            {
                name: "Revenues",
                data: [11, 32, 45, 32, 34, 52, 41]
            },
            {
                name: "Customers",
                data: [15, 11, 32, 18, 9, 24, 11]
            }
        ],
        options: {
            chart: {
                height: 350,
                type: "area",
                toolbar: {
                    show: false
                }
            },
            markers: {
                size: 4
            },
            colors: ["#4154f1", "#2eca6a", "#ff771d"],
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.3,
                    opacityTo: 0.4,
                    stops: [0, 90, 100]
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "smooth",
                width: 2,
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "01 Jan 2024",
                    "02 Jan 2024",
                    "03 Jan 2024",
                    "04 Jan 2024",
                    "05 Jan 2024",
                    "06 Jan 2024",
                    "07 Jan 2024"
                ]
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy"
                }
            }
        }
    });

    return (
        <Chart
            options={data.options}
            series={data.series}
            type={data.options.chart.type}
            height={data.options.chart.height}
        />
    );
}

export default ReportChart;
