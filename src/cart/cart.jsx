import React, {useState} from 'react';
import './cart.css';
import {Link} from "react-router-dom";

import Banner from '../assets/banner2.jpg'
import { MdLocalShipping } from "react-icons/md";

const Cart = () => {
    const [quantity, setQuantity] = useState(0);

    // Add or Sub Quantity
    const changeQuantity = (type) => {
        if (type === "+") setQuantity(quantity + 1);
        else setQuantity(quantity > 1 ? quantity - 1 : 1);
    };

    return (
        <div id="cart">
            <div className="container">
                <div className="title">Giỏ hàng</div>
                {/*<p>Chưa có sản phẩm nào trong giỏ hàng - quay về <Link to="/" style={{textDecoration: "none", color: "#007bff"}}>Trang Chủ</Link> để mua hàng</p>*/}
                <div className="main-cart">
                    <div className="container-left">
                        <img src={Banner} alt="" className="item-img"/>

                        <div className="item-cart">
                            <div className="item-left">
                                <div className="name" title="222">Combo 10 Bút gel Minimalist Thiên Long Gel-072</div>
                                <div className="type">Mực Xanh</div>
                            </div>

                            <div className="item-middle">
                                <div className="price-dis">197,200₫</div>
                                <div className="price-noDis">232,000₫</div>
                                <div className="price-percent">-15%</div>
                            </div>

                            <div className="item-right">
                                <button onClick={() => changeQuantity("-")} className="btn">-</button>
                                <div className="quantity">{quantity}</div>
                                <button onClick={() => changeQuantity("+")} className="btn" style={{borderRadius: "0 4px 4px 0"}}>+</button>
                            </div>

                            <button className="btn-remove" title="Xoá">X</button>
                        </div>
                    </div>

                    <div className="container-right">
                        <div className="total-price">
                            <div>Tổng tiền</div>
                            <div className="price">197,200₫</div>
                        </div>

                        <div className="note">
                            <div className="title-note">Ghi chú đơn hàng <span>(Không hỗ trợ đổi hàng và màu sắc liên quan đơn hàng sản phẩm giao ngẫu nhiên)</span></div>
                            <textarea className="input-note" rows="8"></textarea>
                            <button className="btn-cart" title="Tiến hành đặt hàng">Tiến hành đặt hàng</button>
                        </div>
                    </div>

                    <div className="free-ship"><i><MdLocalShipping /></i>Miễn phí vận chuyển cho đơn hàng từ 100,000₫</div>
                </div>
            </div>
        </div>
    );
};

export default Cart;