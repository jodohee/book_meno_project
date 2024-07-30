import React from 'react';
import { Link } from 'react-router-dom';

const login = () => {
    return (
        <div className="login-container">
            <h2>로그인</h2>
            <form action="/login" method="post">
                <div className="form-group">
                    <label htmlFor="username">아이디</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">비밀번호</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button className="login_btn" type="submit">로그인</button>
                <p ><Link to="/join" className="join_text" >회원가입</Link></p>
            </form>
        </div>
    );
};

export default login;
