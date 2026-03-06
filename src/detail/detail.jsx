import React from 'react';
import './detail.css';

import logoTL from '../assets/logoTL.png'
import { BsCart3 } from "react-icons/bs";

const Detail = () => {
    return (
        <div id="detail">
            <div className="container">
                {/* IMAGE */}
                <div className="img-dt">
                    <img src={logoTL} alt=""/>
                </div>

                {/* INFO */}
                <div className="info-dt">
                    {/* Text-main */}
                    <p className="text-main">Combo 5/10/20 Bút gel B - Buttersmooth Gel Thiên Long GELB-031 - Premium Tip viết êm, trơn - Mực Xanh - Phiên bản Trà - Thân ngẫu nhiên</p>

                    {/* Text-sub */}
                    <div className="text-sub">
                        <p className="text-left">Thương hiệu: <span>Thiên Long</span></p>
                        <p className="text-left">Tình trạng: <span>Còn hàng</span></p>
                        <p className="text-left">Đơn vị chịu trách nhiệm: <span>Tập đoàn Thiên Long</span></p>
                        <p className="text-left text-last">Thương hiệu: <span>Thiên Long</span></p>
                    </div>

                    {/* Product-id */}
                    <p className="text-left">Mã sản phẩm: <span>50015602CB5</span></p>

                    {/* Price */}
                    <div className="price">
                        <div className="pri-con">
                            <div className="price-dis">26,975₫</div>
                            <div className="price-noDis">41,500₫</div>
                        </div>
                        <div className="dis-per">Tiết kiệm <strong>35%</strong></div>
                    </div>

                    {/* Type */}
                    <div className="type">Phân loại: <span>Red</span></div>

                    {/* Amount */}
                    <div className="amount">
                        <p>Số lượng:</p>
                        <div className="number">
                            <button className="btn">-</button>
                            <input type="text" value="1"/>
                            <button className="btn right">+</button>
                        </div>
                    </div>

                    <div className="addCart">
                        <button className="btnCart"><i className="icon"><BsCart3/></i> Thêm vào giỏ</button>
                        <button className="btnCart btnBlue">Mua ngay</button>
                    </div>
                </div>

                {/* COUPED */}
                <div className="voucher-dt">
                    <div className="vou-left">
                        <p>Icon</p>
                    </div>

                    <div className="vou-right">
                        <p>Giảm 50.000đ</p>
                        <p>Đơn hàng từ 300.000đ</p>
                        <p>Mã: <span>0326SALE50</span></p>
                        <p>31/03/2026</p>
                        <button>Copy</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;