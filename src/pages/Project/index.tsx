import React from 'react';

import * as S from './styled';

import { useScrollFadeIn, useSeo } from '@/hooks';

import SPDesktopIcon from '@/assets/image.png';
import SPResponsive from '@/assets/image2.png';

export const ProjectPage: React.FC = () => {
  const scrollanimation = {
    0: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5),
    1: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.7),
    2: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.9),
    3: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.2),
    4: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.2),
    5: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5),
    6: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5),
    7: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.9),
    8: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.8),
    9: useScrollFadeIn<HTMLHeadingElement>('down', 1, 0.8),
    10: useScrollFadeIn<HTMLHeadingElement>('down', 1, 3.5),
    11: useScrollFadeIn<HTMLHeadingElement>('down', 1, 3.5),
  };
  useSeo('박준희 | 프로젝트');
  return (
    <S.ProjcetWrapper>
      <S.ProjectPageSection>
        <S.ProjectDataSection>
          <S.ProjectContainer widthBool={true}>
            <S.ProjectIntro>
              <S.ProjectIntroName {...scrollanimation[0]}>박준희</S.ProjectIntroName>
              <S.ProjectIntroTitle {...scrollanimation[1]}>PORTFOLIO PROJECTS</S.ProjectIntroTitle>
              <S.ProjectIntroDate {...scrollanimation[2]}>2021 - 2023</S.ProjectIntroDate>
            </S.ProjectIntro>
          </S.ProjectContainer>
        </S.ProjectDataSection>
        <S.ProjectDataSection>
          <S.ProjectDate {...scrollanimation[3]}>
            2<br />0<br />2<br />
            1
            <br />
            <br />
            1<br />2
          </S.ProjectDate>
          <S.ProjectContainer widthBool={true}>
            <S.TwoSection>
              <S.ProjectTitle {...scrollanimation[4]}>☁ SKYPLANNER</S.ProjectTitle>
              <S.ProjectTextData>
                <S.ProjectDesc {...scrollanimation[5]}>
                  BACKGROUND
                  <S.ProjectDescTexts>
                    <S.ProjectTextInDesc {...scrollanimation[7]}>
                      <S.ProjectDescHorizontal>-</S.ProjectDescHorizontal>
                      학원에 의지하며 공부하는 학생들의 자기주도학습 및 전반적인 공부시간 파악
                      프로젝트
                    </S.ProjectTextInDesc>
                  </S.ProjectDescTexts>
                </S.ProjectDesc>
                <S.EmptySpace />
                <S.ProjectDesc {...scrollanimation[6]}>
                  LEARN
                  <S.ProjectDescTexts>
                    <S.ProjectTextInDesc {...scrollanimation[8]}>
                      <S.ProjectDescHorizontal>-</S.ProjectDescHorizontal>
                      처음 시도해본 프로젝트로 많은 시간이 들었고 개발을 하면서 욕심이 생겨 여러
                      기능들을 추가하며 <br />
                      여러 hook과 typescript를 배움
                    </S.ProjectTextInDesc>
                  </S.ProjectDescTexts>
                </S.ProjectDesc>
                <S.ProjectFeatures {...scrollanimation[9]}>
                  FEATURES
                  <S.ProjectDescTexts>
                    <S.ProjectTextInDesc>
                      <S.ProjectDescHorizontal>-</S.ProjectDescHorizontal>
                      메인화면
                    </S.ProjectTextInDesc>
                  </S.ProjectDescTexts>
                  <S.ProjectImgContainer>
                    <S.DesktopImgContainer {...scrollanimation[10]} widthValue="80%">
                      <S.ProjectImgDesc>데스크탑</S.ProjectImgDesc>
                      <S.FeatureImg src={SPDesktopIcon} />
                    </S.DesktopImgContainer>
                    <S.ResponsiveImgContainer {...scrollanimation[11]} widthValue="18%">
                      <S.ProjectImgDesc>모바일</S.ProjectImgDesc>
                      <S.FeatureImg src={SPResponsive} />
                    </S.ResponsiveImgContainer>
                  </S.ProjectImgContainer>
                </S.ProjectFeatures>
              </S.ProjectTextData>
            </S.TwoSection>
          </S.ProjectContainer>
        </S.ProjectDataSection>
      </S.ProjectPageSection>
    </S.ProjcetWrapper>
  );
};
