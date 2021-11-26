import React, { useState } from 'react';
import styled from 'styled-components';

import {
  FaChevronDown,
  FaChevronUp,
  FaRegArrowAltCircleRight,
} from 'react-icons/fa';

import FriendImg from '@img/Friends.png';
import MemoriesImg from '@img/Memories.png';
import GroupImg from '@img/Group.png';
import WatchImg from '@img/Watch.png';
import MarketplaceImg from '@img/Marketplace.png';
import AdCenterImg from '@img/AdCenter.png';
import AdsManagerImg from '@img/AdsManager.png';
import BloodDonationImg from '@img/BloodDonation.png';
import CampusImg from '@img/Campus.png';
import Covid19Img from '@img/Covid19.png';
import SavedImg from '@img/Saved.png';
import { Divider } from '@/components/Popover/Container';

const Container = styled.div`
  padding: 15px 7px;
  padding-right: 0;
  max-height: 100vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    :hover {
      background: #bcc0c4;
    }
  }
  :hover {
    ::-webkit-scrollbar-thumb {
      background: #bcc0c4;
    }
  }
`;

const Action = styled.div`
  display: flex;
  gap: 0px 10px;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  padding: 8px 12px;
  :hover {
    background-color: #e4e6e9;
  }

  > img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }

  > p {
    font-size: 15px;
    font-weight: 600;
  }

  :hover > div {
    background-color: #d8dadf;
  }
`;

const ExpandBtn = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e4e6eb;
  color: black;
  border-radius: 50%;
  cursor: pointer;
  :hover {
    background-color: #d8dadf;
  }
`;

const ShortCutSection = styled.div`
  :hover {
    #shortcut-edit {
      display: block;
    }
  }
`;

const ShortCutHeader = styled.div`
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > p {
    font-size: 17px;
    font-weight: 600;
    color: #6d6f73;
  }

  > div {
    display: none;
    color: #6394d9;
    cursor: pointer;
    font-weight: 500;
    :hover {
      background-color: #e4e6e9;
    }
    padding: 10px;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
  a {
    color:rgb(101, 103, 107);
    font-size: 13px;
    text-decoration: none;
    text-decoration-color: rgb(101, 103, 107);
    :hover {
      text-decoration: underline;
    }
  }
`;

export const Left = () => {
  const [expand, setExpand] = useState<boolean>(false);

  const onExpand = () => setExpand(!expand);

  return (
    <Container>
      <Action>
        <img
          src="https://avatars.githubusercontent.com/u/44487221?v=4"
          alt=""
        />
        <p>Dim</p>
      </Action>

      <Action>
        <img src={FriendImg} />
        <p>Friends</p>
      </Action>

      <Action>
        <img src={MemoriesImg} />
        <p>Memories</p>
      </Action>

      <Action>
        <img src={GroupImg} />
        <p>Groups</p>
      </Action>

      <Action>
        <img src={WatchImg} />
        <p>Watch</p>
      </Action>

      {expand && (
        <>
          <Action>
            <img src={MarketplaceImg} />
            <p>Marketplace</p>
          </Action>

          <Action>
            <img src={AdCenterImg} />
            <p>Ad Center</p>
          </Action>

          <Action>
            <img src={AdsManagerImg} />
            <p>Ads Manager</p>
          </Action>

          <Action>
            <img src={BloodDonationImg} />
            <p>Blood donations</p>
          </Action>

          <Action>
            <img src={CampusImg} />
            <p>Campus</p>
          </Action>

          <Action>
            <img src={Covid19Img} />
            <p>COVID-19 Information Center</p>
          </Action>

          <Action>
            <img src={SavedImg} />
            <p>Saved</p>
          </Action>
        </>
      )}
      <Action onClick={onExpand}>
        <ExpandBtn>{expand ? <FaChevronUp /> : <FaChevronDown />}</ExpandBtn>
        <p> {expand ? 'See less' : 'See more'}</p>
      </Action>

      <Divider style={{ borderWidth: 2 }} />

      <ShortCutSection>
        <ShortCutHeader>
          <p>Your Shortcuts</p>
          <div id="shortcut-edit">Edit</div>
        </ShortCutHeader>

        <Action>
          <img
            src="https://avatars.githubusercontent.com/u/44487221?v=4"
            alt=""
          />
          <p>Github Group</p>
        </Action>

        <Action>
          <img
            src="https://dim0147.github.io/dyl-editor/en/update/images/bg.jpg"
            alt=""
          />
          <p>DYL Extension</p>
        </Action>

        <Action>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png"
            alt=""
          />
          <p>Facebook Group</p>
        </Action>
      </ShortCutSection>

      <Footer>
        <a href="#">Privacy</a>
        <span> · </span>
        <a href="#">Terms</a>
        <span> · </span>
        <a href="#">Advertising</a>
        <span> · </span>
        <a href="#">
          Ad Choices <FaRegArrowAltCircleRight />
        </a>
        <span> · </span>
      </Footer>
    </Container>
  );
};
