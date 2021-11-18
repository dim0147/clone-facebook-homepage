import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

type SearchInputProps = {
  placeholder: string;
  inputWidth?: string | number;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

interface InputProps {
  inputWidth?: string | number;
}

const Input = styled.input`
  border-radius: 50px;
  height: 40px;
  background-color: #f0f2f5;
  border: none;
  outline: none;
  padding: 5px 10px;
  padding-left: 40px;
  font-size: 15px;
  width: ${({ inputWidth }: InputProps) => (inputWidth ? inputWidth : 'unset')};
`;

const Icon = styled.span`
  position: absolute;
  padding: 11px 15px;
  width: 40px;
  color: #65676b;
`;

const SearchInput = ({
  placeholder,
  inputWidth,
  ...props
}: SearchInputProps) => {
  return (
    <div {...props}>
      <Icon>
        <FaSearch color="#606770" />
      </Icon>
      <Input inputWidth={inputWidth} placeholder={placeholder} />
    </div>
  );
};

export default SearchInput;
