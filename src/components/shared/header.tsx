"use client";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import "./header.scss";

const Header = () => {
    const [isResized, setIsResized] = useState(false);
    const toggleSidebar = () => {
        const sidebar = document.getElementsByClassName("sidebar")[0];
        if (isResized) {
            sidebar.classList.remove("close");
            setIsResized(false);
        } else {
            sidebar.classList.add("close");
            setIsResized(true);
        }
    };

    return (
        <div className="header">
            <div className="toggle-menu" onClick={toggleSidebar}>
                {isResized ? <FiMenu /> : <AiOutlineClose />}
            </div>
            <div className="user-info">
                <span className="user-name">ali</span>
                <span className="user-image"></span>
                <span className="user-dropdown">
                    <MdOutlineKeyboardArrowDown />
                </span>
            </div>
        </div>
    );
};

export default Header;
