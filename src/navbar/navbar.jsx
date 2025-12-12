import React from 'react';
import './navbar.css'

import logo from '../assets/logoTL.png';
import iconXmas from '../assets/icon-xmas.png';
import iconXmas2 from '../assets/icon-xmas2.png';
import { FaSearch } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { BsFillBagFill } from "react-icons/bs";

const Navbar = () => {
    return (
        <div id="navbar">
            <div className="header">
                <div className="logo">
                    <a href="#"><img src={logo} alt="ThienLong"/></a>

                    <div className="icon-xmas2">
                        <img src={iconXmas2} alt=""/>
                    </div>
                </div>

                <div className="search">
                    <div className="search-input">Tìm kiếm sản phẩm...</div>
                    <div className="right-icon"><FaSearch /></div>
                </div>

                <div className="contact-user">
                    <div className="icon-xmas">
                        <img src={iconXmas} alt=""/>
                    </div>
                    
                    <ul className="list-contact-user">
                        <li className="item-contact-user" style={{width: 100}}>
                        </li>

                        <li className="item-contact-user">
                            <div className="icon"><BiSolidPhoneCall /></div>
                            <div className="name">
                                <p className="first">1900 866 819</p>
                                <span className="second">Hỗ trợ khách hàng</span>
                            </div>
                        </li>

                        <li className="item-contact-user margin">
                            <div className="icon"><FaUser /></div>
                            <div className="name">
                                <p className="first">Đăng nhập</p>
                                <span className="second">Đăng ký</span>
                            </div>
                        </li>

                        <li className="item-contact-user">
                            <div className="cart flex-center">
                                <BsFillBagFill />
                                <div className="count flex-center">0</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;