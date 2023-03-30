import styled from '@emotion/styled';

export const IntroduceWrapper = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  user-select: none;
`;

export const IntroducePageSection = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  scroll-snap-type: y mandatory;
  background-color: #f6f6f6;
  background-image: linear-gradient(
      90deg,
      #efefef 0px,
      #d6d6d6 1px,
      transparent 1px,
      transparent 99px,
      transparent 100px
    ),
    linear-gradient(#efefef 0px, #d6d6d6 1px, transparent 1px, transparent 99px, transparent 100px),
    linear-gradient(#fafafa 0px, #d6d6d6 1px, transparent 1px, transparent 99px, transparent 100px),
    linear-gradient(
      90deg,
      #e1e1e1 0px,
      #ffffff 1px,
      transparent 1px,
      transparent 99px,
      transparent 100px
    ),
    linear-gradient(
      transparent 0px,
      transparent 5px,
      #f6f6f6 5px,
      #f6f6f6 95px,
      transparent 95px,
      transparent 100px
    ),
    linear-gradient(
      90deg,
      #ffffff 0px,
      #c9c9c9 1px,
      transparent 1px,
      transparent 99px,
      #ffffff 99px,
      #e0e0e0 100px
    ),
    linear-gradient(
      90deg,
      transparent 0px,
      transparent 5px,
      #f6f6f6 5px,
      #f6f6f6 95px,
      transparent 95px,
      transparent 100px
    ),
    linear-gradient(
      transparent 0px,
      transparent 1px,
      #f6f6f6 1px,
      #f6f6f6 99px,
      transparent 99px,
      transparent 100px
    ),
    linear-gradient(#cdcccc, #f2f2f2);
  background-size: 100px 100%, 100% 100px, 100% 10px, 10px 100%, 100% 100px, 100px 100%, 100px 100%,
    100px 100px, 100px 100px;
  transition: all 0.5s ease 0s;
`;

export const IntroduceDataSection = styled.section`
  height: 100vh;
  display: flex;
  scroll-snap-align: center;
  position: relative;
`;

export const IntroduceContainer = styled.div<{ widthBool: boolean }>`
  width: 85vw;
  height: ${(props) => (props.widthBool ? '100vh' : '200vh')};

  margin: auto;
  display: flex;
  flex-direction: column;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const IntroduceIntro = styled.div`
  width: 100%;
  height: 100%;

  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const IntroduceIntroName = styled.div`
  width: 100%;
  text-align: right;

  font-size: 40px;
  font-weight: bold;
  color: #000000;
  letter-spacing: 1px;

  margin-top: auto;
`;

export const IntroduceIntroTitle = styled.strong`
  width: 100%;
  text-align: right;

  font-size: 40px;
  font-weight: 400;
  color: #000000;

  margin-top: 3px;
  margin-bottom: auto;
`;

export const IntroduceContent = styled.h2`
  width: 7vw;
  color: #000000;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
  position: absolute;
  top: 48.4%;
  right: 6.5%;
`;

export const simpleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-top: 20%;
`;

export const simpleTextContainer = styled.div`
  display: flex;
`;

export const simpleIntroduceTitle = styled.div`
  font-size: 30px;
  font-weight: 400;
  text-align: left;
  color: #000000;
`;

export const simpleIntroduce = styled.strong`
  font-size: 30px;
  font-weight: bold;
  text-align: left;
  color: #000000;

  margin-left: 10px;
`;

//grow up procedure
export const growupPre = styled.div`
  width: 85%;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }

  display: flex;
  flex-direction: column;
  margin: auto 0 auto 0;
`;

export const EventBox = styled.div<{ marginValue: string }>`
  display: flex;
  height: 50px;
  background: #1f1f1f;
  border-radius: 10px;
  border: 2px solid rgb(255 255 255);

  margin-left: ${(props) => props.marginValue};
`;

export const horizontalLine = styled.div`
  width: 4000px;
  height: 3px;
  background: #2c2c2c;
  border-radius: 5px;

  margin-top: 20px;
  position: relative;
`;

export const horizontalPoint = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  left: 89px;
  background: #2c2c2c;
  top: -4px;
  border-radius: 1px 0 10px 0;
  transform: rotate(45deg);
`;

export const EventBoxText = styled.strong`
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  color: #e0e0e0;
  margin: auto 10px auto 10px;
`;

export const EventBoxDateContainer = styled.div`
  margin-left: 56px;
  margin-top: 10px;
  display: flex;
`;

export const EventBoxDate = styled.div<{ marginValue: string }>`
  font-size: 15px;
  font-weight: 400;
  text-align: center;

  margin-left: ${(props) => props.marginValue};
`;

export const EventBoxContainer = styled.div`
  display: flex;
  width: 4000px;
`;

export const horizontalPointContainer = styled.div`
  display: flex;
`;

export const SeeTip = styled.strong`
  font-size: 20px;
  font-weight: 500;

  left: 33%;
  top: 20%;
  position: absolute;
`;

export const gotoButtonContainer = styled.div`
  position: fixed;
  z-index: 1000;

  top: 45%;
  left: 2.5%;
`;
export const gotoButtonDiv = styled.div`
  display: flex;
  flex-direction: column;

  width: 20px;
  height: 150px;
  border-radius: 5px;

  background: gray;
`;
export const gotoButton = styled.div`
  width: 7px;
  height: 7px;

  margin: auto;

  cursor: pointer;
  border: none;
  border-radius: 5px;
  background: black;
`;
