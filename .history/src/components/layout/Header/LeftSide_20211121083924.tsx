import CovidImg from '@img/Facebook.png';
import { useState } from 'react';
import { FaSearch, FaArrowLeft } from 'react-icons/fa';
import styled from 'styled-components';

interface SearchInputProps {
  isFocus: boolean;
}

const LeftSide = styled.div`
  display: flex;
  padding-top: 10px;
  margin-left: 16px;
  gap: 0 10px;
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
  transition: padding 1s ease;
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
  margin-right: 15px;
`;

const Header = () => {
  const [isFocus, setFocus] = useState<boolean>(false);

  const onFocus = () => setFocus(true);
  const onBlur = () => setFocus(false);

  return (
    <LeftSide>
      {/* {!isFocus && <img width={40} height={40} src={CovidImg} alt="" />} */}
      <InputField>
        {/* {!isFocus && (
          <SearchIcon>
            <FaSearch color="#606770" />
          </SearchIcon>
        )} */}

        <LeftArrowIcon>
          <FaArrowLeft />
        </LeftArrowIcon>

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
