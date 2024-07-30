import React from 'react';

const Join = () => {
    return (
        <div className="signup-container">
            <h2>회원가입</h2>
            <form action="/signup" method="post">
                <div className="form-group">
                    <label htmlFor="username">아이디</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">비밀번호</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div className="form-group">
                    <label htmlFor="nickname">별명</label>
                    <input type="text" id="nickname" name="nickname" required />
                </div>
                <div className="form-group">
                    <label htmlFor="birthdate">생년월일</label>
                    <input type="date" id="birthdate" name="birthdate" required />
                </div>
                <button className="join_btn" type="submit">가입</button>
            </form>
        </div>
    );
};

export default Join;
