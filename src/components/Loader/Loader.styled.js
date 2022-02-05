import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { CgSpinner } from 'react-icons/cg';

const spinAnimation = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

export const SpinnerIcon = styled(CgSpinner)`
  color: #010101;
  animation: ${spinAnimation} 0.85s linear infinite;
`;
