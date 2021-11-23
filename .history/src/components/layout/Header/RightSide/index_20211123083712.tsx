import styled from 'styled-components';

import { FaPlus, FaArrowDown } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import MessageIcon from '@icons/Message';
import NotificationIcon from '@icons/Notification';

import Popover from '@/components/Popover/index';
import MessageList from './MessageList';
import NotificationList from './NotificationList';
import CreateList from './CreateList';

interface IconBtnProps {
  isDropDown?: boolean;
}

const Container = styled.div`
  display: flex;
  gap: 0px 10px;
  padding: 10px 0px;
  margin-right: 10px;
`;

const ProfileLink = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
  border-radius: 18px;
  align-self: center;
  padding: 5px;
  :hover {
    background: #f2f2f2;
  }
`;

const ProfileLinkImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 18px;
`;
const ProfileLinkName = styled.div`
  margin: 0px 10px;
`;

const IconBtn = styled.div`
  position: relative;
  border-radius: 50%;
  background: #e4e6eb;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  :hover {
    background: #d8dadf;
  }
  padding-top: ${({ isDropDown }: IconBtnProps) =>
    isDropDown ? '-5px' : 'unset'};
`;

const IconBadge = styled.div`
  position: absolute;
  display: flex;
  background-color: red;
  border-radius: 50%;
  padding: 3px 7px;
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  top: -10px;
  right: -10px;
`;

const RightSide = () => {
  const messageBtn = (
    <IconBtn>
      <IconBadge>5</IconBadge>
      <MessageIcon width={20} height={20} />
    </IconBtn>
  );

  return (
    <Container>
      <ProfileLink>
        <ProfileLinkImg
          src="https://avatars.githubusercontent.com/u/44487221?v=4"
          alt=""
        />
        <ProfileLinkName>
          <span>Dim</span>
        </ProfileLinkName>
      </ProfileLink>

      <IconBtn>
        <FaPlus />
      </IconBtn>

      <Popover
        disclosure={
          <IconBtn>
            <IconBadge>5</IconBadge>
            <MessageIcon width={20} height={20} />
          </IconBtn>
        }
        content={<MessageList />}
      />

      <Popover
        disclosure={
          <IconBtn>
            <IconBadge>3</IconBadge>
            <NotificationIcon width={20} height={20} />
          </IconBtn>
        }
        content={<NotificationList />}
      />

      <Popover
        disclosure={
          <IconBtn style={{ color: '#050505' }}>
            <FiChevronDown width={20} height={20} />
          </IconBtn>
        }
        content={<CreateList />}
      />
    </Container>
  );
};

export default RightSide;
