"use client";
import React, { useState } from "react";
import Link from "next/link";

import { AiOutlineClose } from "react-icons/ai";
import { BsGear } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
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
                <div className="user-info-dropdown">
                    <ul>
                        <li>
                            <Link href="#">
                                <BsGear size={14} />
                                <span className="item-title">Settings</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <CiLogout size={14} />
                                <span className="item-title">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
