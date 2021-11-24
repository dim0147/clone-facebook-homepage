import styled from 'styled-components';

const Action = styled.div`
  padding: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  :hover {
    background: #f4f4f4;
  }
`;

const ActionIcon = styled.div`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  background-color: #e4e6eb;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border-radius: 50%;
`;

const ActionContent = styled.div`
  > p {
    font-weight: 600;
  }

  > span {
    color: #65676b;
    font-size: 0.8rem;
    font-weight: 200;
  }
`;
