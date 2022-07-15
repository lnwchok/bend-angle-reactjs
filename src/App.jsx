import { useState } from 'react';
import './App.css';

function App() {
  const [x1, setX1] = useState('');
  const [y1, setY1] = useState('');
  const [z1, setZ1] = useState('');
  const [x2, setX2] = useState('');
  const [y2, setY2] = useState('');
  const [z2, setZ2] = useState('');

  const [angle, setAngle] = useState(0);

  const calcAngle = () => {
    if (x1 == '' || x2 == '' || y1 == '' || y2 == '' || z1 == '' || z2 == '') {
      return;
    }

    const eq1 = x1 * x2 + y1 * y2 + z1 * z2;
    const eq2 = Math.sqrt(x1 * x1 + y1 * y1 + z1 * z1);
    const eq3 = Math.sqrt(x2 * x2 + y2 * y2 + z2 * z2);

    const deg = 180 - (Math.acos(eq1 / (eq2 * eq3)) * 180) / Math.PI;

    setAngle(deg.toFixed(2));
  };

  return (
    <div className="App">
      <h1 className="textcenter">Bend Angle🔱</h1>
      {angle !== 0 && <h2 className="textcenter"> 🎨 {angle} deg🌈 </h2>}
      <div className="card">
        <p>Vector-1 (A)</p>
        <div className="textcenter">
          <span className="vect">
            <input
              type="text"
              placeholder="x1"
              onChange={(e) => setX1(e.target.value)}
            />
            <code>i,</code>
          </span>
          <span className="vect">
            <input
              type="text"
              placeholder="y1"
              onChange={(e) => setY1(e.target.value)}
            />
            <code>j,</code>
          </span>
          <span className="vect">
            <input
              type="text"
              placeholder="z1"
              onChange={(e) => setZ1(e.target.value)}
            />
            <code>k</code>
          </span>
        </div>
      </div>
      <div className="card">
        <p>Vector-2 (B)</p>
        <div className="textcenter">
          <span className="vect">
            <input
              type="text"
              placeholder="x2"
              onChange={(e) => setX2(e.target.value)}
            />
            <code>i,</code>
          </span>
          <span className="vect">
            <input
              type="text"
              placeholder="y2"
              onChange={(e) => setY2(e.target.value)}
            />
            <code>j,</code>
          </span>
          <span className="vect">
            <input
              type="text"
              placeholder="z2"
              onChange={(e) => setZ2(e.target.value)}
            />
            <code>k</code>
          </span>
        </div>
      </div>
      <div className="textcenter card">
        <button onClick={calcAngle}>👻</button>
      </div>

      <footer className="textcenter">😘 Made to you: Sitthichok with 💖</footer>
    </div>
  );
}

export default App;
