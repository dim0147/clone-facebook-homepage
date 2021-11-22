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
    width: 100%;
    /* height: 100%; */
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
    color: white;

    bottom: -5px;
    right: -10px;
  }
`;

const NotifyContent = styled.div`
  flex-grow: 1;
  max-width: 100%;
  margin-left: 10px;
  min-width: 0;

  > span {
    line-height: 1.2em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
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
        <NotifyContent>
          <span>{content}</span>
        </NotifyContent>
      </Container>
    </Wrapper>
  );
};

export default NotificationRow;
