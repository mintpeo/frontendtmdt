import React from 'react';
import './info.css'

import { IoLogoAppleAr } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { BsPostcardHeartFill } from "react-icons/bs";
import { BsBox2HeartFill } from "react-icons/bs";
import { BsFillPinMapFill } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/io5";
import faceIcon from "/src/assets/face1.gif"

const Info = () => {
    return (
        <div id="info">
            <div className="container">
                <div className="info-user">
                    <div className="ava"><div className="user-avatar">TM</div></div>
                    <div className="title"><i>Xin chào, <b>Trần Minh</b></i></div>

                    <div className="list-section">
                        <ul className="list-items">
                            <li className="item active">
                                <i><IoLogoAppleAr /></i>
                                <div className="name">Tổng quan tài khoản</div>
                            </li>

                            <li className="item">
                                <i><FaUser /></i>
                                <div className="name">Thông tin tài khoản</div>
                            </li>

                            <li className="item">
                                <i><BsPostcardHeartFill /></i>
                                <div className="name">Chương trình thành viên</div>
                            </li>

                            <li className="item">
                                <i><BsBox2HeartFill /></i>
                                <div className="name">Danh sách đơn hàng</div>
                            </li>

                            <li className="item">
                                <i><BsFillPinMapFill /></i>
                                <div className="name">Sổ địa chỉ</div>
                            </li>

                            <li className="item">
                                <i><IoLogOutOutline /></i>
                                <div className="name">Đăng xuất</div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="account-boxs">
                    {/* 1 */}
                    <div className="item-box">
                        <div className="item-box-info">
                            <div className="text">Ôi không, bạn chưa cập nhật đủ thông tin!</div>

                            <div className="icon-info">
                                <div className="icon" style={{backgroundImage: `url(${faceIcon})`}}></div>
                                <div className="btn">Cập nhật ngay</div>
                            </div>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className="item-box">
                        <div className="item-box-info">
                            <div className="text">Bạn đang có 1 sản phẩm trong giỏ hàng!</div>

                            <div className="icon-info">
                                <div className="icon" style={{backgroundImage: `url(${faceIcon})`}}></div>
                                <div className="btn">Thanh toán ngay</div>
                            </div>
                        </div>
                    </div>

                    {/* 3 */}
                    <div className="item-box">
                        <div className="item-box-info">
                            <div className="text">Ôi không, tạo đơn hàng đầu tiên ngay thôi!</div>

                            <div className="icon-info">
                                <div className="icon" style={{backgroundImage: `url(${faceIcon})`}}></div>
                                <div className="btn">Mua sắm ngay</div>
                            </div>
                        </div>
                    </div>

                    {/* 4 */}
                    <div className="item-box">
                        <div className="item-box-info">
                            <div className="text">Chương trình khuyến mãi đang diễn ra!</div>

                            <div className="icon-info">
                                <div className="icon" style={{backgroundImage: `url(${faceIcon})`}}></div>
                                <div className="btn">Mua sắm ngay</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;