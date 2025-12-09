import React from 'react'
import './home.css'

const Home = () => {
    return (
        <div id="home">
            <h1>THIÊNLONG</h1>

            <div className="search">
                <h2>Tìm kiếm sản phẩm</h2>
            </div>

            <div className="support">
                <h2>1900 866 819</h2>
                <h3>Hỗ trợ khách hàng</h3>
            </div>

            <div className="user">
                <h2>Đăng nhập</h2>
                <h3>Đăng ký</h3>
            </div>

            <div className="cart">
                <h2>Cart</h2>
            </div>
        </div>
    );
};

export default Home;