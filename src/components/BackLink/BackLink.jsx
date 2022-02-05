import { useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import { Link } from './BackLink.styled';
const BackLink = () => {
  const location = useLocation();
  return (
    <Link to={location?.state?.from ?? '/books'}>
      <FaArrowLeft />
      Go back
    </Link>
  );
};

export default BackLink;
