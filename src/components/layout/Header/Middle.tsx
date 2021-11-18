import styled from 'styled-components';

import HomeIcon from '@icons/Home';
import FriendIcon from '@icons/Friend';
import PageIcon from '@icons/Page';
import WatchIcon from '@icons/Watch';
import GroupIcon from '@icons/Group';

interface ItemProps {
  active?: boolean;
}

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 0px 10px;
`;

const Item = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  max-width: 130px;
  min-width: 50px;
  margin: 5px 0px;
  padding: 10px 0px;
  border-bottom: ${(props: ItemProps) =>
    props.active ? '3px solid #1B74E4' : 'unset'};
  :hover {
    background: ${(props: ItemProps) => (props.active ? 'unset' : '#f2f2f2')};
  }
`;

const Middle = () => {
  return (
    <Container>
      <Item active>
        <HomeIcon fill={'blue'} width={28} height={28} />
      </Item>
      <Item>
        <FriendIcon width={28} height={28} />
      </Item>
      <Item>
        <PageIcon width={28} height={28} />
      </Item>
      <Item>
        <WatchIcon width={28} height={28} />
      </Item>
      <Item>
        <GroupIcon width={28} height={28} />
      </Item>
    </Container>
  );
};

export default Middle;
