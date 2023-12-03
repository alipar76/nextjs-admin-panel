"use client";
import React from "react";
import moment from "moment";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

import "./dashboard.scss";

Chart.register(...registerables);

const options = {
    plugins: {
        title: {
            display: true,
            text: "Sales amount in last 7 days",
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
};

const Dashboard = () => {
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
                label: "Sales amount ($)",
                data: [12, 15, 3, 5, 2, 10, 7],
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
            },
        ],
    };

    return (
        <main className="content">
            <h4>Dashboard</h4>
            <div className="dashboard-general-info">
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
            </div>
            <div className="dashboard-chart-section">
                <div className="card">
                    <div className="chart">
                        <Line
                            options={options}
                            data={data}
                            style={{
                                padding: "20px",
                            }}
                        />
                    </div>
                </div>
                <div className="card"></div>
            </div>
        </main>
    );
};

export default Dashboard;
