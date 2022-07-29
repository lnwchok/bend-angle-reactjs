import { useState } from 'react';

import { isNum } from './utils';
import ErrorCard from './error_card';

import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function Calculator() {
  const [x1, setX1] = useState('');
  const [y1, setY1] = useState('');
  const [z1, setZ1] = useState('');
  const [x2, setX2] = useState('');
  const [y2, setY2] = useState('');
  const [z2, setZ2] = useState('');

  const [error, setError] = useState({
    status: false,
    message: '',
  });

  const [angle, setAngle] = useState(0);

  const resetValue = () => {
    let boxs = document.getElementsByTagName('input');
    for (let i = 0; i < boxs.length; i++) {
      boxs[i].value = '';
    }
    setX1('');
    setX2('');
    setY1('');
    setY2('');
    setZ1('');
    setZ2('');
    setAngle(0);
    setError({ status: false, message: '' });
  };

  const calcAngle = () => {
    setError({ status: false, message: '' });

    if (x1 == '' || x2 == '' || y1 == '' || y2 == '' || z1 == '' || z2 == '') {
      setError({ status: true, message: 'Fill incompleted!' });
      return;
    }

    if (
      !isNum(x1) ||
      !isNum(x2) ||
      !isNum(y1) ||
      !isNum(y2) ||
      !isNum(z1) ||
      !isNum(z2)
    ) {
      setError({ status: true, message: 'Type mis-matched!' });
      return;
    }

    const eq1 = -x1 * x2 + -y1 * y2 + -z1 * z2;
    const eq2 = Math.sqrt(x1 * x1 + y1 * y1 + z1 * z1);
    const eq3 = Math.sqrt(x2 * x2 + y2 * y2 + z2 * z2);

    const deg = (Math.acos(eq1 / (eq2 * eq3)) * 180) / Math.PI;

    setAngle(deg.toFixed(2));
  };

  return (
    <>
      {angle !== 0 && <h2 className="textcenter">🌈 {angle} deg</h2>}

      {error.status ? <ErrorCard message={error.message} /> : ''}
      <div className="card">
        <p className="caption">
          Vector-1, <InlineMath math="\vec{A}" />
        </p>
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
        <p className="caption">
          Vector-2, <InlineMath math="\vec{B}" />
        </p>
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
        <button onClick={calcAngle}>Calc 📏</button>&nbsp;&nbsp;
        <button onClick={resetValue}>Clear 🚿</button>
      </div>
    </>
  );
}
