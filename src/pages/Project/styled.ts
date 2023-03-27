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
  scroll-snap-type: y mandatory;
  background: linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
    linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
    linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
    linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
    linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
    linear-gradient(
      #1d1d1d 25%,
      #1a1a1a 25%,
      #1a1a1a 50%,
      transparent 50%,
      transparent 75%,
      #242424 75%,
      #242424
    );
  background-color: #131313;
  background-size: 20px 20px;
  transition: all 0.5s ease 0s;
`;

export const ProjectDataSection = styled.section`
  height: 100vh;
  display: flex;
  scroll-snap-align: center;
  position: relative;
`;

export const ProjectDate = styled.h2`
  width: 7vw;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
  position: absolute;
  top: 35%;
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
  right: 50%;
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

  margin-top: 3px;
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
export const TwoSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const ThreeSection = styled.div`
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

  padding-right: 10px;
`;

export const ProjectDesc = styled.h2`
  display: flex;
  flex-direction: column;

  font-size: 20px;
  font-weight: bold;

  margin-top: 2rem;
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
  line-height: 1.3em;
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

  font-size: 15px;
  font-weight: bold;
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
