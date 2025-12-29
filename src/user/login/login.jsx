import React from 'react';
import './login.css'

import { FaGoogle } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
    return (
        <div id="login">
           <div className="container">
               <div className="table-login">
                   <div className="title">Đăng nhập</div>
                   <div className="form">
                       <div className="name">Email<span className="required">*</span></div>
                       <div className="input-form"><input type="email" placeholder="Nhập Email" required/></div>
                   </div>

                   <div className="form">
                       <div className="name">Mật khẩu<span className="required">*</span></div>
                       <div className="input-form"><input type="password" placeholder="Nhập Mật khẩu" required/></div>
                   </div>

                   <div className="forget-pass">Quên mật khẩu? Nhấn vào <b>đây</b></div>

                   <div className="btn-login">Đăng nhập</div>

                   <div className="forget-pass">Bạn chưa có tài khoản <b>Đăng ký tại đây</b></div>

                   <div className="login-more">
                       <div className="btn" style={{background: "#DE3F32"}}>
                           <div className="icon"><FaGoogle /></div>
                           <div className="name">Google</div>
                       </div>

                       <div className="btn" style={{background: "#49669C"}}>
                           <div className="icon"><FaFacebook /></div>
                           <div className="name">Facebook</div>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Login;