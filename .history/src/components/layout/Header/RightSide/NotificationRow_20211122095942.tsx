import styled from 'styled-components';

import { FaVideo } from 'react-icons/fa';

export interface NotificationRowProps {
  avatar: string;
  content: string;
  isRead: boolean;
  time: string;
  type: 'like' | 'friend-request' | 'comment' | 'live';
}

const Wrapper = styled.div`
  padding: 0px 5px;
`;

const Container = styled.div`
  display: flex;
  :hover {
    background-color: ${(props) => props.theme.bgMenuHover};
  }
`;

const NotifyImg = styled.div`
  border-radius: 50%;
  width: 56px;
  height: 56px;
  position: relative;

  > img {
    border-radius: 50%;
  }

  > div {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ec2949;

    bottom: 0;
    right: 0;
  }
`;

const NotifyContent = styled.div`
  flex-grow: 1;
`;

const NotificationRow = ({
  avatar,
  content,
  isRead,
  time,
  type,
}: NotificationRowProps) => {
  return (
    <Wrapper>
      <Container>
        <NotifyImg>
          <img src={avatar} alt="" />
          <div>
            <FaVideo />
          </div>
        </NotifyImg>
        <NotifyContent>{content}</NotifyContent>
      </Container>
    </Wrapper>
  );
};

export default NotificationRow;
