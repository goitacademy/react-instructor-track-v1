import { SpinnerIcon } from './Loader.styled';

const sizes = {
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48,
};

const Loader = ({ size = 'md' }) => {
  return <SpinnerIcon size={sizes[size]} role="status" aria-label="Loading" />;
};

export default Loader;
