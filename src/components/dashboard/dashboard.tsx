"use client";
import React from "react";
import SalesStatistics from "@/components/dashboard/sales-statistics/salesStatistics";
import ViewsStatistics from "@/components/dashboard/views-statistics/viewsStatistics";

import "./dashboard.scss";

const Dashboard = () => {
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
                        <SalesStatistics />
                    </div>
                </div>
                <div className="card">
                    <div className="chart">
                        <ViewsStatistics />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;
