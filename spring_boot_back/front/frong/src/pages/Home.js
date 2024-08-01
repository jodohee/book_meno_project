import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [query, setQuery] = useState(''); // 상태 변수 선언
  const [response, setResponse] = useState(''); // 서버 응답을 저장할 상태 변수

  // 입력값 변경 핸들러
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // 폼 제출 핸들러
  const handleSubmit = (event) => {
    event.preventDefault(); // 페이지 새로고침 방지

    // 백엔드로 데이터 전송
    axios.post('http://localhost:8080/api/search', { query })
      .then(response => {
        setResponse(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div>
      <div className="back_img"></div>
      <div className="up">
        <div className="div_width">
          <div className="bookshelf">
            <div className="shelf">
              <div className="book"> <Link to="/detail">Book 1</Link></div>
              <div className="book">Book 2</div>
              <div className="book">Book 3</div>
            </div>
            <div className="shelf">
              <div className="book">Book 4</div>
              <div className="book">Book 5</div>
              <div className="book">Book 6</div>
            </div>
            <div className="shelf">
              <div className="book">Book 7</div>
              <div className="book">Book 8</div>
              <div className="book">Book 9</div>
            </div>
          </div>
          <div className="pagging">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={query}
                onChange={handleInputChange}
                className="input_search"
                placeholder="도서명을 입력하세요."
              />
              <button type="submit" className="search-button">검색</button>
            </form>
            <div>{response}</div>
            <div>[이전] 1 2 3 [다음]</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
