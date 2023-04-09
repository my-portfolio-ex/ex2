import styled from '@emotion/styled';

export const MyInfoContainer = styled.section`
  width: 100%;
  height: 100%;

  display: flex;

  margin: auto;
  color: #000;
`;
export const MyInfoLeftContainer = styled.section`
  margin: auto 20px auto 10%;
`;
export const HelloContainer = styled.div``;
export const HelloMedium = styled.div`
  font-size: 17px;
  font-weight: 400;
  text-align: left;
`;
export const HelloPointBold = styled.div`
  position: relative;
  width: 165px;
  height: 16px;

  margin-top: 20px;
  margin-bottom: 7px;
  background: #acbed1;
  border-radius: 10px;
`;
export const HelloPointBoldText = styled.strong`
  position: absolute;

  font-size: 18px;
  font-weight: 600;
  text-align: left;
  left: 6px;
  bottom: 7px;
`;
export const HelloBold = styled.div`
  font-size: 24px;
  font-weight: 600;
  text-align: left;

  margin-top: 15px;
  margin-bottom: 50px;
`;

export const MyInfoImg = styled.img`
  width: 240px;
  height: 310px;
`;

export const MyInfosContainer = styled.section`
  display: flex;
  flex-direction: column;

  margin: auto auto auto 100px;
`;

export const MyInfoButtonContainer = styled.div`
  display: flex;
`;
export const MyInfoButton = styled.a`
  width: 115px;
  height: 30px;
  display: flex;

  margin: auto;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  background-color: #000;
`;
export const MyInfoButtonLogo = styled.img`
  width: 25px;
  height: 25px;

  margin: auto;
`;

export const MyInfoButtonText = styled.strong`
  font-size: 18px;
  font-weight: bold;

  margin: auto;
  color: #fff;
`;

export const MyInfoTitleContainer = styled.div<{ marginBottomValue: string }>`
  display: flex;
  height: 100%;

  margin-bottom: ${(props) => props.marginBottomValue};
`;
export const CirclePoint = styled.div`
  width: 12px;
  height: 12px;

  margin-top: 4px;
  border: 2.5px solid #777;
  border-radius: 10px;
`;
export const CirclePointText = styled.div`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.3px;

  margin-top: 2px;
  margin-left: 10px;
  margin-right: 10px;
`;
export const VerticalLine = styled.div`
  width: 3px;

  margin-left: 10px;
  margin-right: 20px;
  background-color: #d9d9d9;
`;
export const InfoDateContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InfoDateLineContainer = styled.div`
  display: flex;
`;
export const InfoDate = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #8f8f8f;

  margin-right: 20px;
  margin-top: 0;
  line-height: 20px;
`;
export const InfoDateText = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #8f8f8f;

  margin-top: 0;
  line-height: 20px;
`;

export const InfoDates = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InfoDateTexts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SkillContainer = styled.div`
  display: flex;
`;
export const SkillSort = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px 0 20px;
`;
export const SkillCircle = styled.div<{ rotateValue: number; borderColor: string }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 4px solid #ccc;
  ${(props) => (props.rotateValue === 3 ? `border-top-color: ${props.borderColor};` : '')}
  ${(props) => (props.rotateValue === 3 ? `border-left-color: ${props.borderColor};` : '')}
  ${(props) => (props.rotateValue === 3 ? `border-bottom-color: ${props.borderColor};` : '')}
  ${(props) => (props.rotateValue === 2 ? `border-bottom-color: ${props.borderColor};` : '')}
  ${(props) => (props.rotateValue === 2 ? `border-left-color: ${props.borderColor};` : '')}
  ${(props) => (props.rotateValue === 1 ? `border-left-color: ${props.borderColor};` : '')}
  transform: rotate(-35deg);
  display: flex;
  position: relative;
`;

export const SkillingCircle = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 30px;

  transform: rotate(35deg);
`;

export const SkillName = styled.strong`
  font-size: 15px;
  font-weight: bold;
  text-align: center;

  margin-top: 10%;
`;

export const DataInfo = styled.div`
  display: flex;
`;
