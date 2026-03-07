import React from 'react';
import './detail.css';

import { BsCart3 } from "react-icons/bs";
import {useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch.js";
import {API_URL} from "../service/API_URL.jsx";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade, Navigation} from "swiper/modules";

const Detail = () => {
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

    return (
        <div id="detail">
            <div className="container">
                {/* IMAGE */}
                <div className="img-dt">
                    <img src={product.images[0]} alt="" className="img-main"/>

                    {/* IMAGES SUB */}
                    <div className="img-sub">
                        <Swiper
                            modules={[Autoplay, Navigation, EffectFade]}
                            slidesPerView={3}
                            navigation={true}
                            observer={true}
                            observeParents={true}
                            centerInsufficientSlides={true}
                            autoplay={{
                                delay: 10000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true
                            }}
                            loop={false}
                            watchOverflow={true}
                            className="banner-slider"
                        >
                            {
                                product.images.map((item) => (
                                    <SwiperSlide><div className="img-list"><img src={item} alt="img-sub" /></div></SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>

                {/* INFO */}
                <div className="info-dt">
                    {/* Text-main */}
                    {/*<p className="text-main">Combo 5/10/20 Bút gel B - Buttersmooth Gel Thiên Long GELB-031 - Premium Tip viết êm, trơn - Mực Xanh - Phiên bản Trà - Thân ngẫu nhiên</p>*/}
                    <p className="text-main">{product.name}</p>

                    {/* Text-sub */}
                    <div className="text-sub">
                        <p className="text-left">Thương hiệu: <span>Thiên Long</span></p>
                        <p className="text-left">Tình trạng: <span>Còn hàng</span></p>
                        <p className="text-left">Đơn vị chịu trách nhiệm: <span>Tập đoàn Thiên Long</span></p>
                        <p className="text-left text-last">Thương hiệu: <span>Thiên Long</span></p>
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