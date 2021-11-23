import Container from '@/components/Popover/Container';
import styled from 'styled-components';

const Header = styled.div`
    padding: 10px;
`;

const CreateList = () => {
  return (
    <Container>
      <Header>
        <h2>Create</h2>
      </Header>
    </Container>
  );
};

export default CreateList;
