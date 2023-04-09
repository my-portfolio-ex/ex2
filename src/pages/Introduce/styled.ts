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
  scroll-behavior: smooth;
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

export const IntroduceDataSection = styled.section<{ blurBoolean: boolean }>`
  height: 100vh;
  display: flex;
  scroll-snap-align: center;
  position: relative;
  transition: all 0.5s;
  ${(props) => (props.blurBoolean ? 'clip-path: polygon(0 0,100% 0,100% 100%,0% 100%)' : '')}
  backdrop-filter: ${(props) => (props.blurBoolean ? 'blur(7px)' : 'none')};
  filter: ${(props) => (props.blurBoolean ? 'blur(7px)' : 'none')};
`;
export const IntroduceContainer = styled.div<{ widthBool: boolean }>`
  width: 75vw;
  height: ${(props) => (props.widthBool ? '100vh' : '200vh')};
  overflow-y: auto;

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
  right: 5.3%;
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
  margin: auto;
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

export const horizontalPoint = styled.div<{ eachLeft: string }>`
  position: absolute;
  width: 8px;
  height: 8px;
  left: ${(props) => props.eachLeft};
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

export const EventBoxA = styled.a`
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  color: #e0e0e0;
  margin: auto 10px auto 10px;
  text-decoration: none;
  cursor: pointer;
`;

export const EventBoxDateContainer = styled.div`
  margin-left: 56px;
  margin-top: 10px;
  display: flex;
`;

export const EventBoxDate = styled.div<{ marginValue: string }>`
  color: #000;
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
  color: #000;

  left: 33%;
  top: 20%;
  position: absolute;
`;

export const gotoButtonContainer = styled.div`
  position: fixed;
  z-index: 1000;

  top: 40%;
  left: 2.5%;
`;
export const gotoButtonDiv = styled.div`
  display: flex;
  flex-direction: column;

  width: 150px;
`;
export const gotoButton = styled.a`
  position: fixed;
  width: 7px;
  height: 7px;

  margin: 5px 0 18px 0;

  cursor: pointer;
  border: none;
  border-radius: 5px;
  background: #999;
  transition: all 0.5s;
  :hover {
    background: #3e3e3e;
  }
`;

export const gotoHoverText = styled.a`
  font-size: 17px;
  font-weight: 400;

  margin: 0 auto 0 15px;
  text-decoration: none;
  color: #3e3e3e;
  transition: all 0.2s;
  :hover {
    margin-left: 25px;

    font-weight: 500;
    color: #000;
  }
`;

export const gotoHoverTextContainer = styled.div`
  width: 100%;

  display: flex;
`;

export const EmojiContainer = styled.div`
  position: sticky;
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100px;
  top: calc(10%);
`;

export const Emoji = styled.h1`
  width: 100%;

  text-align: center;
`;
export const EmojiText = styled.strong`
  font-size: 15px;
  font-weight: 400;
  text-align: center;

  margin-top: 20px;
`;

export const InfoContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const UseTip = styled.strong`
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  color: #000;

  margin-top: 7%;
`;
export const TopMenu = styled.div`
  display: flex;
  margin: 7% auto auto auto;
  & > * {
    display: flex;
    margin: 0 10px 0 10px;
    cursor: pointer;
  }
`;
export const InfoGithub = styled.div<{ ClickBool: boolean }>`
  width: 150px;
  height: 60px;

  ${(props) => (props.ClickBool ? 'background-color: #000' : 'background-color: #fff')};
  :hover {
    background-color: #000;
    & > * {
      color: #fff;
    }
  }
  transition: all 0.2s;

  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;
export const InfoName = styled.div<{ ClickBool: boolean }>`
  ${(props) => (props.ClickBool ? 'color: #fff' : 'color: #000')};
  font-size: 18px;
  font-weight: 500;
  margin: auto;
`;
export const InfoName2 = styled.div<{ ClickBool: boolean }>`
  ${(props) => (props.ClickBool ? 'color: #fff' : 'color: #000')};
  font-size: 18px;
  font-weight: 500;
  margin: auto;
`;
export const InfoMail = styled.div<{ ClickBool: boolean }>`
  width: 150px;
  height: 60px;

  ${(props) => (props.ClickBool ? 'background-color: #61e759' : 'background-color: #fff')};
  :hover {
    background-color: #61e759;
    & > * {
      color: #fff;
    }
  }
  transition: all 0.2s;

  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

export const BottomMenu = styled.div`
  display: flex;
  & > * {
    margin: auto;
  }
  transition: all 0.5s;
  flex-direction: column;
`;
export const GithubScreen = styled.a``;
export const GithubScreenImg = styled.img``;

export const EmailClipBoard = styled.div`
  width: 200px;
  height: 50px;
  display: flex;

  cursor: pointer;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;
export const Email = styled.div`
  color: #000;
  font-weight: bold;
  margin: auto;
`;
export const EmailTip = styled.div`
  color: #000;
  margin: 10% auto 1% auto;
`;
