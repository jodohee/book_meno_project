import React from 'react';


const Search = () => {
  return (
    <div>
      <div className="search-container">
        <form action="/search" method="get" className="search-form">
          <input 
            type="text" 
            name="query" 
            placeholder="Enter your search term..." 
            className="search-input" 
            required 
          />
          <button type="submit" className="search-button">검색</button>
        </form>
      </div>
      
      <table className="search_list">
        <colgroup>
          <col style={{ width: '20%' }} />
          <col style={{ width: '40%' }} />
          <col style={{ width: '10%' }} />
          <col style={{ width: '15%' }} />
          <col style={{ width: '*' }} />
        </colgroup>
        <thead>
          <tr>
            <th>이미지</th>  
            <th>제목</th>
            <th>저자</th>
            <th>출판사</th>
            <th>담기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img 
                src="../images/정의란 무엇인가.png" 
                alt="정의란 무엇인가" 
                style={{ width: '150px', height: '200px' }} 
              />
            </td>
            <td>
              <b><span style={{ fontSize: '18px' }}>정의란 무엇인가</span></b><br /><br />
              정의란 무엇인가에 대한 대단한 고찰을 담아어쩌구저쩌구.....
            </td>
            <td>지은이</td>
            <td>거북목 출판사</td>
            <td>
              <button type="submit" className="search-button">담기</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Search;
