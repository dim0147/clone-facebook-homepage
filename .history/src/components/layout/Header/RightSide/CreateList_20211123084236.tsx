import Container from '@/components/Popover/Container';
import styled from 'styled-components';

const Header = styled.div`
    padding: 10px;
`;

const Action = styled.div`
    margin: 5px;
    display: flex;
    :hover {
        background: #F4F4F4;
    }
`;

const ActionIcon = styled.div`
    width: 36px;
    height: 36px;
    background-color: #E4E6EB;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const CreateList = () => {
  return (
    <Container>
      <Header>
        <h2>Create</h2>
      </Header>
    
      <Action>
          <ActionIcon></ActionIcon>
          <div>
              <p>Post</p>
              <span>Create a post</span>
          </div>
      </Action>

    </Container>
  );
};

export default CreateList;
