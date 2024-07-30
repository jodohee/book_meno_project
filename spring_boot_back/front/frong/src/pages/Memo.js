import React, { useState } from 'react';

const Memo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div className="memo-board">
                <div className="memo" draggable="true" onClick={openModal}>
                    <span className="memo_add">+</span>
                </div>
                <div className="memo" draggable="true">Memo 4</div>
                <div className="memo" draggable="true">Memo 3</div>
                <div className="memo" draggable="true">Memo 2</div> 
                <div className="memo" draggable="true">Memo 1</div>
            </div>

            {isModalOpen && (
                <div>
                    <div className="background_black" onClick={closeModal}></div>
                    <div className="modal">
                        <div className="memo_detail">
                            Memo 1 detail
                            <div className="div_btn_posi">
                                <button className="btn_style" type="button">저장</button>
                                <button className="btn_style" type="button">삭제</button>
                                <button className="btn_style" type="button" onClick={closeModal}>닫기</button>
                            </div>   
                            <div>
                                <b style={{ display: 'inline', marginRight: '50px', paddingLeft: '20px' }}>별점</b>
                                <input type="radio" name="rank" className="radio_btn" value="1" />1
                                <input type="radio" name="rank" className="radio_btn" value="2" />2
                                <input type="radio" name="rank" className="radio_btn" value="3" />3
                                <input type="radio" name="rank" className="radio_btn" value="4" />4
                                <input type="radio" name="rank" className="radio_btn" value="5" />5
                                <input type="radio" name="rank" className="radio_btn" value="none" />없음
                            </div>    
                            <div style={{ margin: '80px 20px' }}>
                                <textarea className="memo_txt"></textarea>  
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Memo;
