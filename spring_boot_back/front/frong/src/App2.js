import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    // 상태 변수 선언
    const [inputValue, setInputValue] = useState('');
    const [response, setResponse] = useState('');

    // 입력값 변경 핸들러
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    // 폼 제출 핸들러
    const handleSubmit = (event) => {
        event.preventDefault(); // 페이지 새로고침 방지

        // 백엔드로 데이터 전송
        axios.post('http://localhost:8080/api/submit', { value: inputValue })
            .then(response => {
                setResponse(response.data.message);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>React Input Display</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Enter text here..."
                    />
                    <button type="submit">Submit</button>
                </form>
                <p>Response from server: {response}</p>
            </header>
        </div>
    );
}

export default App;
