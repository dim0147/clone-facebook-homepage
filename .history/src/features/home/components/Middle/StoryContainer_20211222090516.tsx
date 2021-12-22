import styled from 'styled-components';
import { StoryCard, StoryContainerProps } from './StoryCard';

import StoryImg from '@img/Story_1.jpg';
import StoryImg2 from '@img/Story_2.jpg';
import StoryImg3 from '@img/Story_3.jpg';
import StoryImg4 from '@img/Story_4.jpg';
import ProfileImg from '@img/Profile.jpg';

const Container = styled.div`
  width: 590px;
  margin-top: 40px;
  display: flex;
  gap: 0 10px;
  overflow-x: hidden;
`;

const stories: StoryContainerProps[] = [
  {
    storyImg: StoryImg,
    profileName: 'Dim',
    profileImg: ProfileImg,
  },
  {
    storyImg: StoryImg2,
    profileName: 'Dim Brother',
    profileImg: ProfileImg,
  },
  {
    storyImg: StoryImg3,
    profileName: 'Dim Sister',
    profileImg: ProfileImg,
  },
  {
    storyImg: StoryImg4,
    profileName: 'Dim Cousin',
    profileImg: ProfileImg,
  },
  {
    storyImg: StoryImg,
    profileName: 'Dim Wife',
    profileImg: ProfileImg,
  },
];

export const StoryContainer = () => {
  return (
    <Container>
      {stories.map((e, i) => (
        <StoryCard key={i} {...e} />
      ))}
    </Container>
  );
};
