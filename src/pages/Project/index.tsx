import React from 'react';

import * as S from './styled';

import { useScrollFadeIn, useSeo } from '@/hooks';

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
    {
      FeatTitle: '메인화면',
      ImgSrcDesk: 'https://i.ibb.co/Sddg95V/image.png',
      Responsive: 'https://i.ibb.co/VWvvSRc/image2.png',
      scrollNum: 9,
    },
    {
      FeatTitle: '로그인',
      ImgSrcDesk: 'https://i.ibb.co/kGyKxkM/login-Desk.png',
      Responsive: 'https://i.ibb.co/6b273b4/responsive-Login.png',
      scrollNum: 10,
    },
    {
      FeatTitle: '회원가입',
      ImgSrcDesk: 'https://i.ibb.co/mJ8QdkR/register-Desk.png',
      Responsive: 'https://i.ibb.co/3BcVPPV/responsive-Register.png',
      scrollNum: 11,
    },
    {
      FeatTitle: '로그인 후 메인',
      ImgSrcDesk: 'https://i.ibb.co/LkSbnh4/afterlogin.png',
      Responsive: 'https://i.ibb.co/dQJHZgr/After-Login-Responsive.png',
      scrollNum: 12,
    },
    {
      FeatTitle: '시간 제출',
      Responsive: 'https://i.ibb.co/yRp44B2/todaytimes.png',
      Responsive2: 'https://i.ibb.co/NtZBzcT/habits.png',
      Responsive3: 'https://i.ibb.co/kcpP2KL/golas.png',
    },
    {
      FeatTitle: '제출 데이터 확인 및 프로필',
      Responsive: 'https://i.ibb.co/r3tkrG6/myPlans.png',
      Responsive2: 'https://i.ibb.co/KjDD0wC/Profile.png',
    },
    {
      FeatTitle: '과목별 바 그래프의 시간 데이터',
      ImgSrcDesk: 'https://i.ibb.co/6F7HKVS/bar.png',
    },
    {
      FeatTitle: '습관시간 선 형태의 그래프 데이터',
      ImgSrcDesk: 'https://i.ibb.co/1TGsDP3/line.png',
    },
    {
      FeatTitle: '목표 원 그래프의 시간 데이터',
      ImgSrcDesk: 'https://i.ibb.co/9G9yjmf/donuts.png',
    },
    {
      FeatTitle: '시간 관리 선생님 로그인',
      ImgSrcDesk: 'https://i.ibb.co/B6P87x5/Teacher-Login.png',
      Responsive: 'https://i.ibb.co/PCYGcw8/Teacher-Login-Res.png',
    },
    {
      FeatTitle: '선생님 로그인 후 메인',
      ImgSrcDesk: 'https://i.ibb.co/ZznbrPy/Tea-After-Login.png',
      Responsive: 'https://i.ibb.co/VxRZ935/Tea-After-Login-Res.png',
    },
    {
      FeatTitle: '전체 학생 데이터를 확인할 수 있는 관리자 페이지',
      ImgSrcDesk: 'https://i.ibb.co/Kqf82BN/management.png',
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
