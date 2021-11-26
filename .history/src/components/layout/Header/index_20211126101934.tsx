import styled from 'styled-components';

import CovidImg from '@img/Facebook.png';

import LeftSide from './LeftSide';
import Middle from './Middle';
import RightSide from './RightSide/index';

const Container = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  display: flex;
  position: sticky;
  top: 0;
  height: 60px;
`;


const Header = () => {
  return (
    <Container>
      <LeftSide />
      <Middle />
      <RightSide />
    </Container>
  );
};

export default Header;
