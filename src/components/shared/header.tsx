"use client";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import "./header.scss";

const Header = () => {
    const [isResized, setIsResized] = useState(false);
    const toggleSidebar = () => {
        const element = document.getElementsByClassName("sidebar")[0];
        const subMenuIcons = document.getElementsByClassName("submenu-icon");
        const texts = document.getElementsByClassName("item-title");
        const title = document.getElementsByTagName("h3")[0];
        const settings = document.getElementsByClassName("settings")[0];
        if (isResized) {
            element.style.width = "200px";
            title.style.display = "block";
            settings.style.flexDirection = "row";
            for (let i = 0; i < texts.length; i++) {
                texts[i].style.display = "block";
            }
            for (let i = 0; i < subMenuIcons.length; i++) {
                subMenuIcons[i].style.display = "block";
            }
            setIsResized(false);
        } else {
            element.style.width = "50px";
            title.style.display = "none";
            settings.style.flexDirection = "column";
            for (let i = 0; i < texts.length; i++) {
                texts[i].style.display = "none";
            }
            for (let i = 0; i < subMenuIcons.length; i++) {
                subMenuIcons[i].style.display = "none";
            }
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
