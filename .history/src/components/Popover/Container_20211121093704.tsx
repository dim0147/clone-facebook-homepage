import styled from 'styled-components';

interface ContainerProps {
  zIndex?: number;
}

const Container = styled.div`
  z-index: ${(props: ContainerProps ) => props.zIndex ?? 1};
  position: relative;
  border-radius: 10px;
  box-shadow: 0 12px 28px 0 #d8d9dc;
  width: 370px;
  margin-right: 20px;
  max-height: calc(100vh - 100px);
  overflow-y: scroll;
  overflow-x: hidden;
  /* width */
  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #bcc0c4;
    border-radius: 5px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
export default Container;
