import { BsExclamationDiamondFill } from 'react-icons/bs';
import './style.css';

export default function ErrorCard({ message }) {
  return (
    <p className="error-card">
      <span>
        <BsExclamationDiamondFill />
      </span>
      {message}
    </p>
  );
}
