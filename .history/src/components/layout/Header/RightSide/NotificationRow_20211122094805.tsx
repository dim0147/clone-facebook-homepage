import styled from 'styled-components';

interface NotificationRowProps {
  avatar: string;
  content: string;
  isRead: boolean;
  time: string;
  type: 'like' | 'friend-request' | 'comment';
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

const NotificationRow = ({
  avatar,
  content,
  isRead,
  time,
  type,
}: NotificationRowProps) => {
  return;
};

export default NotificationRow;
