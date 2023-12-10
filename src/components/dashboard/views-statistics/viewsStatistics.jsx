import React from "react";
import moment from "moment";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";

import "./viewsStatistics.scss";

Chart.register(...registerables);

const options = {
    plugins: {
        title: {
            display: true,
            text: "Views statistics in last 7 days",
        },
    },
    responsive: true,
    scales: {
        x: {
            stacked: true,
            grid: {
                display: false,
            },
        },
        y: {
            stacked: true,
            grid: {
                display: false,
            },
        },
    },
    maintainAspectRatio: false,
};

const ViewsStatistics = () => {
    let last7Days = [];
    let currentDate = moment();
    for (let i = 0; i < 7; i++) {
        // Subtract 'i' days from the current date
        let date = currentDate.clone().subtract(i, "days");

        // Format the date in MM/dd format and push it to the array
        last7Days.push(date.format("MM-DD"));
    }
    const labels = last7Days.reverse();

    const data = {
        labels,
        datasets: [
            {
                label: "Total views",
                data: [150, 110, 200, 70, 125, 170, 100],
                fill: false,
                borderColor: "rgb(51, 153, 255)",
                tension: 0.1,
            },
        ],
    };
    return (
        <div>
            <Line
                options={options}
                data={data}
                style={{
                    padding: "20px",
                }}
            />
        </div>
    );
};

export default ViewsStatistics;
