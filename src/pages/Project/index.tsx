import React from 'react';

import * as S from './styled';

import { useScrollFadeIn, useSeo } from '@/hooks';

import SPDesktopIcon from '../../assets/image.png';
import SPResponsive from '../../assets/image2.png';
import SPLoginDeskImg from '../../assets/loginDesk.png';
import SPLoginResponsive from '../../assets/responsiveLogin.png';
import SPRegisterDeskImg from '../../assets/registerDesk.png';
import SPRegisterResponsive from '../../assets/responsiveRegister.png';
import SPAfterLogin from '../../assets/afterLogin.png';
import SPAfterResponsive from '../../assets/AfterLoginResponsive.png';
import today from '../../assets/todaytimes.png';
import habit from '../../assets/habits.png';
import goals from '../../assets/golas.png';
import myplan from '../../assets/myPlans.png';
import profile from '../../assets/Profile.png';
import bar from '../../assets/bar.png';
import line from '../../assets/line.png';
import donuts from '../../assets/donuts.png';

import TeaLogin from '../../assets/TeacherLogin.png';
import TeaLoginRes from '../../assets/TeacherLoginRes.png';
import TeaAfterLogin from '../../assets/TeaAfterLogin.png';
import TeaAfterLoginRes from '../../assets/TeaAfterLoginRes.png';
import management from '../../assets/management.png';
import { MouseDown } from '@components/MouseDown';

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
    9: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5),
    10: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5),
    11: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5),
    12: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5),
  };
  const mouseAnimation = {
    0: useScrollFadeIn<HTMLHeadingElement>('down', 1, 1.5),
  };
  useSeo('박준희 | 프로젝트');
  const dataArr = [
    { FeatTitle: '메인화면', ImgSrcDesk: SPDesktopIcon, Responsive: SPResponsive, scrollNum: 9 },
    {
      FeatTitle: '로그인',
      ImgSrcDesk: SPLoginDeskImg,
      Responsive: SPLoginResponsive,
      scrollNum: 10,
    },
    {
      FeatTitle: '회원가입',
      ImgSrcDesk: SPRegisterDeskImg,
      Responsive: SPRegisterResponsive,
      scrollNum: 11,
    },
    {
      FeatTitle: '로그인 후 메인',
      ImgSrcDesk: SPAfterLogin,
      Responsive: SPAfterResponsive,
      scrollNum: 12,
    },
    {
      FeatTitle: '시간 제출',
      Responsive: today,
      Responsive2: habit,
      Responsive3: goals,
    },
    {
      FeatTitle: '제출 데이터 확인 및 프로필',
      Responsive: myplan,
      Responsive2: profile,
    },
    {
      FeatTitle: '과목별 바 그래프의 시간 데이터',
      ImgSrcDesk: bar,
    },
    {
      FeatTitle: '습관시간 선 형태의 그래프 데이터',
      ImgSrcDesk: line,
    },
    {
      FeatTitle: '목표 원 그래프의 시간 데이터',
      ImgSrcDesk: donuts,
    },
    {
      FeatTitle: '시간 관리 선생님 로그인',
      ImgSrcDesk: TeaLogin,
      Responsive: TeaLoginRes,
    },
    {
      FeatTitle: '선생님 로그인 후 메인',
      ImgSrcDesk: TeaAfterLogin,
      Responsive: TeaAfterLoginRes,
    },
    {
      FeatTitle: '전체 학생 데이터를 확인할 수 있는 관리자 페이지',
      ImgSrcDesk: management,
    },
  ];
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
            <S.MouseDownPosition {...mouseAnimation[0]}>
              <MouseDown />
            </S.MouseDownPosition>
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
                  <S.ProjectDescTexts style={{ marginTop: '0.5rem' }}>
                    <S.ProjectTextInDesc {...scrollanimation[7]}>
                      <S.ProjectTextInDescContainer>
                        <S.ProjectDescHorizontal>-</S.ProjectDescHorizontal>
                        학원에 의지하며 공부하는 학생들의 자기주도학습 및 전반적인 공부시간 파악
                        프로젝트
                      </S.ProjectTextInDescContainer>
                    </S.ProjectTextInDesc>
                  </S.ProjectDescTexts>
                </S.ProjectDesc>
                <S.EmptySpace />
                <S.ProjectDesc {...scrollanimation[6]}>
                  LEARN
                  <S.ProjectDescTexts style={{ marginTop: '0.5rem' }}>
                    <S.ProjectTextInDesc {...scrollanimation[8]}>
                      <S.ProjectTextInDescContainer>
                        <S.ProjectDescHorizontal>-</S.ProjectDescHorizontal>
                        처음 시도해본 프로젝트로 많은 시간이 들었고 개발을 하면서 욕심이 생겨 여러
                        기능들을 추가하며 <br />
                        여러 hook과 typescript를 배움
                      </S.ProjectTextInDescContainer>
                    </S.ProjectTextInDesc>
                  </S.ProjectDescTexts>
                </S.ProjectDesc>
                <S.ProjectFeatures>
                  FEATURES
                  {dataArr.map((val, idx) => {
                    return (
                      <div key={idx} style={{ marginTop: '5rem' }}>
                        <S.ProjectDescTexts>
                          <S.ProjectTextInDesc>
                            <S.ProjectTextInDescContainer>
                              <S.ProjectDescHorizontal>-</S.ProjectDescHorizontal>
                              {val.FeatTitle}
                            </S.ProjectTextInDescContainer>
                          </S.ProjectTextInDesc>
                        </S.ProjectDescTexts>
                        <S.ProjectImgContainer {...scrollanimation[val.scrollNum]}>
                          {val.ImgSrcDesk ? (
                            <S.DesktopImgContainer widthValue="80%">
                              <S.ProjectImgDesc>데스크탑</S.ProjectImgDesc>
                              <S.FeatureImg src={val.ImgSrcDesk} />
                            </S.DesktopImgContainer>
                          ) : (
                            <></>
                          )}
                          {val.Responsive ? (
                            <S.ResponsiveImgContainer widthValue="18%">
                              <S.ProjectImgDesc>모바일</S.ProjectImgDesc>
                              <S.ResImgContainer>
                                <S.FeatureImg src={val.Responsive} />
                                {val.Responsive2 || val.Responsive3 ? (
                                  <>
                                    <S.FeatureImg
                                      style={{ marginLeft: '2rem' }}
                                      src={val.Responsive2}
                                    />
                                    <S.FeatureImg
                                      style={{ marginLeft: '2rem' }}
                                      src={val.Responsive3}
                                    />
                                  </>
                                ) : (
                                  <></>
                                )}
                              </S.ResImgContainer>
                            </S.ResponsiveImgContainer>
                          ) : (
                            <></>
                          )}
                        </S.ProjectImgContainer>
                      </div>
                    );
                  })}
                  <S.ProjectFeeling>
                    느낀 점
                    <S.ProjectDescTexts style={{ marginTop: '0.5rem' }}>
                      <S.ProjectTextInDesc>
                        <S.ProjectTextInDescContainer>
                          <S.ProjectDescHorizontal>-</S.ProjectDescHorizontal>
                          처음 시작해본 프로젝트였기 때문에 알아볼 것도 많았고 부족한 점도 많았다.{' '}
                          <br /> 하지만 버그가 생겼을 때 구글링하고 해결한 뒤 방법을 기록하게
                          되었다.
                        </S.ProjectTextInDescContainer>
                        <S.EmptySpace />

                        <S.ProjectTextInDescContainer>
                          <S.ProjectDescHorizontal>-</S.ProjectDescHorizontal>
                          완벽하게 구현하지 못한 management가 아쉬웠고 프로젝트 기간이 늘어가는 것을{' '}
                          <br />
                          줄이려면 구조를 먼저 설계해야 한다고 느꼇다.
                        </S.ProjectTextInDescContainer>
                      </S.ProjectTextInDesc>
                    </S.ProjectDescTexts>
                  </S.ProjectFeeling>
                </S.ProjectFeatures>
              </S.ProjectTextData>
            </S.TwoSection>
          </S.ProjectContainer>
        </S.ProjectDataSection>
        <S.ProjectDataSection>
          <S.ProjectDate>
            2<br />0<br />2<br />
            2
            <br />
            <br />
            0<br />6
          </S.ProjectDate>
          <S.ProjectContainer widthBool={true}>
            <S.ThreeSection>
              <S.ProjectTitle>🧾 LawLearn</S.ProjectTitle>
            </S.ThreeSection>
          </S.ProjectContainer>
        </S.ProjectDataSection>
      </S.ProjectPageSection>
    </S.ProjcetWrapper>
  );
};
