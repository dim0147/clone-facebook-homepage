import Container from '@/components/Popover/Container';
import styled from 'styled-components';

import { FaEdit } from 'react-icons/fa';

const Header = styled.div`
  padding: 10px;
`;

const Action = styled.div`
  margin: 10px;
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
      font-size: 0.7em;
      font-weight: 200;
  }
`;

const CreateList = () => {
  return (
    <Container>
      <Header>
        <h2>Create</h2>
      </Header>

      <Action>
        <ActionIcon>
          <FaEdit />
        </ActionIcon>

        <ActionContent>
          <p>Post</p>
          <span>Create a post</span>
        </ActionContent>
      </Action>
    </Container>
  );
};

export default CreateList;
