"use client";
import React from "react";
import SalesStatistics from "@/components/dashboard/sales-statistics/salesStatistics";
import ViewsStatistics from "@/components/dashboard/views-statistics/viewsStatistics";

import { LuDollarSign } from "react-icons/lu";
import { FaUser } from "react-icons/fa6";
import { BsBasket3 } from "react-icons/bs";
import { SlBasketLoaded } from "react-icons/sl";

import "./dashboard.scss";

const Dashboard = () => {
    return (
        <main className="content">
            <h4>Dashboard</h4>
            <div className="dashboard-general-info">
                <div className="card">
                    <div>
                        <div className="income-icon">
                            <LuDollarSign />
                        </div>
                    </div>
                    <div>
                        <div className="card-title">Total income</div>
                        <div className="card-value">356$</div>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <div className="income-icon">
                            <FaUser />
                        </div>
                    </div>
                    <div>
                        <div className="card-title">Users</div>
                        <div className="card-value">1251</div>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <div className="income-icon">
                            <BsBasket3 />
                        </div>
                    </div>
                    <div>
                        <div className="card-title">Orders</div>
                        <div className="card-value">452</div>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <div className="income-icon">
                            <SlBasketLoaded />
                        </div>
                    </div>
                    <div>
                        <div className="card-title">Products</div>
                        <div className="card-value">756</div>
                    </div>
                </div>
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
