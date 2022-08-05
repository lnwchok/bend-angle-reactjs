import { useState } from 'react';

import { isNum, initError, initVector } from './utils';
import ErrorCard from './error_card';

import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function BendCalc() {
  const [vector, setVector] = useState(initVector);
  const [error, setError] = useState(initError);
  const [angle, setAngle] = useState(0);

  const updateVector = (i, value) => {
    let v = { ...vector };
    v[i] = value;

    setVector({ ...v });
  };

  const resetValue = () => {
    let boxs = document.getElementsByTagName('input');
    for (let i = 0; i < boxs.length; i++) {
      boxs[i].value = '';
    }
    setAngle(0);
    setVector(initVector);
    setError(initError);
  };

  const calcAngle = () => {
    setError(initError);

    if (
      vector.x1 == '' ||
      vector.x2 == '' ||
      vector.y1 == '' ||
      vector.y2 == '' ||
      vector.z1 == '' ||
      vector.z2 == ''
    ) {
      setError({ status: true, message: 'Fill incompleted!' });
      return;
    }

    if (
      !isNum(vector.x1) ||
      !isNum(vector.x2) ||
      !isNum(vector.y1) ||
      !isNum(vector.y2) ||
      !isNum(vector.z1) ||
      !isNum(vector.z2)
    ) {
      setError({ status: true, message: 'Type mis-matched!' });
      return;
    }

    const eq1 =
      -vector.x1 * vector.x2 + -vector.y1 * vector.y2 + -vector.z1 * vector.z2;
    const eq2 = Math.sqrt(
      vector.x1 * vector.x1 + vector.y1 * vector.y1 + vector.z1 * vector.z1
    );
    const eq3 = Math.sqrt(
      vector.x2 * vector.x2 + vector.y2 * vector.y2 + vector.z2 * vector.z2
    );

    const deg = (Math.acos(eq1 / (eq2 * eq3)) * 180) / Math.PI;

    setAngle(deg.toFixed(2));
  };

  return (
    <div className="mainbox">
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
              onChange={(e) => updateVector('x1', e.target.value)}
            />
            <code>i,</code>
          </span>
          <span className="vect">
            <input
              type="text"
              placeholder="y1"
              onChange={(e) => updateVector('y1', e.target.value)}
            />
            <code>j,</code>
          </span>
          <span className="vect">
            <input
              type="text"
              placeholder="z1"
              onChange={(e) => updateVector('z1', e.target.value)}
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
              onChange={(e) => updateVector('x2', e.target.value)}
            />
            <code>i,</code>
          </span>
          <span className="vect">
            <input
              type="text"
              placeholder="y2"
              onChange={(e) => updateVector('y2', e.target.value)}
            />
            <code>j,</code>
          </span>
          <span className="vect">
            <input
              type="text"
              placeholder="z2"
              onChange={(e) => updateVector('z2', e.target.value)}
            />
            <code>k</code>
          </span>
        </div>
      </div>
      <div className="textcenter card">
        <button onClick={calcAngle}>Calc 📏</button>&nbsp;&nbsp;
        <button onClick={resetValue}>Clear 🚿</button>
      </div>
    </div>
  );
}
