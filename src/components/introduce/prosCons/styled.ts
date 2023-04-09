import styled from '@emotion/styled';

export const PropsConsElement = styled.div`
  display: flex;
  flex-direction: column;

  width: 300px;
  height: 300px;

  margin: 0 20px 0 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

export const ElementTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
  text-align: center;

  margin-top: 40px;
`;
export const ElementDescContainer = styled.div`
  display: flex;
  margin: auto;
  width: 80%;
`;
export const ElementDesc = styled.span`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  line-height: 20px;
`;
