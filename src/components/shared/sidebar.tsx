import React from "react";
import Link from "next/link";

import { AiFillCrown, AiOutlineHome } from "react-icons/ai";
import { BsFillBasket2Fill, BsGear } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { FaRegComments } from "react-icons/fa6";
import { MdEditNote, MdOutlineKeyboardArrowRight } from "react-icons/md";

import "./sidebar.scss";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="main-menu">
                <div className="title">
                    <AiFillCrown size={25} />
                    <h3>Admin</h3>
                </div>
                <nav className="menu">
                    <ul>
                        <li className="item">
                            <Link href="#">
                                <AiOutlineHome size={18} />
                                <span className="item-title">Dashboard</span>
                            </Link>
                        </li>
                        <li className="item">
                            <Link href="#">
                                <BsFillBasket2Fill size={18} />
                                <span className="item-title">Products</span>
                                <MdOutlineKeyboardArrowRight className="submenu-icon" />
                            </Link>
                        </li>
                        <li className="item">
                            <Link href="#">
                                <BiCategoryAlt size={18} />
                                <span className="item-title">Categories</span>
                                <MdOutlineKeyboardArrowRight className="submenu-icon" />
                            </Link>
                        </li>
                        <li className="item">
                            <Link href="#">
                                <FaRegComments size={18} />
                                <span className="item-title">Comments</span>
                            </Link>
                        </li>
                        <li className="item">
                            <Link href="#">
                                <MdEditNote size={18} />
                                <span className="item-title">Blogs</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="settings">
                <Link href="#">
                    <BsGear size={18} />
                </Link>
                <Link href="#">
                    <CiLogout size={18} />
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
