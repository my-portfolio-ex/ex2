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
  overflow-y: auto;
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
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
  position: absolute;
  top: 48%;
  right: 6.5%;
`;
