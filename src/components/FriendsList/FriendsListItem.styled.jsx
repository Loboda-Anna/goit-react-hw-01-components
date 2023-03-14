import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  background-color: white;
  box-shadow: 5px 5px 10px -5px rgba(120, 111, 111, 0.66);
  margin-bottom: 15px;
  padding: 12px;
  align-items: center;
  justify-content: start;
  gap: 15px;
`;

export const Status = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => {
    if (props.isOnline) {
      return `rgba(0, 220, 0, 1)`;
    }
    return `rgba(255, 0, 18, 1)`;
  }};
`;

export const Name = styled.p`
  font-size: 22px;
  margin: 0;
  font-weight: 500;
`;
