import styled from 'styled-components';

interface ActionProps {
  noBackground?: boolean
}

export const Action = styled.div`
  padding: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  :hover {
    background: ${(props: ActionProps) => props.noBackground ?  'unset' : '#f4f4f4'};
  }
`;

export const ActionIcon = styled.div`
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

export const ActionContent = styled.div`
  flex: 1;
  > p {
    font-weight: 600;
  }

  > span {
    color: #65676b;
    font-size: 0.8rem;
    font-weight: 200;
  }
`;

export const NavigationHeader = styled.div`
  display: flex;
  gap: 0px 10px;
  margin-bottom: 15px;
`;

export const NavigationIcon = styled.div`
  cursor: pointer;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border-radius: 50%;
  :hover {
    background: #e4e6eb;
  }
`;
