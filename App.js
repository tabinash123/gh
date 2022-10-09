import React, { useState } from 'react';
import Getting from './Getting';
import Showing from './Showing';



function App() {
  const [data, setData] = useState([])

  return (
    <div>
    <Getting data={data} setData={setData} />
    <Showing data={data} setData={setData} />
    </div>
  );
}

export default App;
