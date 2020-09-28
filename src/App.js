import React, {useState} from 'react';
import GetJson from './components/GetJson';

function App() {
  const [getData, setGetData] = useState(false)

  const jsonData = () => (
    setGetData(true)
  )
  
if (getData === false) {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <button onClick={() => jsonData()}>Get data</button>
    </div>
  )
} else {
  return (
    <GetJson />
  )
}
}

export default App;
