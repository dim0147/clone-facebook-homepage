import styled from 'styled-components';

import { FaCircle, FaVideo } from 'react-icons/fa';
import { StatusIcon } from './MessageRow';

export interface NotificationRowProps {
  avatar: string;
  content: string;
  isRead: boolean;
  time: string;
  type: 'like' | 'friend-request' | 'comment' | 'live';
}

const Wrapper = styled.div`
  padding: 0px 10px;
  :not(::first-child) {
    margin-top: 20px;
  }
`;

const Container = styled.div`
border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  :hover {
    background-color: ${(props) => props.theme.bgMenuHover};
  }
`;

const NotifyImg = styled.div`
  border-radius: 50%;
  min-width: 0;
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
  flex-basis: 0;
  margin-left: 20px;
  min-width: 0;

  > div {
    line-height: 1.2em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  & > span {
    font-weight: 700;
    font-size: 0.8em;
    color: ${(props) => props.theme.linkColor};
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
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
          <span>{time}</span>
        </NotifyContent>

        <StatusIcon>
          <FaCircle color="#1876F2" />
        </StatusIcon>
      </Container>
    </Wrapper>
  );
};

export default NotificationRow;
