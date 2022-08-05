import { BsArrowLeftSquareFill, BsFileText } from 'react-icons/bs';

const path_name = () => {
  switch (window.location.pathname) {
    case '/docs':
      return (
        <NavLink href="/">
          <BsArrowLeftSquareFill /> Go Back
        </NavLink>
      );
      break;
    case '/':
      return (
        <NavLink href="/docs">
          <BsFileText /> References
        </NavLink>
      );
      break;
    default:
      return (
        <NavLink href="/">
          <BsArrowLeftSquareFill /> Go Back
        </NavLink>
      );
  }
};

const NavLink = ({ href, children }) => {
  return (
    <li>
      <a href={href}>{children}</a>
    </li>
  );
};

export default function Navbar() {
  let locations = path_name();

  return <ul className="navbar">{locations}</ul>;
}
