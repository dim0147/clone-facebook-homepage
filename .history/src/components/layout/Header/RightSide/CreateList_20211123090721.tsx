import Container, { Divider } from '@/components/Popover/Container';
import styled from 'styled-components';

import {
  FaEdit,
  FaHistory,
  FaRestroom,
  FaPersonBooth,
  FaPage4,
  FaAd,
} from 'react-icons/fa';

const Header = styled.div`
  padding: 10px;
`;

const Action = styled.div`
  padding: 5px;
  margin-bottom: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  :hover {
    background: #f4f4f4;
  }
`;

const ActionIcon = styled.div`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  background-color: #e4e6eb;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border-radius: 50%;
`;

const ActionContent = styled.div`
  > p {
    font-weight: 600;
  }

  > span {
    color: #65676b;
    font-size: 0.8rem;
    font-weight: 200;
  }
`;

const CreateList = () => {
  return (
    <Container style={{ paddingLeft: 10 }}>
      <Header>
        <h2>Create</h2>
      </Header>

      <Action>
        <ActionIcon>
          <FaEdit />
        </ActionIcon>

        <ActionContent>
          <p>Post</p>
          <span>Share a post on New Feed</span>
        </ActionContent>
      </Action>

      <Action>
        <ActionIcon>
          <FaHistory />
        </ActionIcon>

        <ActionContent>
          <p>Story</p>
          <span>Share a photo or write something</span>
        </ActionContent>
      </Action>

      <Action>
        <ActionIcon>
          <FaRestroom />
        </ActionIcon>

        <ActionContent>
          <p>Room</p>
          <span>
            Video chat with anyone, on or off Facebook, without time limits
          </span>
        </ActionContent>
      </Action>

      <Action>
        <ActionIcon>
          <FaPersonBooth />
        </ActionIcon>

        <ActionContent>
          <p>Group Posts</p>
          <span>Share a post in your group</span>
        </ActionContent>
      </Action>

      <Divider style={{ margin: '15px 0 10px 10px', borderWidth: '2px' }} />

      <Action>
        <ActionIcon>
          <FaPage4 />
        </ActionIcon>

        <ActionContent>
          <p>Page</p>
          <span>Connect and share with customer or fan</span>
        </ActionContent>
      </Action>

      <Action>
        <ActionIcon>
          <FaAd />
        </ActionIcon>

        <ActionContent>
          <p>Ad</p>
          <span>Advertise your business, brand or organization</span>
        </ActionContent>
      </Action>
    </Container>
  );
};

export default CreateList;
