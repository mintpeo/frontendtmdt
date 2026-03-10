import React, {useState} from 'react';
import './detail.css';

import {useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch.js";
import {API_URL} from "../service/API_URL.jsx";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";

import { BsCart3 } from "react-icons/bs";
import { PiTicketLight } from "react-icons/pi";

const Detail = () => {
    // Quantity
    const [quantity, setQuantity] = useState(1);

    // Save index img-main and img-sub
    const [activeIndex, setActiveIndex] = useState(0);

    // Get id from url
    const {id} = useParams();

    const {data: product, loading: loading} = useFetch(`${API_URL}/products/${id}`);

    // Wait to load data
    if (loading) {
        return (
            <div className="loading">
                <h1>Đang tải dữ liệu sản phẩm...</h1>
            </div>
        );
    }

    // Set quantity
    const handleBtnQuantity = (sign) => {
        if (quantity === 1 && sign === "-") return;

        if (sign === "-") setQuantity(quantity - 1);
        else setQuantity(quantity + 1);
    }

    return (
        <div id="detail">
            <div className="container">
                {/* IMAGE */}
                <div className="img-dt">
                    <img src={product.images[activeIndex]} alt="" className="img-main"/>

                    {/* IMAGES SUB */}
                    <div className="img-sub">
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            spaceBetween={10}
                            slidesPerView={3}
                            slidesPerGroup={1}
                            observer={true}
                            observeParents={true}
                            centerInsufficientSlides={true}
                            loop={false}

                            className="banner-slider"
                        >
                            {
                                product.images.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="img-list" onClick={() => {
                                            setActiveIndex(index);
                                        }}>
                                            <img className={`img-item ${activeIndex === index ? 'active' : ''}`} src={item} alt="img-sub" />
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>

                {/* INFO */}
                <div className="info-dt">
                    {/* Text-main */}
                    <p className="text-main">{product.name}</p>

                    {/* Text-sub */}
                    <div className="text-sub">
                        <span className="text-left">Thương hiệu: <span>Thiên Long</span></span>
                        <span className="text-left">Tình trạng: <span>Còn hàng</span></span>
                        <span className="text-left text-last">Đơn vị chịu trách nhiệm: <span>Tập đoàn Thiên Long</span></span>
                    </div>

                    {/* Product-id */}
                    <p className="text-left">Mã sản phẩm: <span>{product.sku}</span></p>

                    {/* Price */}
                    <div className="price">
                        <div className="pri-con">
                            <div className="price-dis">{product.price.toLocaleString()}{product.currency}</div>
                            <div className="price-noDis">{product.originalPrice.toLocaleString()}{product.currency}</div>
                        </div>
                        <div className="dis-per">Tiết kiệm <strong>35%</strong></div>
                    </div>

                    {/* Type */}
                    <div className="type">Phân loại: <span>Red</span></div>

                    {/* Amount */}
                    <div className="amount">
                        <p>Số lượng:</p>
                        <div className="number">
                            <button className="btn" onClick={() => handleBtnQuantity("-")}>-</button>
                            <input type="text" value={quantity}/>
                            <button className="btn right" onClick={() => handleBtnQuantity("+")}>+</button>
                        </div>
                    </div>

                    <div className="addCart">
                        <button className="btnCart"><i className="icon"><BsCart3/></i> Thêm vào giỏ</button>
                        <button className="btnCart btnBlue">Mua ngay</button>
                    </div>
                </div>

                {/* COUPED */}
                <div className="voucher-dt">
                    <ul className="list-vou">
                        <li className="item-vou">
                            <div className="vou-left">
                                <i className="icon"><PiTicketLight /></i>
                            </div>

                            <div className="vou-right">
                                <div className="vou-info">
                                    <strong>Giảm 50.000đ</strong>
                                    <p className="text-vou">Đơn hàng từ 300.000đ</p>
                                    <p className="text-vou">Mã: <span><strong>0326SALE50</strong></span></p>
                                    <p className="text-vou">31/03/2026</p>

                                    <div className="btn-vou">
                                        <button className="btn-copy">Sao chép mã</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="item-vou">
                            <div className="vou-left">
                                <i className="icon"><PiTicketLight /></i>
                            </div>

                            <div className="vou-right">
                                <div className="vou-info">
                                    <strong>Giảm 150.000đ</strong>
                                    <p className="text-vou">Đơn hàng từ 300.000đ</p>
                                    <p className="text-vou">Mã: <span><strong>0326SALE50</strong></span></p>
                                    <p className="text-vou">31/03/2026</p>

                                    <div className="btn-vou">
                                        <button className="btn-copy">Sao chép mã</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="item-vou">
                            <div className="vou-left">
                                <i className="icon"><PiTicketLight /></i>
                            </div>

                            <div className="vou-right">
                                <div className="vou-info">
                                    <strong>Giảm 50.000đ</strong>
                                    <p className="text-vou">Đơn hàng từ 300.000đ</p>
                                    <p className="text-vou">Mã: <span><strong>0326SALE50</strong></span></p>
                                    <p className="text-vou">31/03/2026</p>

                                    <div className="btn-vou">
                                        <button className="btn-copy">Sao chép mã</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="item-vou">
                            <div className="vou-left">
                                <i className="icon"><PiTicketLight /></i>
                            </div>

                            <div className="vou-right">
                                <div className="vou-info">
                                    <strong>Giảm 50.000đ</strong>
                                    <p className="text-vou">Đơn hàng từ 300.000đ</p>
                                    <p className="text-vou">Mã: <span><strong>0326SALE50</strong></span></p>
                                    <p className="text-vou">31/03/2026</p>

                                    <div className="btn-vou">
                                        <button className="btn-copy">Sao chép mã</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Detail;