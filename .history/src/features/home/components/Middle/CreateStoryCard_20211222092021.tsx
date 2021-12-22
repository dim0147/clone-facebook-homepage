import styled from 'styled-components';

export interface StoryContainerProps {
  storyImg: string;
  profileImg: string;
  profileName: string;
}

const Container = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 110px;
  height: 200px;
  cursor: pointer;
  > img {
    border-radius: 15px;
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
`;


export const StoryCard = ({
  storyImg,
  profileImg,
  profileName,
}: StoryContainerProps) => {
  return (
    <Container>
      <img src={storyImg} alt="" />
      
    </Container>
  );
};
