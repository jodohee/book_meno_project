import React from 'react';

const Detail = () => {
    return (
        <div className="bookshelf">
            <div className="shelf">
                <table width="80%" className="detail_tbl">
                    <colgroup>
                        <col width="20%" />
                        <col width="*" />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th>
                                <img src="images/정의란 무엇인가.png" style={{ width: '150px', height: '200px' }} alt="정의란 무엇인가" />
                            </th>
                            <td>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>제 목</td>
                                            <td><b>정의란 무엇인가</b></td>
                                        </tr>
                                        <tr>
                                            <td>저자</td>
                                            <td>지은이</td>
                                        </tr>
                                        <tr>
                                            <td>출판사</td>
                                            <td>거북목 출판사</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="shelf">
                <table className="detail_tbl">
                    <colgroup>
                        <col width="20%" />
                        <col width="*" />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th>줄거리</th>
                            <td>정의란 무엇인가에 대한 대단한 고찰을 담아어쩌구저쩌구.....</td>
                        </tr>
                        <tr>
                            <th>별점</th>
                            <td>
                                <p>★★★★☆</p>
                            </td>
                        </tr>
                        <tr>
                            <th>(짧은 감상평)</th>
                            <td>
                                (최대 4000byte)<br />
                                정의란 정말 무엇인가 생각하게 되는 책으로 정말 내가 도덕적인 삶을 살고 있는가 하는 생각이 들 때면
                                한 번쯤 다시 읽어보는 것으로!!
                            </td>
                        </tr>
                        <tr>
                            <th colSpan="2">
                                <button className="btn_style">등록/수정</button>
                                <button className="btn_style">삭제</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Detail;
