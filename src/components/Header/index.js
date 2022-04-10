import {
  FaHome,
  FaSignInAlt,
  FaUserAlt,
  FaUbuntu,
  FaUnity,
} from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  const buttonClick = useSelector((state) => state.exampleRed.buttonClick);
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/login">
        <FaSignInAlt size={24} />
      </Link>
      <Link to=".">
        {buttonClick ? <FaUbuntu size={24} /> : <FaUnity size={24} />}
      </Link>
    </Nav>
  );
}
