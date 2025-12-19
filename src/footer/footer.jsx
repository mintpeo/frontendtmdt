import React from 'react';
import './footer.css'

import logo from '../assets/logo-footer.png'
import logoPK from '../assets/logoPARKER.png'
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                {/*  LOGO  */}
                <div className="logo-footer">
                    <img src={logo} alt="logo"/>

                    <div className="about-company">
                        <p style={{fontWeight: "bold", color: "#fbe263"}}>Thienlong.vn - Website thương mại điện tử thuộc Công Ty TNHH MTV TM-DV Thiên Long Hoàn Cầu</p>
                        <p>Công Ty TNHH MTV TM-DV Thiên Long Hoàn Cầu</p>
                        <p>GPĐKKD số 0305341389 do Sở Kế Hoạch và Đầu Tư Thành Phố Hồ Chí Minh cấp ngày 15/11/2007</p>
                    </div>

                    <div className="input-mail">
                        <input type="text" className="mail" placeholder="Nhập địa chỉ email" required/>
                        <button className="btn-input" type="sumbit">Đăng ký</button>
                    </div>

                    <div className="line-parker">
                        <a href="#" title="Điểm phân phối Parker"><img src={logoPK} alt=""/> Điểm phân phối Parker</a>
                    </div>
                </div>

                {/*  ADDRESS  */}
                <div className="address">
                    <p className="title">ĐỊA CHỈ CÔNG TY</p>
                    <p className="text">Head Office: Tầng 10, Sofic Tower, Số 10 Đường Mai Chí Thọ, Phường An Khánh, Thành Phố Hồ Chí Minh, Việt Nam</p>
                    <p className="text">Miền Bắc: Số 38, đường Gamuda Gardens 2-5, Khu đô thị mới C2 - Gamuda Gardens, Phường Trần Phú, Thành phố Hà Nội, Việt Nam.</p>
                </div>

                {/*  CONTACT  */}
                <div className="contact">
                    <p className="title">HỖ TRỢ KHÁCH HÀNG</p>
                    <p className="phone">Hotline: <a href="#" title="1900 866 819">1900 866 819</a></p>
                    <p className="text">Thứ 2 - Thứ 6 (8h - 17h)</p>
                    <p className="mail">salesonline@thienlongvn.com</p>
                    
                    <div className="list-contact">
                        <ul className="list-item">
                            <li className="item">Hướng dẫn mua hàng</li>
                            <li className="item">Hướng dẫn thanh toán</li>
                            <li className="item">Chính sách giao hàng</li>
                            <li className="item">Chính sách đổi trả & hoàn tiền</li>
                            <li className="item">Khách hàng thân thiết</li>
                            <li className="item">Khách hàng ưu tiên</li>
                            <li className="item">Phản ánh chất lượng sản phẩm</li>
                        </ul>
                    </div>
                </div>

                {/*  ABOUT  */}
                <div className="about">
                    <p className="title">VỀ THIENLONG.VN</p>

                    <div className="list-about">
                        <ul className="list-item">
                            <li className="item"> Giới thiệu</li>
                            <li className="item">Dịch vụ in ấn quảng cáo</li>
                            <li className="item">Chính sách bảo mật chung</li>
                            <li className="item">Chính sách bảo mật thông tin cá nhân</li>
                            <li className="item">Thông tin liên hệ</li>
                            <li className="item">Chương trình Affiliate</li>
                        </ul>
                    </div>

                    <div className="logo-about">
                        <a href="#" title="Facebook social"><FaFacebookF /></a>
                        <a href="#" title="Youtube social"><FaYoutube /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;