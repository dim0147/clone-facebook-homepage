import CovidImg from '@img/Facebook.png';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

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
`;

const SearchIcon = styled.span`
  position: absolute;
  padding: 11px 15px;
  width: 40px;
  color: #65676b;
`;

const Header = () => {
  return (
    <LeftSide>
      <img width={40} height={40} src={CovidImg} alt="" />
      <div className="input-field">
        <SearchIcon>
          <FaSearch color="#606770" />
        </SearchIcon>
        <SearchInput placeholder="Search Facebook" />
      </div>
    </LeftSide>
  );
};

export default Header;
