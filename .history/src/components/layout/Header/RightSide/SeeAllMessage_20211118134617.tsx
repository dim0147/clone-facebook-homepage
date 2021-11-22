import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  position: sticky;
  bottom: 0;
  padding: 10px 0px;
  border-top: 1px solid #e5e5e5;
  background-color: #FFFFFF;
`;

const Header = styled.p`
  color: #216FDB;
  font-weight: 600;
  text-align: center;
`;

const SeeAllMessage = () => {
  return (
    <Container>
      <Header>See all in Messenger</Header>
    </Container>
  );
};

export default SeeAllMessage;
