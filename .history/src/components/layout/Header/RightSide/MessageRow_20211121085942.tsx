import styled from 'styled-components';

import { FaBell, FaBellSlash, FaCircle } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';

export interface MessageRowProps {
  avatarSrc: string;
  name: string;
  lastMessage: string;
  time: string;
  status: 'unread' | 'read' | 'notification-off';
}

interface LatestMessageProps {
  status: MessageRowProps['status'];
}

const Wrapper = styled.div`
  width: 100%;
  padding: 0px 10px;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  padding: 10px;
  border-radius: 5px;
  :hover {
    background-color: #f2f2f2;
    cursor: pointer;
  }
`;

const Avatar = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  & > img {
    width: 100%;
    border-radius: inherit;
  }
`;

const conversationNameFontWeight = (props: LatestMessageProps): number => {
  switch (props.status) {
    case 'read':
      return 400;

    case 'unread':
      return 600;

    default:
      return 400;
  }
};

const MiddleSection = styled.div`
  flex: 1;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  min-width: 0;
  & > p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: ${conversationNameFontWeight};
  }
`;

const BottomMiddleSection = styled.div`
  display: flex;
  max-width: 100%;
  gap: 0px 3px;
`;

const latestMessageColor = (props: LatestMessageProps): string => {
  switch (props.status) {
    case 'read':
      return '#858689';

    case 'unread':
      return '#6FA9F7';

    default:
      return '#858689';
  }
};

const latestMessageFontWeight = (props: LatestMessageProps): number => {
  switch (props.status) {
    case 'read':
      return 400;

    case 'unread':
      return 700;

    default:
      return 400;
  }
};

const LatestMessage = styled.div`
  margin-top: 3px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.8em;
  color: ${latestMessageColor};
  font-weight: ${latestMessageFontWeight};
`;

const StatusIcon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const MenuAction = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #fff;
  color: #626972;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateX(50%);
`;

const MessageRow = ({
  avatarSrc,
  name,
  lastMessage,
  time,
  status,
}: MessageRowProps) => {
  return (
    <Wrapper>
      <Container>
        <Avatar>
          <img src={avatarSrc} alt="" />
        </Avatar>

        <MiddleSection status={status}>
          <p>{name}</p>
          <BottomMiddleSection>
            <LatestMessage status={status}>{lastMessage}</LatestMessage>
            <span>&middot;</span>
            <span>{time}</span>
          </BottomMiddleSection>
        </MiddleSection>

        <StatusIcon>
          {status === 'notification-off' && <FaBellSlash color="#BEC3C9" />}
          {status === 'unread' && <FaCircle color="#1876F2" />}
        </StatusIcon>

        <MenuAction>
          <BsThreeDots />
        </MenuAction>
      </Container>
    </Wrapper>
  );
};

export default MessageRow;
