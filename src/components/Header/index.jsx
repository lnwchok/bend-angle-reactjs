import './style.css';

import { BsArrowLeftSquareFill, BsFileText } from 'react-icons/bs';

const path_name = () => {
  switch (window.location.pathname) {
    case '/docs':
      return (
        <li>
          <a href="/">
            <BsArrowLeftSquareFill /> Go Back
          </a>
        </li>
      );
      break;
    case '/':
      return (
        <li>
          <a href="/docs">
            <BsFileText /> References
          </a>
        </li>
      );
      break;
    default:
      return (
        <li>
          <a href="/">
            <BsArrowLeftSquareFill /> Go Back
          </a>
        </li>
      );
  }
};

export default function Header() {
  let locations = path_name();

  return (
    <header>
      <h1 className="textcenter">🔱Bend Angle</h1>
      <ul>{locations}</ul>
    </header>
  );
}
