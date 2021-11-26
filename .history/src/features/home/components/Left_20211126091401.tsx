import React, { useState } from 'react';
import styled from 'styled-components';

import { FaChevronDown } from 'react-icons/fa';

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

const Container = styled.div`
  padding: 15px 7px;
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
      background-color: #D8DADF;
  }
`;

export const Left = () => {
  const [expand, setExpand] = useState<boolean>(true);

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

      <Action>
        <ExpandBtn>
          <FaChevronDown />
        </ExpandBtn>
        <p>See more</p>
      </Action>


    </Container>
  );
};
