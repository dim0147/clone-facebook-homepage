import CovidImg from '@img/Facebook.png';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
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

const SearchInput = styled.input`
  border-radius: 50px;
  height: 40px;
  background-color: #f0f2f5;
  border: none;
  outline: none;
  padding: 5px 10px;
  padding-left: 40px;
  font-size: 15px;
  width: 40px;
`;

const SearchIcon = styled.span`
  position: absolute;
  padding: 11px 15px;
  width: 40px;
  color: #65676b;
`;

const Header = () => {
  const [isFocus, setFocus] = useState<boolean>(false);

  const onFocus = () => setFocus(true);
  const onBlur = () => setFocus(false);

  return (
    <LeftSide>
      {!isFocus && <img width={40} height={40} src={CovidImg} alt="" />}
      <div className="input-field">
        {!isFocus && (
          <SearchIcon>
            <FaSearch color="#606770" />
          </SearchIcon>
        )}
        <SearchInput
          placeholder="Search Facebook"
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
    </LeftSide>
  );
};

export default Header;
