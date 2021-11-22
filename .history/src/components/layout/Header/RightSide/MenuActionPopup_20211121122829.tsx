import {
  FaCheck,
  FaFacebookMessenger,
  FaBellSlash,
  FaPhoneAlt,
  FaVideo,
  FaSignOutAlt,
} from 'react-icons/fa';

import Container from '@/components/Popover/Container';
import styled from 'styled-components';

interface MenuActionPopup {
  setHover: (value: React.SetStateAction<boolean>) => void;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 5px 0px;
`;

const Action = styled.div`
  padding: 5px;
  :hover {
    background: #f2f2f2;
  }
  display: flex;
  gap: 0px 10px;
  align-items: center;
`;

const MenuActionPopup = ({ setHover }: MenuActionPopup) => {
  return (
    <Container onMouseEnter={() => setHover(true)}>
      <Wrapper>
        <Action><FaCheck />Mark as read</Action>
        <div>Open in message</div>
      </Wrapper>
    </Container>
  );
};

export default MenuActionPopup;
