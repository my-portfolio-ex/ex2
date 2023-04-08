import React, { useState } from 'react';

import * as S from './styled';

import { useScrollFadeIn, useSeo } from '@/hooks';

import { MouseDown } from '@components/MouseDown';
import { DateComponent } from '@components/Date';

export const ProjectPage: React.FC = () => {
  const lawAnimation = {
    0: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.2),
    1: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5),
    2: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5),
    3: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.9),
    4: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.8),
  };
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
    13: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5),
    14: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5),
    15: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5),
    16: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5),
    17: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5),
    18: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5),
    19: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5),
    20: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5),
  };
  const mouseAnimation = {
    0: useScrollFadeIn<HTMLHeadingElement>('down', 1, 1.5),
  };
  const scrollNum = {
    0: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5),
    1: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5),
    2: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5),
    3: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5),
    4: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5),
  };
  const infoScroll = {
    0: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5),
    1: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5),
  };
  useSeo('박준희 | 프로젝트');

  const [blur, setBlur] = useState(false);
  const handleMouseOver = () => {
    setBlur(true);
  };
  const lawArr = [
    {
      FeatTitle: '인트로',
      ImgSrcDesk1: 'https://i.ibb.co/SmmcB1Q/image.png',
      scrollNum: 0,
    },
    {
      FeatTitle: '메인 서비스 소개',
      ImgSrcDesk1: 'https://i.ibb.co/L1RtvXB/image.png',
      ImgSrcDesk2: 'https://i.ibb.co/pz4nxFN/image.png',
      scrollNum: 1,
    },
    {
      FeatTitle: '컨텐츠 페이지',
      ImgSrcDesk1: 'https://i.ibb.co/VB22j34/image.png',
      ImgSrcDesk2: 'https://i.ibb.co/C1Bn7n2/image.png',
      ImgSrcDesk3: 'https://i.ibb.co/pJhnmVr/image.png',
      ImgSrcDesk4: 'https://i.ibb.co/z6yj7xD/image.png',
      scrollNum: 2,
    },
    {
      FeatTitle: '솔루션 페이지',
      ImgSrcDesk1: 'https://i.ibb.co/QH5VQCv/image.png',
      ImgSrcDesk2: 'https://i.ibb.co/SxYcwH4/image.png',
      scrollNum: 3,
    },
    {
      FeatTitle: '도움 페이지',
      ImgSrcDesk1: 'https://i.ibb.co/9gX5RhS/image.png',
      ImgSrcDesk2: 'https://i.ibb.co/Cmb3g0Q/image.png',
      scrollNum: 4,
    },
  ];
  const gcArr = [
    {
      FeatTitle: '메인 화면',
      Responsive: 'https://i.ibb.co/K92bKR5/image.png',
    },
    {
      FeatTitle: '미션 화면',
      Responsive: 'https://i.ibb.co/WV172fT/image.png',
      Responsive2: 'https://i.ibb.co/9pVztmh/image.png',
    },
    {
      FeatTitle: '분리배출 인증화면',
      Responsive: 'https://i.ibb.co/S0fsThx/image.png',
    },
    {
      FeatTitle: '분리배출 인증확인 화면',
      Responsive: 'https://i.ibb.co/PjRqG3m/image.png',
      Responsive2: 'https://i.ibb.co/BTw96Mr/image.png',
    },
    {
      FeatTitle: '캐시기부 화면',
      Responsive: 'https://i.ibb.co/vh1GNps/image.png',
      Responsive2: 'https://i.ibb.co/1QkGhyX/image.png',
    },
    {
      FeatTitle: '캠페인 화면',
      Responsive: 'https://i.ibb.co/61yz50j/image.png',
    },
    {
      FeatTitle: 'Fqa화면',
      Responsive: 'https://i.ibb.co/m0FqgV7/image.png',
      Responsive2: 'https://i.ibb.co/vw2v4NG/image.png',
    },
  ];
  const spArr = [
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
      scrollNum: 13,
    },
    {
      FeatTitle: '제출 데이터 확인 및 프로필',
      Responsive: 'https://i.ibb.co/r3tkrG6/myPlans.png',
      Responsive2: 'https://i.ibb.co/KjDD0wC/Profile.png',
      scrollNum: 14,
    },
    {
      FeatTitle: '과목별 바 그래프의 시간 데이터',
      ImgSrcDesk: 'https://i.ibb.co/6F7HKVS/bar.png',
      scrollNum: 15,
    },
    {
      FeatTitle: '습관시간 선 형태의 그래프 데이터',
      ImgSrcDesk: 'https://i.ibb.co/1TGsDP3/line.png',
      scrollNum: 16,
    },
    {
      FeatTitle: '목표 원 그래프의 시간 데이터',
      ImgSrcDesk: 'https://i.ibb.co/9G9yjmf/donuts.png',
      scrollNum: 17,
    },
    {
      FeatTitle: '시간 관리 선생님 로그인',
      ImgSrcDesk: 'https://i.ibb.co/B6P87x5/Teacher-Login.png',
      Responsive: 'https://i.ibb.co/PCYGcw8/Teacher-Login-Res.png',
      scrollNum: 18,
    },
    {
      FeatTitle: '선생님 로그인 후 메인',
      ImgSrcDesk: 'https://i.ibb.co/ZznbrPy/Tea-After-Login.png',
      Responsive: 'https://i.ibb.co/VxRZ935/Tea-After-Login-Res.png',
      scrollNum: 19,
    },
    {
      FeatTitle: '전체 학생 데이터를 확인할 수 있는 관리자 페이지',
      ImgSrcDesk: 'https://i.ibb.co/Kqf82BN/management.png',
      scrollNum: 20,
    },
  ];
  const langArr = [
    {
      FeatTitle: '메인화면',
      ImgSrcDesk: 'https://i.ibb.co/fpmQbLH/image.png',
      Responsive: 'https://i.ibb.co/xLfhswB/image.png',
    },
    {
      FeatTitle: '로그인',
      ImgSrcDesk: 'https://i.ibb.co/tJmQRjW/image.png',
      Responsive: 'https://i.ibb.co/xSxrVpZ/image.png',
    },
    {
      FeatTitle: '회원가입',
      ImgSrcDesk: 'https://i.ibb.co/2ZDNRsp/image.png',
      Responsive: 'https://i.ibb.co/SQBPJMj/image.png',
    },
    {
      FeatTitle: '단어 맞추기',
      ImgSrcDesk: 'https://i.ibb.co/k4YL35r/image.png',
      Responsive: 'https://i.ibb.co/GpCQF8L/image.png',
    },
    {
      FeatTitle: '문장 맞추기',
      ImgSrcDesk: 'https://i.ibb.co/SNS5yW0/image.png',
      Responsive: 'https://i.ibb.co/wdchhWN/image.png',
    },
    {
      FeatTitle: '영작하기',
      ImgSrcDesk: 'https://i.ibb.co/5R6F31J/image.png',
      Responsive: 'https://i.ibb.co/H7hmVpq/image.png',
    },
    {
      FeatTitle: '문제가 없을 때',
      ImgSrcDesk: 'https://i.ibb.co/DVw4qJW/image.png',
      Responsive: 'https://i.ibb.co/T2v1Bnb/image.png',
    },
  ];
  const spInfoArr = [
    {
      infoTitle: 'github_frontend',
      href: 'https://github.com/alpha0212/SP_frontend',
      scrollNum: 0,
    },
    {
      infoTitle: 'github_backend',
      href: 'https://github.com/alpha0212/SP_backend',
      scrollNum: 1,
    },
  ];
  const lawInfoArr = [
    {
      infoTitle: 'github',
      href: 'https://github.com/alpha0212/Law_PROJECT',
      scrollNum: 0,
    },
    {
      infoTitle: 'release url',
      href: 'https://www.lawlearn.site/',
      scrollNum: 1,
    },
  ];
  const ltInfoArr = [
    {
      infoTitle: 'github_frontend',
      href: 'https://github.com/SimpleLearnEnglish/Langtudy-frontend',
    },
    {
      infoTitle: 'dev url',
      href: 'https://langtudy.vercel.app/',
    },
  ];
  const gcInfoArr = [
    {
      infoTitle: 'github_frontend',
      href: 'https://github.com/GreenCash-dev/greencash_frontend',
    },
    {
      infoTitle: 'dev url',
      href: 'https://greencash.vercel.app/',
    },
  ];
  const [g, setG] = useState([
    {
      id: '#sp',
      title: 'skyplanner',
    },
    {
      id: '#lawlearn',
      title: 'lawlearn',
    },
    {
      id: '#langtudy',
      title: 'langtudy',
    },
    {
      id: '#greencash',
      title: 'greencash',
    },
  ]);
  //스타일 따로 지정하는법
  return (
    <S.ProjcetWrapper>
      <S.ProjectPageSection>
        <S.gotoButtonContainer>
          <S.gotoButtonDiv>
            {g.map((cTitle, idx) => {
              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    margin: 'auto',
                  }}
                >
                  <S.gotoHoverText
                    onMouseOver={() => setBlur(true)}
                    onMouseLeave={() => setBlur(false)}
                    href={cTitle.id}
                  >
                    {cTitle.title}
                  </S.gotoHoverText>
                  <S.gotoButton
                    data-info={JSON.stringify(g)}
                    onMouseOver={handleMouseOver}
                    onMouseLeave={() => setBlur(false)}
                    href={cTitle.id}
                  ></S.gotoButton>
                </div>
              );
            })}
          </S.gotoButtonDiv>
        </S.gotoButtonContainer>
        <S.ProjectDataSection blurBoolean={blur}>
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
        <S.ProjectDataSection blurBoolean={blur}>
          <S.ProjectDate {...scrollanimation[3]}>
            <DateComponent year={[2, 0, 2, 1]} day={[1, 2]} />
          </S.ProjectDate>

          <S.ProjectContainer widthBool={true}>
            <S.Section id="sp">
              <S.ProjectTitle {...scrollanimation[4]}>☁ SKYPLANNER</S.ProjectTitle>
              <S.ProjectTextData>
                <S.ProjectDesc {...scrollanimation[5]}>
                  BACKGROUND
                  <S.ProjectDescTexts style={{ marginTop: '0.5rem' }}>
                    <S.ProjectTextInDesc {...scrollanimation[7]}>
                      <S.ProjectTextInDescContainer>
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
                        처음 시도해본 프로젝트로 많은 시간이 들었고 개발을 하면서 욕심이 생겨 여러
                        기능들을 추가하며 <br />
                        여러 hook과 typescript를 배움
                      </S.ProjectTextInDescContainer>
                      <br />
                      <S.ProjectTextInDescContainer>
                        백엔드로는 sequelize를 사용하여 쉽게 환경을 구성하고 nodejs 기반 post,
                        get구현
                      </S.ProjectTextInDescContainer>
                    </S.ProjectTextInDesc>
                  </S.ProjectDescTexts>
                </S.ProjectDesc>
                <S.EmptySpace />
                <S.ProjectDesc {...infoScroll[0]}>
                  INFO
                  <S.ProjectDescTexts style={{ marginTop: '0.5rem' }}>
                    <S.ProjectTextInDesc>
                      {spInfoArr.map((infoValue, idx) => {
                        return (
                          <S.ProjectTextInDescContainer key={idx}>
                            <span style={{ marginRight: '5px' }}>{infoValue.infoTitle}</span>
                            <S.ProjectDescHorizontal>-</S.ProjectDescHorizontal>
                            <S.aTagUrl href={infoValue.href} target="_blank" rel="noreferrer">
                              {infoValue.href}
                            </S.aTagUrl>
                          </S.ProjectTextInDescContainer>
                        );
                      })}
                    </S.ProjectTextInDesc>
                  </S.ProjectDescTexts>
                </S.ProjectDesc>
                <S.ProjectFeatures>FEATURES</S.ProjectFeatures>
                {spArr.map((val, idx) => {
                  return (
                    <div key={idx} style={{ marginTop: '5rem' }}>
                      <S.ProjectDescTexts>
                        <S.ProjectTextInDesc>
                          <S.ProjectTextInDescContainer>
                            {val.FeatTitle}
                          </S.ProjectTextInDescContainer>
                        </S.ProjectTextInDesc>
                      </S.ProjectDescTexts>
                      <S.ProjectImgContainer {...scrollanimation[val.scrollNum]}>
                        {val.ImgSrcDesk ? (
                          <S.DesktopImgContainer widthValue="80%">
                            <S.ProjectImgDesc>데스크탑</S.ProjectImgDesc>
                            <S.FeatureImg alt="skyplanner 프로젝트 이미지" src={val.ImgSrcDesk} />
                          </S.DesktopImgContainer>
                        ) : (
                          <></>
                        )}
                        {val.Responsive ? (
                          <S.ResponsiveImgContainer widthValue="18%">
                            <S.ProjectImgDesc>모바일</S.ProjectImgDesc>
                            <S.ResImgContainer>
                              <S.FeatureImg src={val.Responsive} alt="모바일 버전 이미지" />
                              {val.Responsive2 || val.Responsive3 ? (
                                <>
                                  <S.FeatureImg
                                    style={{ marginLeft: '2rem' }}
                                    src={val.Responsive2}
                                    alt="모바일 버전 이미지"
                                  />
                                  <S.FeatureImg
                                    style={{ marginLeft: '2rem' }}
                                    src={val.Responsive3}
                                    alt="모바일 버전 이미지"
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
                        처음 시작해본 프로젝트였기 때문에 알아볼 것도 많았고 부족한 점도 많았다.{' '}
                        <br /> 하지만 버그가 생겼을 때 구글링하고 질의응답 방법으로 해결함으로써
                        문제해결 능력을 키웠다.
                      </S.ProjectTextInDescContainer>
                      <S.EmptySpace />

                      <S.ProjectTextInDescContainer>
                        완벽하게 구현하지 못한 백오피스 페이지가 아쉬웠다.
                        <br />
                        프로젝트 기간이 늘어가는 것을 줄이기 위해서 구조를 먼저 만들어야 함을
                        느꼈다.
                      </S.ProjectTextInDescContainer>
                    </S.ProjectTextInDesc>
                  </S.ProjectDescTexts>
                </S.ProjectFeeling>
              </S.ProjectTextData>
            </S.Section>
          </S.ProjectContainer>
        </S.ProjectDataSection>
        <S.ProjectDataSection blurBoolean={blur}>
          <S.ProjectDate>
            <DateComponent year={[2, 0, 2, 2]} day={[0, 6]} />
          </S.ProjectDate>
          <S.ProjectContainer widthBool={true}>
            <S.Section id="lawlearn">
              <S.ProjectTitle {...lawAnimation[0]}>🧾 LawLearn</S.ProjectTitle>
              <S.ProjectTextData>
                <S.ProjectDesc {...lawAnimation[1]}>
                  BACKGROUND
                  <S.ProjectDescTexts style={{ marginTop: '0.5rem' }}>
                    <S.ProjectTextInDesc {...lawAnimation[3]}>
                      <S.ProjectTextInDescContainer>
                        정보화시대가 발전하면서 사이버공간에서의 모욕 및 명예훼손이 빈번해졌고
                        <br />
                        그로인해 발생하는 피해자들을 위해 도움이 되고자 함
                      </S.ProjectTextInDescContainer>
                    </S.ProjectTextInDesc>
                  </S.ProjectDescTexts>
                </S.ProjectDesc>
                <S.EmptySpace />
                <S.ProjectDesc {...lawAnimation[2]}>
                  LEARN
                  <S.ProjectDescTexts style={{ marginTop: '0.5rem' }}>
                    <S.ProjectTextInDesc {...lawAnimation[4]}>
                      <S.ProjectTextInDescContainer>
                        처음 시도해본 프로젝트로 많은 시간이 들었고 개발을 하면서 욕심이 생겨 여러
                        기능들을 추가하며 <br />
                        여러 hook과 typescript를 배움
                      </S.ProjectTextInDescContainer>
                    </S.ProjectTextInDesc>
                  </S.ProjectDescTexts>
                </S.ProjectDesc>
                <S.EmptySpace />
                <S.ProjectDesc {...infoScroll[1]}>
                  INFO
                  <S.ProjectDescTexts style={{ marginTop: '0.5rem' }}>
                    <S.ProjectTextInDesc>
                      {lawInfoArr.map((infoValue, idx) => {
                        return (
                          <S.ProjectTextInDescContainer key={idx}>
                            <span style={{ marginRight: '5px' }}>{infoValue.infoTitle}</span>
                            <S.ProjectDescHorizontal>-</S.ProjectDescHorizontal>
                            <S.aTagUrl href={infoValue.href} target="_blank" rel="noreferrer">
                              {infoValue.href}
                            </S.aTagUrl>
                          </S.ProjectTextInDescContainer>
                        );
                      })}
                    </S.ProjectTextInDesc>
                  </S.ProjectDescTexts>
                </S.ProjectDesc>
                <S.ProjectFeatures>FEATURES</S.ProjectFeatures>
                {lawArr.map((val, idx) => {
                  return (
                    <div key={idx} style={{ marginTop: '5rem' }}>
                      <S.ProjectDescTexts style={{ marginTop: '5rem' }}>
                        <S.ProjectTextInDesc>
                          <S.ProjectTextInDescContainer>
                            {val.FeatTitle}
                          </S.ProjectTextInDescContainer>
                        </S.ProjectTextInDesc>
                      </S.ProjectDescTexts>
                      <S.ProjectImgContainer {...scrollNum[val.scrollNum]}>
                        <S.DesktopImgContainer widthValue="100%">
                          <S.ProjectImgDesc></S.ProjectImgDesc>
                          <S.FeatureImg alt="law 프로젝트 이미지" src={val.ImgSrcDesk1} />
                          {val.ImgSrcDesk2 ? (
                            <S.FeatureImg
                              style={{ marginTop: '3rem' }}
                              alt="law 프로젝트 이미지"
                              src={val.ImgSrcDesk2}
                            />
                          ) : (
                            <></>
                          )}
                          {val.ImgSrcDesk3 ? (
                            <S.FeatureImg
                              style={{ marginTop: '3rem' }}
                              alt="law 프로젝트 이미지"
                              src={val.ImgSrcDesk3}
                            />
                          ) : (
                            <></>
                          )}
                          {val.ImgSrcDesk4 ? (
                            <S.FeatureImg
                              style={{ marginTop: '3rem' }}
                              alt="law 프로젝트 이미지"
                              src={val.ImgSrcDesk4}
                            />
                          ) : (
                            <></>
                          )}
                        </S.DesktopImgContainer>
                      </S.ProjectImgContainer>
                    </div>
                  );
                })}
                <S.ProjectFeeling>
                  느낀 점
                  <S.ProjectDescTexts style={{ marginTop: '0.5rem' }}>
                    <S.ProjectTextInDesc>
                      <S.ProjectTextInDescContainer>
                        LawLearn 프로젝트를 통해 여러 인터렉션 디자인을 개발하면서 custom hook을
                        구현하고 state를 활용하면서 관리하는 방법을 익혔다.
                      </S.ProjectTextInDescContainer>
                      <S.EmptySpace />
                    </S.ProjectTextInDesc>
                  </S.ProjectDescTexts>
                </S.ProjectFeeling>
              </S.ProjectTextData>
            </S.Section>
          </S.ProjectContainer>
        </S.ProjectDataSection>
        <S.ProjectDataSection blurBoolean={blur}>
          <S.ProjectDate>
            <DateComponent year={[2, 0, 2, 3]} day={[0, 1]} />
          </S.ProjectDate>
          <S.ProjectContainer widthBool={true}>
            <S.Section id="langtudy">
              <S.ProjectTitle {...lawAnimation[0]}>📖 Langtudy</S.ProjectTitle>
              <S.ProjectTextData>
                <S.ProjectDesc {...lawAnimation[1]}>
                  BACKGROUND
                  <S.ProjectDescTexts style={{ marginTop: '0.5rem' }}>
                    <S.ProjectTextInDesc {...lawAnimation[3]}>
                      <S.ProjectTextInDescContainer>
                        정보화시대가 발전하면서 사이버공간에서의 모욕 및 명예훼손이 빈번해졌고
                        <br />
                        그로인해 발생하는 피해자들을 위해 도움이 되고자 함
                      </S.ProjectTextInDescContainer>
                    </S.ProjectTextInDesc>
                  </S.ProjectDescTexts>
                </S.ProjectDesc>
                <S.EmptySpace />
                <S.ProjectDesc {...lawAnimation[2]}>
                  LEARN
                  <S.ProjectDescTexts style={{ marginTop: '0.5rem' }}>
                    <S.ProjectTextInDesc {...lawAnimation[4]}>
                      <S.ProjectTextInDescContainer>
                        처음 시도해본 프로젝트로 많은 시간이 들었고 개발을 하면서 욕심이 생겨 여러
                        기능들을 추가하며 <br />
                        여러 hook과 typescript를 배움
                      </S.ProjectTextInDescContainer>
                    </S.ProjectTextInDesc>
                  </S.ProjectDescTexts>
                </S.ProjectDesc>
                <S.EmptySpace />
                <S.ProjectDesc {...infoScroll[1]}>
                  INFO
                  <S.ProjectDescTexts style={{ marginTop: '0.5rem' }}>
                    <S.ProjectTextInDesc>
                      {ltInfoArr.map((infoValue, idx) => {
                        return (
                          <S.ProjectTextInDescContainer key={idx}>
                            <span style={{ marginRight: '5px' }}>{infoValue.infoTitle}</span>
                            <S.ProjectDescHorizontal>-</S.ProjectDescHorizontal>
                            <S.aTagUrl href={infoValue.href} target="_blank" rel="noreferrer">
                              {infoValue.href}
                            </S.aTagUrl>
                          </S.ProjectTextInDescContainer>
                        );
                      })}
                    </S.ProjectTextInDesc>
                  </S.ProjectDescTexts>
                </S.ProjectDesc>
                <S.ProjectFeatures>FEATURES</S.ProjectFeatures>
                {langArr.map((val, idx) => {
                  return (
                    <div key={idx} style={{ marginTop: '5rem' }}>
                      <S.ProjectDescTexts style={{ marginTop: '5rem' }}>
                        <S.ProjectTextInDesc>
                          <S.ProjectTextInDescContainer>
                            {val.FeatTitle}
                          </S.ProjectTextInDescContainer>
                        </S.ProjectTextInDesc>
                      </S.ProjectDescTexts>
                      <S.ProjectImgContainer>
                        {val.ImgSrcDesk ? (
                          <S.DesktopImgContainer widthValue="80%">
                            <S.ProjectImgDesc>데스크탑</S.ProjectImgDesc>
                            <S.FeatureImg alt="skyplanner 프로젝트 이미지" src={val.ImgSrcDesk} />
                          </S.DesktopImgContainer>
                        ) : (
                          <></>
                        )}
                        {val.Responsive ? (
                          <S.ResponsiveImgContainer widthValue="18%">
                            <S.ProjectImgDesc>모바일</S.ProjectImgDesc>
                            <S.ResImgContainer>
                              <S.FeatureImg src={val.Responsive} alt="모바일 버전 이미지" />
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
                        LawLearn 프로젝트를 통해 여러 인터렉션 디자인을 개발하면서 custom hook을
                        구현하고 state를 활용하면서 관리하는 방법을 익혔다.
                      </S.ProjectTextInDescContainer>
                      <S.EmptySpace />
                    </S.ProjectTextInDesc>
                  </S.ProjectDescTexts>
                </S.ProjectFeeling>
              </S.ProjectTextData>
            </S.Section>
          </S.ProjectContainer>
        </S.ProjectDataSection>
        <S.ProjectDataSection blurBoolean={blur}>
          <S.ProjectDate {...scrollanimation[3]}>
            <DateComponent year={[2, 0, 2, 3]} day={[0, 3]} />
          </S.ProjectDate>

          <S.ProjectContainer widthBool={true}>
            <S.Section id="greencash">
              <S.ProjectTitle>🌳 GreenCash</S.ProjectTitle>
              <S.ProjectTextData>
                <S.ProjectDesc>
                  BACKGROUND
                  <S.ProjectDescTexts style={{ marginTop: '0.5rem' }}>
                    <S.ProjectTextInDesc>
                      <S.ProjectTextInDescContainer>
                        학원에 의지하며 공부하는 학생들의 자기주도학습 및 전반적인 공부시간 파악
                        프로젝트
                      </S.ProjectTextInDescContainer>
                    </S.ProjectTextInDesc>
                  </S.ProjectDescTexts>
                </S.ProjectDesc>
                <S.EmptySpace />
                <S.ProjectDesc>
                  LEARN
                  <S.ProjectDescTexts style={{ marginTop: '0.5rem' }}>
                    <S.ProjectTextInDesc>
                      <S.ProjectTextInDescContainer>
                        처음 시도해본 프로젝트로 많은 시간이 들었고 개발을 하면서 욕심이 생겨 여러
                        기능들을 추가하며 <br />
                        여러 hook과 typescript를 배움
                      </S.ProjectTextInDescContainer>
                      <br />
                      <S.ProjectTextInDescContainer>
                        백엔드로는 sequelize를 사용하여 쉽게 환경을 구성하고 nodejs 기반 post,
                        get구현
                      </S.ProjectTextInDescContainer>
                    </S.ProjectTextInDesc>
                  </S.ProjectDescTexts>
                </S.ProjectDesc>
                <S.EmptySpace />
                <S.ProjectDesc>
                  INFO
                  <S.ProjectDescTexts style={{ marginTop: '0.5rem' }}>
                    <S.ProjectTextInDesc>
                      {gcInfoArr.map((infoValue, idx) => {
                        return (
                          <S.ProjectTextInDescContainer key={idx}>
                            <span style={{ marginRight: '5px' }}>{infoValue.infoTitle}</span>
                            <S.ProjectDescHorizontal>-</S.ProjectDescHorizontal>
                            <S.aTagUrl href={infoValue.href} target="_blank" rel="noreferrer">
                              {infoValue.href}
                            </S.aTagUrl>
                          </S.ProjectTextInDescContainer>
                        );
                      })}
                    </S.ProjectTextInDesc>
                  </S.ProjectDescTexts>
                </S.ProjectDesc>
                <S.ProjectFeatures>FEATURES</S.ProjectFeatures>
                {gcArr.map((val, idx) => {
                  return (
                    <div key={idx} style={{ marginTop: '5rem' }}>
                      <S.ProjectDescTexts>
                        <S.ProjectTextInDesc>
                          <S.ProjectTextInDescContainer>
                            {val.FeatTitle}
                          </S.ProjectTextInDescContainer>
                        </S.ProjectTextInDesc>
                      </S.ProjectDescTexts>
                      <S.ProjectImgContainer>
                        {val.Responsive ? (
                          <S.ResponsiveImgContainer widthValue="23%">
                            <S.ProjectImgDesc>모바일</S.ProjectImgDesc>
                            <S.ResImgContainer>
                              <S.FeatureImg src={val.Responsive} alt="모바일 버전 이미지" />
                              {val.Responsive2 ? (
                                <>
                                  <S.FeatureImg
                                    style={{ marginLeft: '2rem' }}
                                    src={val.Responsive2}
                                    alt="모바일 버전 이미지"
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
                        처음 시작해본 프로젝트였기 때문에 알아볼 것도 많았고 부족한 점도 많았다.{' '}
                        <br /> 하지만 버그가 생겼을 때 구글링하고 질의응답 방법으로 해결함으로써
                        문제해결 능력을 키웠다.
                      </S.ProjectTextInDescContainer>
                      <S.EmptySpace />

                      <S.ProjectTextInDescContainer>
                        완벽하게 구현하지 못한 백오피스 페이지가 아쉬웠다.
                        <br />
                        프로젝트 기간이 늘어가는 것을 줄이기 위해서 구조를 먼저 만들어야 함을
                        느꼈다.
                      </S.ProjectTextInDescContainer>
                    </S.ProjectTextInDesc>
                  </S.ProjectDescTexts>
                </S.ProjectFeeling>
              </S.ProjectTextData>
            </S.Section>
          </S.ProjectContainer>
        </S.ProjectDataSection>
      </S.ProjectPageSection>
    </S.ProjcetWrapper>
  );
};
