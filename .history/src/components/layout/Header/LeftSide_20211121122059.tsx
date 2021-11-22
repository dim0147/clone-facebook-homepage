import CovidImg from '@img/Facebook.png';
import { useState } from 'react';
import { FaSearch, FaArrowLeft } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

interface SearchInputProps {
  isFocus: boolean;
}

const LeftSide = styled.div`
  display: flex;
  padding-top: 10px;
  margin-left: 16px;
  gap: 0 10px;
  width: 320px;
`;

const InputField = styled.div`
  display: flex;
  align-self: center;
`;

const SearchInput = styled.input`
  border-radius: 50px;
  height: 40px;
  background-color: #f0f2f5;
  border: none;
  outline: none;
  padding: 5px 10px;
  padding-left: ${(props: SearchInputProps) =>
    props.isFocus ? '16px' : '40px'};
  font-size: 15px;
  width: 100%;
  max-width: 270px;
  transition: padding 0.2s ease;
`;

const FadeRight = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translate(0px)
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  padding: 11px 15px;
  width: 40px;
  color: #65676b;
`;

const LeftArrowIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  color: #8c8d90;
  cursor: pointer;
  padding: 10px;
  :hover {
    border-radius: 50%;
    background-color: #f2f2f2;
  }
  animation: ${FadeRight} 0.3s ease;
`;

const Header = () => {
  const [isFocus, setFocus] = useState<boolean>(false);

  const onFocus = () => setFocus(true);
  const onBlur = () => setFocus(false);

  return (
    <LeftSide>
      {!isFocus && <img width={40} height={40} src={CovidImg} alt="" />}
      <InputField>
        {!isFocus && (
          <SearchIcon>
            <FaSearch color="#606770" />
          </SearchIcon>
        )}

        {isFocus && (
          <LeftArrowIcon>
            <FaArrowLeft />
          </LeftArrowIcon>
        )}

        <SearchInput
          isFocus={isFocus}
          placeholder="Search Facebook"
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </InputField>
    </LeftSide>
  );
};

export default Header;
