import React from "react";
import Dashboard from "@/components/dashboard/dashboard";

import { Metadata } from "next";

import "./global.scss";

export const metadata: Metadata = {
    title: "Admin Panel | Dashboard",
};

const Index = () => {
    return (
        <>
            <Dashboard />
        </>
    );
};

export default Index;
