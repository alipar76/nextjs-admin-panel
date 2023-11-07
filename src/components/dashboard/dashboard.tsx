import React from "react";

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
                <div className="card"></div>
                <div className="card"></div>
            </div>
        </main>
    );
};

export default Dashboard;
