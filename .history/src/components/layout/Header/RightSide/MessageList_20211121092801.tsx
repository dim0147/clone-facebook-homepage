import styled from 'styled-components';

import { FaEllipsisH, FaCompress, FaVideo, FaEdit } from 'react-icons/fa';

import SearchInput from '@/components/SearchInput';
import MessageRow, { MessageRowProps } from './MessageRow';
import SeeAllMessage from './SeeAllMessage';

export const Container = styled.div`
  position: relative;
  border-radius: 10px;
  box-shadow: 0 12px 28px 0 #d8d9dc;
  width: 370px;
  margin-right: 20px;
  max-height: calc(100vh - 100px);
  overflow-y: scroll;
  /* width */
  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #bcc0c4;
    border-radius: 5px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-left: 15px;
`;

const ActionList = styled.div`
  display: flex;
  gap: 0px 5px;
`;

const Action = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  color: #7a8087;
  cursor: pointer;
  border-radius: 50%;
  justify-content: center;
  :hover {
    background-color: #f2f2f2;
  }
`;

const SearchSection = styled.div`
  padding: 10px 20px;
`;

const ListContainer = styled.div`
  margin-bottom: 10px;
`;

const MessageList = () => {
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
      <>
        <TopSection>
          <h1 style={{ fontWeight: 700 }}>Message</h1>
          <ActionList>
            <Action>
              <FaEllipsisH />
            </Action>

            <Action>
              <FaCompress />
            </Action>

            <Action>
              <FaVideo />
            </Action>

            <Action>
              <FaEdit />
            </Action>
          </ActionList>
        </TopSection>

        <SearchSection>
          <SearchInput placeholder="Search Messages" inputWidth="100%" />
        </SearchSection>

        <ListContainer>
          {messageList.map((e, i) => (
            <MessageRow key={i} {...e} />
          ))}
        </ListContainer>
      </>
      <SeeAllMessage />
    </Container>
  );
};

export default MessageList;
