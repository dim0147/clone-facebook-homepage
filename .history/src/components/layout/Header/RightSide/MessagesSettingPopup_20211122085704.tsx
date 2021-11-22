import {
  FaCheck,
  FaFacebookMessenger,
  FaBellSlash,
  FaPhoneAlt,
  FaVideo,
  FaSignOutAlt,
  FaVolumeOff,
} from 'react-icons/fa';

import { FiMessageSquare } from 'react-icons/fi';
import { TiMessages } from 'react-icons/ti';

import {
  BiPhoneIncoming,
  BiBlock,
  BiMessageRoundedDetail,
} from 'react-icons/bi';

import Container from '@/components/Popover/Container';
import styled from 'styled-components';
import Action from '@/components/Popover/Action';

const Header = styled.div`
  padding: 10px;
  & > span {
    font-size: 0.9em;
    color: #999a9d;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 5px 0px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  :hover {
    background: #f2f2f2;
  }
  cursor: pointer;
`;

const Checkbox = styled.label`
  margin-right: 5px;
  display: inline-block;
  position: relative;
  width: 48px;
  height: 28px;

  & > input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  & > span {
    cursor: pointer;
    background-color: #ced0d4;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 20px;

    ::before {
      position: absolute;
      content: '';
      width: 20px;
      height: 20px;
      left: 4px;
      bottom: 4px;
      background: #fff;
      transition: transform 0.4s;
      border-radius: 50%;
    }
  }

  & > input:checked + span {
    background-color: #1876f2;
    ::before {
      transform: translateX(20px);
    }
  }
`;

const Divider = styled.div`
  border-top: 1px solid #dadcdf;
`;

const MessageSettingPopup = () => {
  return (
    <Container>
      <Header>
        <h3>Chat Settings</h3>
        <span>Customize your Messenger experiences</span>
      </Header>

      <Wrapper>
        <Divider />

        <Row>
          <Action>
            <BiPhoneIncoming />
            Incoming call sound
          </Action>

          <Checkbox>
            <input type="checkbox" />
            <span></span>
          </Checkbox>
        </Row>

        <Row>
          <Action>
            <FaVolumeOff />
            Message Sound
          </Action>

          <Checkbox>
            <input type="checkbox" />
            <span></span>
          </Checkbox>
        </Row>

        <Row>
          <Action>
            <FaFacebookMessenger />
            Popup new message
          </Action>

          <Checkbox>
            <input type="checkbox" />
            <span></span>
          </Checkbox>
        </Row>

        <Divider />

        <Action>
          <FiMessageSquare />
          Turn off active status
        </Action>

        <Action>
          <TiMessages />
          Message request
        </Action>

        <Action>
          <BiMessageRoundedDetail />
          Message delivery settings
        </Action>

        <Action>
          <BiBlock />
          Block settings
        </Action>
      </Wrapper>
    </Container>
  );
};

export default MessageSettingPopup;
