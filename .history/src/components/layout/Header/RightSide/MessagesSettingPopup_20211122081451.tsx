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

const Header = styled.div`
  padding: 10px;
  & > span {
    font-size: 0.9em;
    color: #999a9d;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 5px 0px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Action = styled.div`
  font-weight: 600;
  padding: 10px;
  :hover {
    background: #f2f2f2;
  }
  display: flex;
  gap: 0px 10px;
  align-items: center;
  cursor: pointer;
`;

const Checkbox = styled.label`

`;

const Divider = styled.div`
  border-top: 1px solid #dadcdf;
`;

const MessageSettingPopup = () => {
  return (
    <Container>
      <Header>
        <h3>Chat Settings</h3>
        <span>Customize your Messenger experiences</span>
      </Header>

      <Wrapper>
        <Divider />

        <Row>
          <Action>
            <FaCheck />
            Mark as read
          </Action>

          <Checkbox>
            <input type="checkbox" />
            <span></span>
          </Checkbox>
          
        </Row>

        <Action>
          <FaFacebookMessenger />
          Open In Message
        </Action>

        <Action>
          <FaBellSlash />
          Mute conversation
        </Action>

        <Divider />

        <Action>
          <FaPhoneAlt />
          Audio Call
        </Action>

        <Action>
          <FaVideo />
          Video Call
        </Action>

        <Action>
          <FaSignOutAlt />
          Leave Group
        </Action>
      </Wrapper>
    </Container>
  );
};

export default MessageSettingPopup;
