import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [currentColor, setCurrentColor] = useState('#007BFF');

  // Function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function changeBackgroundColor() {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    setCurrentColor(newColor);
  }

  return (
    <div className="App">
      <nav className="top-nav">
        <div className="top-nav-content">
          <h2>Color Flipper</h2>
          <ul className="nav-links">
            <li>
              <a href="#">Simple</a>
            </li>
            <li>
              <a href="#">Hex</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="center-content">
        <div id="color-display">Background Color: <span id="current-color">{currentColor}</span></div>
        <button id="change-color-button" onClick={changeBackgroundColor}>
          Change Color
        </button>
      </div>
    </div>
  );
}

export default App;

