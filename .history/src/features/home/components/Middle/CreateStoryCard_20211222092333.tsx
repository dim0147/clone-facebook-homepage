import styled from 'styled-components';

export interface StoryContainerProps {
  storyImg: string;
  profileImg: string;
  profileName: string;
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
  > img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
`;

const Content = styled.div`
  > p {
    font-weight: 500px;
  }
`;

export const CreateStoryCard = ({
  storyImg,
  profileImg,
  profileName,
}: StoryContainerProps) => {
  return (
    <Container>
      <img src={storyImg} alt="" />
      <Content><p>Create Story</p></Content>
    </Container>
  );
};
