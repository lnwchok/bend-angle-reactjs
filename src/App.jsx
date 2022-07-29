import Header from './components/Header';
import Calculator from './components/Calculator';
import Docs from './components/Docs';

import './App.css';

export default function App() {
  let component;

  switch (window.location.pathname) {
    case '/':
      component = <Calculator />;
      break;
    case '/docs':
      component = <Docs />;
      break;
  }

  return (
    <div className="App">
      <Header />
      {component}
      <footer className="textcenter">😘 Made to you: Sitthichok with 💖</footer>
    </div>
  );
}
