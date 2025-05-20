import { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue.trim()]);
      setInputValue('');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', textAlign: 'center' }}>
      <h2>Dynamic List</h2>
      <input
        type = "text"
        value = {inputValue}
        onChange={(e)=> setInputValue(e.target.value)}
        placeholder="Add an item"/>

        <button onClick={handleAdd}>add</button>

        <ul style={{marginTop:'20px',textAlign:'left'}}>
          {items.map((item,index)=>(
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
  );
}

export default App;
