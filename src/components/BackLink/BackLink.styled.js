import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';

export const Link = styled(RouterLink)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
  margin-bottom: 16px;
  text-decoration: none;
  text-transform: uppercase;
  color: #010101;

  :hover {
    color: #2196f3;
  }
`;
