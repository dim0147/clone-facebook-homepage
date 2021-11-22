import Action from '@/components/Popover/Action';
import Container from '@/components/Popover/Container';
import { FaCheck, FaCog, FaTv } from 'react-icons/fa';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 5px 0px;
`;

const NotificationSettingPopup = () => {
  return (
    <Container>
      <Wrapper>
        <Action>
          <FaCheck />
          Mark all as read
        </Action>

        <Action>
          <FaCog />
          Notification settings
        </Action>

        <Action>
          <FaTv />
          Open notifications
        </Action>
      </Wrapper>
    </Container>
  );
};

export default NotificationSettingPopup;
