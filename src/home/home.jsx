import React, {useEffect, useState} from 'react'
import './home.css'
import {API_URL} from "../service/API_URL.jsx";
import axios from "axios";

const Home = () => {
    const API = API_URL;

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const result = await  axios.get(`${API}/products`);
                setProducts(result.data);
            } catch (e) {
                console.log("Load Products: ", e);
            }
        }

        loadProducts();
    }, []);

    return (
        <div id="home">
            <h1>THIÊNLONG</h1>

            <div>
                <h1>Danh sách sản phẩm</h1>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    {products.map((product) => (
                        <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
                            <img
                                src={`${API_URL}${product.images[0]}`}
                                alt={product.name}
                                width="150"
                            />
                            <h3>{product.name}</h3>
                            <p>{product.price} {product.currency}</p>
                        </div>
                    ))}
                </div>
            </div>

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