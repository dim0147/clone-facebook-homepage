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
    height: 100%;
    object-fit: cover;
  }
`;

const ProfileOverlap = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  :hover {
      background-color: rgb(194, 194, 194);
      opacity: 0.5;
    }

  /* Profile image */
  > div {
    margin-top: 10px;
    margin-left: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 4px solid #1876f2;
    > img {
      width: 100%;
      border-radius: 50%;
    }
  }
  > p {
    color: white;
    font-weight: 600;
    font-size: 15px;
    padding: 10px 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
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
      <ProfileOverlap>
        <div>
          <img src={profileImg} alt="" />
        </div>
        <p>{profileName} </p>
      </ProfileOverlap>
    </Container>
  );
};
