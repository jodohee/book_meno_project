import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
       <div class="back_img"></div>
        <div class="up">
            <div class="div_width">
                
            
                <div class="bookshelf">
                <div class="shelf">
                    <div class="book"> <Link to="/detail">Book 1</Link></div>
                    <div class="book">Book 2</div>
                    <div class="book">Book 3</div>
                </div>
                <div class="shelf">
                    <div class="book">Book 4</div>
                    <div class="book">Book 5</div>
                    <div class="book">Book 6</div>
                </div>
                <div class="shelf">
                    <div class="book">Book 7</div>
                    <div class="book">Book 8</div>
                    <div class="book">Book 9</div>
                </div>
                </div>
                <div class="pagging">
                <form action="index.html" method="post">
                    <input type="text" name="query" className="input_search" placeholder="도서명을 입력하세요." />
                    <button type="submit" class="search-button">검색</button>
                </form>
                <div>[이전] 1 2 3 [다음]</div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Home;
