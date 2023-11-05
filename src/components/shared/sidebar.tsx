import React from "react";
import { AiFillCrown, AiOutlineHome } from "react-icons/ai";
import { BsFillBasket2Fill } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import { FaRegComments } from "react-icons/fa6";
import { MdEditNote, MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./sidebar.scss";
import Link from "next/link";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="main">
                <div className="header">
                    <AiFillCrown size={25} />
                    <h3>Admin</h3>
                </div>
                <nav className="menu">
                    <ul>
                        <li className="item">
                            <Link href="#">
                                <AiOutlineHome size={20} />
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li className="item">
                            <Link href="#">
                                <BsFillBasket2Fill size={20} />
                                <span>Products</span>
                                <MdOutlineKeyboardArrowRight />
                            </Link>
                            <ul className="dropdown">
                                <li className="dropdown-item">
                                    <Link href="#">list</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link href="#">add</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="item">
                            <Link href="#">
                                <BiCategoryAlt size={20} />
                                <span>Categories</span>
                                <MdOutlineKeyboardArrowRight />
                            </Link>
                            <ul className="dropdown">
                                <li className="dropdown-item">
                                    <Link href="#">list</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link href="#">add</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="item">
                            <Link href="#">
                                <FaRegComments size={20} />
                                <span>Comments</span>
                            </Link>
                        </li>
                        <li className="item">
                            <Link href="#">
                                <MdEditNote size={20} />
                                <span>Blogs</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="settings"></div>
        </div>
    );
};

export default Sidebar;
