import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

interface StoryContainerProps {
  profileImg: string;
}

const Container = styled.div`
  position: relative;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  width: 110px;
  height: 200px;
  cursor: pointer;
  border-radius: 15px;
  overflow: hidden;
  > div {
    height: 150px;
    > img {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }
  }
`;

const Content = styled.div`
  position: relative;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  > p {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

const NewStoryBtn = styled.div`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: blue;
  border: 5px solid white;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CreateStoryCard = ({ profileImg }: StoryContainerProps) => {
  return (
    <Container>
      <div>
        <img src={profileImg} alt="" />
      </div>
      <Content>
        <p>Create Story</p>
        <NewStoryBtn>
          <FaPlus />
        </NewStoryBtn>
      </Content>
    </Container>
  );
};
