import React, {useEffect, useState} from 'react';
import './navbar.css';

import logo from '../assets/logoTL.png';
import iconXmas from '../assets/icon-xmas.png';
import iconXmas2 from '../assets/icon-xmas2.png';
import { FaSearch } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { BsFillBagFill } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import banner1 from '../assets/banner1.jpg'

import {API_URL} from "../service/API_URL.jsx";
import axios from "axios";

const Navbar = () => {
    const API = API_URL;
    const [cates, setCates] = useState([]);

    // Load Data Categories
    useEffect(() => {
        const loadCates = async () => {
            try {
                const result = await  axios.get(`${API}/categories`);
                setCates(result.data);
            } catch (e) {
                console.log("Load Categories: ", e);
            }
        }

        loadCates();
    }, []);

    // Add icon-down
    const renderIconDown = (cateId) => {
        if (cateId !== "cate6") return <FaChevronDown />;
        return null;
    };

    // Add position
    const position = (cateId) => {
      if (cateId === "cate1") return {position: "relative"};
      return {};
    };

    // Load cate.items by cate.id
    const getCateById = (cateId) => {
      return cates.find(c => c.id === cateId)?.items ?? null;
    };

    return (
        <div id="navbar">
            {/*  HEADER  */}
            <div className="header">
                <div className="logo">
                    <a href="#"><img src={logo} alt="ThienLong"/></a>

                    <div className="icon-xmas2">
                        <img src={iconXmas2} alt=""/>
                    </div>
                </div>

                <div className="search">
                    <input className="search-input" type="text" placeholder="Tìm kiếm sản phẩm..." required></input>
                    <div className="right-icon flex-center"><FaSearch /></div>
                </div>

                <div className="contact-user">
                    <div className="icon-xmas">
                        <img src={iconXmas} alt="iconXmax"/>
                    </div>
                    
                    <ul className="list-contact-user">
                        <li className="item-contact-user" style={{width: 100}}></li>

                        <li className="item-contact-user">
                            <div className="icon"><BiSolidPhoneCall /></div>
                            <div className="name">
                                <a className="first" href="#" title="1900 866 819">1900 866 819</a>
                                <span className="second">Hỗ trợ khách hàng</span>
                            </div>
                        </li>

                        <li className="item-contact-user margin">
                            <div className="icon"><FaUser /></div>
                            <div className="name">
                                <span>
                                    <a className="first" href="#" title="Đăng nhập">Đăng nhập</a>
                                </span>
                                <a className="second" href="#" title="Đăng ký">Đăng ký</a>
                            </div>
                        </li>

                        <li className="item-contact-user">
                            <div className="cart flex-center">
                                <a href="#" title="Giỏ hàng">
                                    <BsFillBagFill />
                                    <div className="count flex-center">0</div>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/*  CATEGORY  */}
            <div className="cate">
                <ul className="list-cate">
                    {cates && cates.length > 0 ? (
                            cates.map((cate) => (
                                <li key={cate.id} className="item-cate flex-center">
                                    <div className="icon flex-center" style={position(cate.id)}><img src={`${API}${cate.image}`} alt="icon-menu"/></div>
                                    <div className="name">{cate.name}</div>
                                    <div className="iconDown flex-center">{renderIconDown(cate.id)}</div>

                                    {/*  DROP DOWN CONTENT  */}
                                    {getCateById(cate.id) && getCateById(cate.id).length > 0 ? (
                                            <div className="dropdown-content">
                                                <div className="content">
                                                    <div className="content-left">
                                                        <ul className="menu-list">
                                                            <li className="menu-item">
                                                                <a href="#" title="sdf">{getCateById(cate.id)}</a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="content-right">
                                                        {/*<img src={banner1} alt=""/>*/}
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (<></>)
                                    }
                                </li>
                            ))
                        ) : (<h2>Đang tải...</h2>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;