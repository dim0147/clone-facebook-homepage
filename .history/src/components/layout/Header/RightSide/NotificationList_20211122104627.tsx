import Popover from '@/components/Popover';
import Action from '@/components/Popover/Action';
import Container from '@/components/Popover/Container';
import { FaEllipsisH } from 'react-icons/fa';
import styled from 'styled-components';
import { MessageRowProps } from './MessageRow';
import NotificationRow, { NotificationRowProps } from './NotificationRow';
import NotificationSettingPopup from './NotificationSettingPopup';
import RomanReignsImg from '@img/RomanReigns.jpg';

interface BillProps {
  active?: boolean;
}

const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-left: 15px;
`;

const BillList = styled.div`
  display: flex;
  padding: 10px;
  gap: 0 10px;
`;

const Bill = styled.div`
  cursor: pointer;
  padding: 8px 10px;
  font-weight: 600;
  border-radius: 18px;
  background: ${({ active }: BillProps) => (active ? '#E7F3FF' : '#e4e6eb')};
  color: ${({ active }: BillProps) => (active ? '#3789F4' : '#000')};
  :hover {
    background: ${({ active }: BillProps) => (active ? '#DBE7F2' : '#d8dadf')};
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;

  div {
    padding: 10px;
    cursor: pointer;
    color: ${(props) => props.theme.linkColor};
    :hover {
      background: ${(props) => props.theme.bgMenuHover};
    }
  }
`;

const ActionList = styled.div`
  display: flex;
  gap: 0px 5px;
  padding: 0px 10px;
`;

const ListContainer = styled.div`
  margin-bottom: 10px;
`;

const NotificationList = () => {
  const notificationList: NotificationRowProps[] = [
    {
      avatar: RomanReignsImg,
      content:
        '<strong>Roman Reign</strong> is live now: "Dont miss a second of the action on the Survivor Series Kickoff as Sh...".',
      //   content: 'Lorem ipsum, dolor wd wa dwa awdawd  dd awihu adwhui whadui dw kaw koaio awmdi',
      isRead: false,
      time: '5 minutes ago',
      type: 'live',
    },
  ];

  return (
    <Container>
      <TopSection>
        <h1 style={{ fontWeight: 700 }}> Notifications</h1>
        <ActionList>
          <Popover
            disclosure={
              <Action>
                <FaEllipsisH />
              </Action>
            }
            content={<NotificationSettingPopup />}
            basePopover={{ zIndex: 2 }}
          />
        </ActionList>
      </TopSection>

      <BillList>
        <Bill active>All</Bill>
        <Bill>Unread</Bill>
      </BillList>

      <Header>
        <h4>New</h4>
        <div>See all</div>
      </Header>

      {notificationList.map((e) => (
        <NotificationRow {...e}></NotificationRow>
      ))}

      <div style={{ marginBottom: 50 }}></div>
    </Container>
  );
};

export default NotificationList;
