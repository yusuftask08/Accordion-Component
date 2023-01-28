import { useState, useEffect } from 'react'
import './App.scss'
import Accordion from './Components/Accordion'

function App() {
  const [clicked, setClicked] = useState(0);
  const [data, setData] = useState([]);

  const handleToggle = (id) => {
    if (clicked === id) return setClicked(0);
    setClicked(id);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((resp) => resp.json())
      .then((data) => setData(data.slice(0, 10)))
  }, [])

  return (
    <div className="App">
      <ul>
        {
          data.map((item, index) =>
            <Accordion
              onToggle={() => handleToggle(item.id)}
              active={clicked === item.id}
              key={index}
              title={item.name}
              text={item.body}
            />
          )
        }
      </ul>
    </div>
  )
}

export default App
