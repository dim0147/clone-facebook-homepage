import Popover from '@/components/Popover';
import Action from '@/components/Popover/Action';
import Container from '@/components/Popover/Container';
import { FaEllipsisH } from 'react-icons/fa';
import styled from 'styled-components';
import { MessageRowProps } from './MessageRow';
import NotificationSettingPopup from './NotificationSettingPopup';

interface BillProps {
  active?: boolean;
}

const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-left: 15px;
`;

const BillList = styled.div`
  display: flex;
  padding: 10px;
  gap: 0 10px;
`;

const Bill = styled.div`
  cursor: pointer;
  padding: 8px 10px;
  font-weight: 600;
  border-radius: 18px;
  background: ${({ active }: BillProps) => (active ? '#E7F3FF' : '#e4e6eb')};
  color: ${({ active }: BillProps) => (active ? '#3789F4' : '#000')};
  :hover {
    background: ${({ active }: BillProps) => (active ? '#DBE7F2' : '#d8dadf')};
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  
  h4 {
      color: red;
  }
`;

const ActionList = styled.div`
  display: flex;
  gap: 0px 5px;
  padding: 0px 10px;
`;

const ListContainer = styled.div`
  margin-bottom: 10px;
`;

const NotificationList = () => {
  const messageList: MessageRowProps[] = [
    {
      avatarSrc: 'https://avatars.githubusercontent.com/u/44487221?v=4',
      name: 'Dim',
      lastMessage: 'This is Facebook Home Page Clone by dim0147',
      time: '3d',
      status: 'read',
    },
    {
      avatarSrc: 'https://avatars.githubusercontent.com/u/44487221?v=4',
      name: "Dim's Brother",
      lastMessage:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi a illo assumenda tempora distinctio consectetur nemo nam veritatis molestias dolor possimus, exercitationem quis debitis. Eum velit voluptatem inventore maxime quidem.',
      time: '3d',
      status: 'notification-off',
    },

    {
      avatarSrc: 'https://avatars.githubusercontent.com/u/44487221?v=4',
      name: 'Dims Friends',
      lastMessage: 'Get me some cakes',
      time: '3d',
      status: 'unread',
    },
    {
      avatarSrc: 'https://avatars.githubusercontent.com/u/44487221?v=4',
      name: 'Dims Friends',
      lastMessage: 'Get me some cakes',
      time: '3d',
      status: 'unread',
    },
    {
      avatarSrc: 'https://avatars.githubusercontent.com/u/44487221?v=4',
      name: 'Dims Friends',
      lastMessage: 'Get me some cakes',
      time: '3d',
      status: 'unread',
    },
    {
      avatarSrc: 'https://avatars.githubusercontent.com/u/44487221?v=4',
      name: 'Dims Friends',
      lastMessage: 'Get me some cakes',
      time: '3d',
      status: 'unread',
    },
    {
      avatarSrc: 'https://avatars.githubusercontent.com/u/44487221?v=4',
      name: 'Dims Friends',
      lastMessage: 'Get me some cakes',
      time: '3d',
      status: 'unread',
    },
    {
      avatarSrc: 'https://avatars.githubusercontent.com/u/44487221?v=4',
      name: 'Dims Friends',
      lastMessage: 'Get me some cakes',
      time: '3d',
      status: 'unread',
    },
    {
      avatarSrc: 'https://avatars.githubusercontent.com/u/44487221?v=4',
      name: 'Dims Friends',
      lastMessage: 'Get me some cakes',
      time: '3d',
      status: 'unread',
    },
    {
      avatarSrc: 'https://avatars.githubusercontent.com/u/44487221?v=4',
      name: 'Dims Friends',
      lastMessage: 'Get me some cakes',
      time: '3d',
      status: 'unread',
    },
    {
      avatarSrc: 'https://avatars.githubusercontent.com/u/44487221?v=4',
      name: 'Dims Friends',
      lastMessage: 'Get me some cakes',
      time: '3d',
      status: 'unread',
    },
    {
      avatarSrc: 'https://avatars.githubusercontent.com/u/44487221?v=4',
      name: 'Dims Friends',
      lastMessage: 'Get me some cakes',
      time: '3d',
      status: 'unread',
    },
    {
      avatarSrc: 'https://avatars.githubusercontent.com/u/44487221?v=4',
      name: 'Dims Friends',
      lastMessage: 'Get me some cakes',
      time: '3d',
      status: 'unread',
    },
    {
      avatarSrc: 'https://avatars.githubusercontent.com/u/44487221?v=4',
      name: 'Dims Friends',
      lastMessage: 'Get me some cakes',
      time: '3d',
      status: 'unread',
    },
    {
      avatarSrc: 'https://avatars.githubusercontent.com/u/44487221?v=4',
      name: 'Dims Friends',
      lastMessage: 'Get me some cakes',
      time: '3d',
      status: 'unread',
    },
    {
      avatarSrc: 'https://avatars.githubusercontent.com/u/44487221?v=4',
      name: 'Dims Friends',
      lastMessage: 'Get me some cakes',
      time: '3d',
      status: 'unread',
    },
    {
      avatarSrc: 'https://avatars.githubusercontent.com/u/44487221?v=4',
      name: 'Dims Friends',
      lastMessage: 'Get me some cakes',
      time: '3d',
      status: 'unread',
    },
  ];

  return (
    <Container>
      <TopSection>
        <h1 style={{ fontWeight: 700 }}> Notifications</h1>
        <ActionList>
          <Popover
            disclosure={
              <Action>
                <FaEllipsisH />
              </Action>
            }
            content={<NotificationSettingPopup />}
            basePopover={{ zIndex: 2 }}
          />
        </ActionList>
      </TopSection>

      <BillList>
        <Bill active>All</Bill>
        <Bill>Unread</Bill>
      </BillList>

      <Header>
        <h4>New</h4>
        <div>See all</div>
      </Header>
    </Container>
  );
};

export default NotificationList;
