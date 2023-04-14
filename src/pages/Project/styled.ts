import styled from '@emotion/styled';

export const ProjcetWrapper = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  user-select: none;
`;

export const ProjectPageSection = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  background-color: #161616;
  background-size: 20px 20px;
  transition: all 0.5s ease 0s;
`;

export const ProjectDataSection = styled.section<{ blurBoolean: boolean }>`
  height: 100vh;
  display: flex;
  scroll-snap-align: center;
  position: relative;
  transition: all 0.5s;
  ${(props) => (props.blurBoolean ? 'clip-path: polygon(0 0,100% 0,100% 100%,0% 100%)' : '')}
  backdrop-filter: ${(props) => (props.blurBoolean ? 'blur(8px)' : 'none')};
  filter: ${(props) => (props.blurBoolean ? 'blur(8px)' : 'none')};
`;

export const ProjectDate = styled.h2`
  width: 7vw;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 40%;
  & > * {
    transform: rotate(90deg);
  }
`;

export const MouseDownPosition = styled.div`
  width: 7vw;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
  position: absolute;
  top: 80%;
  right: 48%;
`;

export const ProjectContainer = styled.div<{ widthBool: boolean }>`
  width: 85vw;
  height: ${(props) => (props.widthBool ? '100vh' : '200vh')};

  margin: auto;
  display: flex;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ProjectIntro = styled.div`
  width: 100%;
  height: 100%;

  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const ProjectIntroName = styled.div`
  width: 100%;
  text-align: left;

  font-size: 40px;
  font-weight: bold;
  color: #f2f2f2;
  letter-spacing: 1px;

  margin-top: auto;
`;

export const ProjectIntroTitle = styled.strong`
  width: 100%;
  text-align: left;

  font-size: 40px;
  font-weight: 400;
  color: #f2f2f2;

  margin-top: 5px;
`;

export const ProjectIntroDate = styled.div`
  width: 100%;
  text-align: left;

  font-size: 20px;
  font-weight: bold;
  color: #f2f2f2;

  margin-top: 10px;
  margin-bottom: auto;
`;

//section
export const Section = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProjectTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;

  margin-top: 7rem;
  text-align: center;
  color: #f2f2f2;
`;
export const ProjectTextData = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;

  margin: 40px auto 0 auto;
`;

export const ProjectDescHorizontal = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: #f2f2f2;

  padding-right: 8px;
`;

export const ProjectDesc = styled.h2`
  display: flex;
  flex-direction: column;

  font-size: 20px;
  font-weight: bold;

  margin-top: 3rem;
  margin-bottom: 2.5rem;
  text-align: left;
  color: #f2f2f2;
`;

export const ProjectTextInDesc = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 5px;
`;

export const ProjectTextInDescContainer = styled.div`
  display: flex;
  line-height: 1.35em;
  letter-spacing: 0.5px;

  font-size: 17px;
`;

export const ProjectDescTexts = styled.span`
  font-size: 20px;
  font-weight: 400;

  margin-top: 5rem;
  text-align: left;
  color: #f2f2f2;
`;

export const EmptySpace = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

//features
export const ProjectFeatures = styled.h2`
  display: flex;
  flex-direction: column;

  font-size: 20px;
  font-weight: bold;

  margin-top: 10rem;
  text-align: left;
  color: #f2f2f2;
`;

export const FeatureImg = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 10px;
`;

export const ProjectImgContainer = styled.div`
  width: 100%;

  display: flex;
`;
export const DesktopImgContainer = styled.div<{ widthValue: string }>`
  width: ${(props) => props.widthValue};
  margin: auto;
`;
export const ResponsiveImgContainer = styled.div<{ widthValue: string }>`
  width: ${(props) => props.widthValue};
  margin-left: 2%;
`;

export const ResImgContainer = styled.div`
  display: flex;
`;

export const ProjectImgDesc = styled.h3`
  width: 100%;
  text-align: center;

  font-size: 10px;
  font-weight: 400;
  margin-bottom: 20px;
`;

export const ProjectFeeling = styled.h2`
  display: flex;
  flex-direction: column;

  font-size: 20px;
  font-weight: bold;

  margin-top: 4rem;
  margin-bottom: 20rem;
  text-align: left;
  color: #f2f2f2;
`;

export const gotoButtonContainer = styled.div`
  position: fixed;
  z-index: 1000;

  top: 47%;
  right: 5px;
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

  margin: 8px 0 10px 0;
  right: 20px;

  cursor: pointer;
  border: none;
  border-radius: 5px;
  background: #c9c9c9;
  transition: all 0.5s;
  :hover {
    background: #3e3e3e;
  }
`;

export const gotoHoverText = styled.a`
  width: 80px;
  font-size: 17px;
  font-weight: 400;
  margin-top: 1.5px;
  margin-bottom: 15px;

  text-decoration: none;
  color: #c9c9c9;
  transition: all 0.2s;
  :hover {
    margin-right: 15px;

    font-weight: 500;
    color: #fff;
  }
`;

export const aTagUrl = styled.a`
  text-decoration: none;
  color: #fff;

  :hover {
    border-bottom: 1px solid #fff;
  }
`;
