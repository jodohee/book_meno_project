import axios from 'axios';
import React, { useEffect, useState } from 'react';
 
function App() {
  const [hidata, setHello] = useState('')
 
  useEffect(() => {
    axios.get('http://localhost:8080/api/hello')
      .then(response => setHello(response.data))
      .catch(error => console.log(error))
  }, []);
 
  return (
    <div>
      백엔드 스프링 부트 데이터 : {hidata}
    </div>
  );
}
 
export default App;
