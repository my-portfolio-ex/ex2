import React, { useState } from 'react';

import * as S from './styled';

import { useScrollFadeIn, useSeo } from '@/hooks';

import { MouseDown } from '@components/MouseDown';
import { DateComponent } from '@components/Date';
import Lazy from '@components/test';

export const ProjectPage: React.FC = () => {
  const lawAnimation = {
    0: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.2),
    1: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5),
    2: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5),
    3: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.9),
    4: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.8),
  };
  const scrollanimation: any = {
    0: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5),
    1: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.7),
    2: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.9),
    3: useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.3),
    4: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.3),
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
  const InvArr = [
    {
      FeatTitle: '메인 화면',
      Responsive: 'https://i.ibb.co/xfqJDbY/image.png',
    },
    {
      FeatTitle: '질문 추가',
      Responsive: 'https://i.ibb.co/r72hhLy/image.png',
      Responsive2: 'https://i.ibb.co/mc8PmWD/image.png',
      Responsive3: 'https://i.ibb.co/BjJzv4X/image.png',
    },
    {
      FeatTitle: 'Header Modal',
      Responsive: 'https://i.ibb.co/L0H0Ns0/image.png',
    },
    {
      FeatTitle: '어드민 페이지 (요청을 수락 및 삭제)',
      Responsive: 'https://i.ibb.co/68vVzWv/image.png',
    },
  ];
  interface spArrProps {
    FeatTitle: string;
    ImgSrcDesk?: string;
    Responsive: string;
    Responsive2: string;
    Responsive3: string;

    scrollNum: number;
  }
  const spArr: spArrProps[] = [
    {
      FeatTitle: '메인화면',
      ImgSrcDesk: 'https://i.ibb.co/Sddg95V/image.png',
      Responsive: 'https://i.ibb.co/VWvvSRc/image2.png',
      Responsive2: '',
      Responsive3: '',

      scrollNum: 9,
    },
    {
      FeatTitle: '로그인',
      ImgSrcDesk: 'https://i.ibb.co/kGyKxkM/login-Desk.png',
      Responsive: 'https://i.ibb.co/6b273b4/responsive-Login.png',
      Responsive2: '',
      Responsive3: '',

      scrollNum: 10,
    },
    {
      FeatTitle: '회원가입',
      ImgSrcDesk: 'https://i.ibb.co/mJ8QdkR/register-Desk.png',
      Responsive: 'https://i.ibb.co/3BcVPPV/responsive-Register.png',
      Responsive2: '',
      Responsive3: '',

      scrollNum: 11,
    },
    {
      FeatTitle: '로그인 후 메인',
      ImgSrcDesk: 'https://i.ibb.co/LkSbnh4/afterlogin.png',
      Responsive: 'https://i.ibb.co/dQJHZgr/After-Login-Responsive.png',
      Responsive2: '',
      Responsive3: '',

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
      Responsive3: '',

      scrollNum: 14,
    },
    {
      FeatTitle: '과목별 바 그래프의 시간 데이터',
      ImgSrcDesk: 'https://i.ibb.co/6F7HKVS/bar.png',
      Responsive: '',
      Responsive2: '',
      Responsive3: '',

      scrollNum: 15,
    },
    {
      FeatTitle: '습관시간 선 형태의 그래프 데이터',
      ImgSrcDesk: 'https://i.ibb.co/1TGsDP3/line.png',
      Responsive: '',
      Responsive2: '',
      Responsive3: '',
      scrollNum: 16,
    },
    {
      FeatTitle: '목표 원 그래프의 시간 데이터',
      ImgSrcDesk: 'https://i.ibb.co/9G9yjmf/donuts.png',
      Responsive: '',
      Responsive2: '',
      Responsive3: '',

      scrollNum: 17,
    },
    {
      FeatTitle: '시간 관리 선생님 로그인',
      ImgSrcDesk: 'https://i.ibb.co/B6P87x5/Teacher-Login.png',
      Responsive: 'https://i.ibb.co/PCYGcw8/Teacher-Login-Res.png',
      Responsive2: '',
      Responsive3: '',

      scrollNum: 18,
    },
    {
      FeatTitle: '선생님 로그인 후 메인',
      ImgSrcDesk: 'https://i.ibb.co/ZznbrPy/Tea-After-Login.png',
      Responsive: 'https://i.ibb.co/VxRZ935/Tea-After-Login-Res.png',
      Responsive2: '',
      Responsive3: '',

      scrollNum: 19,
    },
    {
      FeatTitle: '전체 학생 데이터를 확인할 수 있는 관리자 페이지',
      ImgSrcDesk: 'https://i.ibb.co/Kqf82BN/management.png',
      Responsive: '',
      Responsive2: '',
      Responsive3: '',

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
  const invQInfoArr = [
    {
      infoTitle: 'github_frontend',
      href: 'https://github.com/InvQ/InvQ_frontend',
    },
    {
      infoTitle: 'release url',
      href: 'https://www.invq.site/',
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
    {
      id: '#invQ',
      title: 'invQ',
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
                <S.ProjectDesc {...useScrollFadeIn('up', 1, 0.5)}>
                  사용 기술
                  <S.ProjectDescTexts style={{ marginTop: '0.5rem' }}>
                    <S.ProjectTextInDesc {...useScrollFadeIn('up', 1, 0.7)}>
                      <S.ProjectTextInDescContainer>
                        React.js, Javascript, Typescript, Sequelize, express.js, Styled-component
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
                          <S.ProjectTextInDescContainer
                            {...useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.3)}
                            key={idx}
                          >
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
                            <Lazy alt="skyplanner 이미지" src={val.ImgSrcDesk} />
                          </S.DesktopImgContainer>
                        ) : (
                          <></>
                        )}
                        {val.Responsive ? (
                          <S.ResponsiveImgContainer widthValue="18%">
                            <S.ProjectImgDesc>모바일</S.ProjectImgDesc>
                            <S.ResImgContainer>
                              <Lazy src={val.Responsive} alt="모바일 버전 이미지" />
                              {val.Responsive2 || val.Responsive3 ? (
                                <>
                                  <Lazy src={val.Responsive2} alt="모바일 버전 이미지" />

                                  <Lazy src={val.Responsive3} alt="모바일 버전 이미지" />
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
          <S.ProjectDate {...useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.3)}>
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
                        전체적인 파일구조를 학습하고 css styled component를 활용한 스타일링
                      </S.ProjectTextInDescContainer>
                    </S.ProjectTextInDesc>
                  </S.ProjectDescTexts>
                </S.ProjectDesc>
                <S.EmptySpace />
                <S.ProjectDesc {...useScrollFadeIn('up', 1, 0.5)}>
                  사용 기술
                  <S.ProjectDescTexts style={{ marginTop: '0.5rem' }}>
                    <S.ProjectTextInDesc {...useScrollFadeIn('up', 1, 0.7)}>
                      <S.ProjectTextInDescContainer>
                        React.js, emotion styled-component, Typescript, JavaScript,
                      </S.ProjectTextInDescContainer>
                    </S.ProjectTextInDesc>
                  </S.ProjectDescTexts>
                </S.ProjectDesc>
                <S.ProjectDesc {...infoScroll[1]}>
                  INFO
                  <S.ProjectDescTexts style={{ marginTop: '0.5rem' }}>
                    <S.ProjectTextInDesc>
                      {lawInfoArr.map((infoValue, idx) => {
                        return (
                          <S.ProjectTextInDescContainer
                            {...useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.3)}
                            key={idx}
                          >
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
                <S.EmptySpace />
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
                      <S.ProjectImgContainer {...useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.3)}>
                        <S.DesktopImgContainer widthValue="100%">
                          <S.ProjectImgDesc></S.ProjectImgDesc>
                          <S.FeatureImg alt="law 프로젝트 이미지" src={val.ImgSrcDesk1} />
                          {val.ImgSrcDesk2 ? (
                            <div {...useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.3)}>
                              <S.FeatureImg
                                style={{ marginTop: '1.5rem' }}
                                alt="law 프로젝트 이미지"
                                src={val.ImgSrcDesk2}
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {val.ImgSrcDesk3 ? (
                            <div {...useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.3)}>
                              <S.FeatureImg
                                style={{ marginTop: '1.5rem' }}
                                alt="law 프로젝트 이미지"
                                src={val.ImgSrcDesk3}
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {val.ImgSrcDesk4 ? (
                            <div {...useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.3)}>
                              <S.FeatureImg
                                style={{ marginTop: '1.5rem' }}
                                alt="law 프로젝트 이미지"
                                src={val.ImgSrcDesk4}
                              />
                            </div>
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
          <S.ProjectDate {...useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.3)}>
            <DateComponent year={[2, 0, 2, 3]} day={[0, 1]} />
          </S.ProjectDate>
          <S.ProjectContainer widthBool={true}>
            <S.Section id="langtudy">
              <S.ProjectTitle>📖 Langtudy</S.ProjectTitle>
              <S.ProjectTextData>
                <S.ProjectDesc {...useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5)}>
                  BACKGROUND
                  <S.ProjectDescTexts style={{ marginTop: '0.5rem' }}>
                    <S.ProjectTextInDesc>
                      <S.ProjectTextInDescContainer
                        {...useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.8)}
                      >
                        영어 공부 및 학교의 시험 단어를 암기하기 위한 서비스 프로젝트
                      </S.ProjectTextInDescContainer>
                    </S.ProjectTextInDesc>
                  </S.ProjectDescTexts>
                </S.ProjectDesc>
                <S.EmptySpace />
                <S.ProjectDesc {...useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5)}>
                  LEARN
                  <S.ProjectDescTexts style={{ marginTop: '0.5rem' }}>
                    <S.ProjectTextInDesc>
                      <S.ProjectTextInDescContainer
                        {...useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.8)}
                      >
                        NextJS 프레임워크를 사용하여 api를 불러오고 데이터를 적용하는 과정을 공부함.
                        <br />
                        소셜로그인과 비밀번호 초기화 기능 구현 with Firebase
                      </S.ProjectTextInDescContainer>
                    </S.ProjectTextInDesc>
                  </S.ProjectDescTexts>
                </S.ProjectDesc>
                <S.EmptySpace />
                <S.ProjectDesc {...useScrollFadeIn('up', 1, 0.5)}>
                  사용 기술
                  <S.ProjectDescTexts style={{ marginTop: '0.5rem' }}>
                    <S.ProjectTextInDesc {...useScrollFadeIn('up', 1, 0.7)}>
                      <S.ProjectTextInDescContainer>
                        Next.js, Emotion styled-component, TypeScript, Firebase
                      </S.ProjectTextInDescContainer>
                    </S.ProjectTextInDesc>
                  </S.ProjectDescTexts>
                </S.ProjectDesc>
                <S.EmptySpace />
                <S.ProjectDesc {...useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5)}>
                  INFO
                  <S.ProjectDescTexts style={{ marginTop: '0.5rem' }}>
                    <S.ProjectTextInDesc>
                      {ltInfoArr.map((infoValue, idx) => {
                        return (
                          <S.ProjectTextInDescContainer
                            {...useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.3)}
                            key={idx}
                          >
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
                <S.EmptySpace />
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
                          <S.DesktopImgContainer
                            {...useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5)}
                            widthValue="80%"
                          >
                            <S.ProjectImgDesc>데스크탑</S.ProjectImgDesc>
                            <S.FeatureImg alt="langtudy 프로젝트 이미지" src={val.ImgSrcDesk} />
                          </S.DesktopImgContainer>
                        ) : (
                          <></>
                        )}
                        {val.Responsive ? (
                          <S.ResponsiveImgContainer
                            {...useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5)}
                            widthValue="18%"
                          >
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
                        React를 사용할 줄 아니까 NextJS가 비교적 쉽게 느껴졌다.
                        <br />
                        api를 불러오고 데이터를 적용하는 과정에서 성능 향상하는 방법을 공부했다.
                        <br />
                        REST API의 이해도를 높히고 api를 구현하는 기초적인 방법을 공부했다.
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
          <S.ProjectDate {...useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.3)}>
            <DateComponent year={[2, 0, 2, 3]} day={[0, 3]} />
          </S.ProjectDate>

          <S.ProjectContainer widthBool={true}>
            <S.Section id="greencash">
              <S.ProjectTitle {...useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5)}>
                🌳 GreenCash
              </S.ProjectTitle>
              <S.ProjectTextData>
                <S.ProjectDesc {...useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5)}>
                  BACKGROUND
                  <S.ProjectDescTexts style={{ marginTop: '0.5rem' }}>
                    <S.ProjectTextInDesc>
                      <S.ProjectTextInDescContainer
                        {...useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.8)}
                      >
                        코로나의 여파로 생긴 많은 쓰레기 환경이슈가 프로젝트의 시작이 되었음.
                        <br />
                        환경을 위해 분리배출을 하고 포인트를 받음으로써 분리배출 습관을 갖고 사회에
                        좋은 영향을 끼칠 수 있도록 하기 위한 서비스.
                      </S.ProjectTextInDescContainer>
                    </S.ProjectTextInDesc>
                  </S.ProjectDescTexts>
                </S.ProjectDesc>
                <S.EmptySpace />
                <S.ProjectDesc {...useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5)}>
                  LEARN
                  <S.ProjectDescTexts style={{ marginTop: '0.5rem' }}>
                    <S.ProjectTextInDesc>
                      <S.ProjectTextInDescContainer
                        {...useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.8)}
                      >
                        컴포넌트를 나누고 파일구조와 최적화 방법을 익혔음.
                        <br />
                        TypeScript를 활용하여 type을 지정해줌으로써 오류를 잡고 명확한 데이터를
                        받게했음.
                      </S.ProjectTextInDescContainer>
                      <br />
                      <S.ProjectTextInDescContainer
                        {...useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.8)}
                      >
                        기능들을 개발하면서 각 element에 스타일주기, 사진을 촬영하고 backend 서버로
                        데이터를 전송하는 방법.
                        <br />
                        backend서버로 받은 응답데이터 처리
                      </S.ProjectTextInDescContainer>
                    </S.ProjectTextInDesc>
                  </S.ProjectDescTexts>
                </S.ProjectDesc>
                <S.EmptySpace />
                <S.ProjectDesc {...useScrollFadeIn('up', 1, 0.5)}>
                  사용 기술
                  <S.ProjectDescTexts style={{ marginTop: '0.5rem' }}>
                    <S.ProjectTextInDesc {...useScrollFadeIn('up', 1, 0.7)}>
                      <S.ProjectTextInDescContainer>
                        React.js, emotion styled-component, Typescript, Recoil, Django
                      </S.ProjectTextInDescContainer>
                    </S.ProjectTextInDesc>
                  </S.ProjectDescTexts>
                </S.ProjectDesc>
                <S.EmptySpace />
                <S.ProjectDesc {...useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5)}>
                  INFO
                  <S.ProjectDescTexts style={{ marginTop: '0.5rem' }}>
                    <S.ProjectTextInDesc>
                      {gcInfoArr.map((infoValue, idx) => {
                        return (
                          <S.ProjectTextInDescContainer
                            {...useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.3)}
                            key={idx}
                          >
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
                <S.EmptySpace />
                <S.ProjectFeatures {...useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5)}>
                  FEATURES
                </S.ProjectFeatures>
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
                          <S.ResponsiveImgContainer
                            {...useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5)}
                            widthValue="23%"
                          >
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
                        현재 개발중에 있어서 사회에 좋은 영향을 기여할 수 있는 서비스를 만들고
                        있다는것이 개발자로 뿌듯함을 느낌.
                      </S.ProjectTextInDescContainer>
                      <S.ProjectTextInDescContainer>
                        기능들이 정상적으로 동작할 때 더욱 흥미를 느끼게 되고 개발자체가 재밌어졌다.
                        <br />
                        문제가 있어도 해결방법을 찾아서 해결하여 새로운 지식을 얻게 되는 것이
                        좋았다.
                      </S.ProjectTextInDescContainer>
                    </S.ProjectTextInDesc>
                  </S.ProjectDescTexts>
                </S.ProjectFeeling>
              </S.ProjectTextData>
            </S.Section>
          </S.ProjectContainer>
        </S.ProjectDataSection>
        <S.ProjectDataSection blurBoolean={blur}>
          <S.ProjectDate {...useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.3)}>
            <DateComponent year={[2, 0, 2, 3]} day={[0, 3]} />
          </S.ProjectDate>

          <S.ProjectContainer widthBool={true}>
            <S.Section id="invQ">
              <S.ProjectTitle {...useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5)}>
                📱 InvQ
              </S.ProjectTitle>
              <S.ProjectTextData>
                <S.ProjectDesc {...useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5)}>
                  BACKGROUND
                  <S.ProjectDescTexts style={{ marginTop: '0.5rem' }}>
                    <S.ProjectTextInDesc>
                      <S.ProjectTextInDescContainer
                        {...useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.8)}
                      >
                        취업 준비를 하면서 프론트엔드 면접 질문을 대비하고자 만든 프로젝트 및 서비스
                      </S.ProjectTextInDescContainer>
                    </S.ProjectTextInDesc>
                  </S.ProjectDescTexts>
                </S.ProjectDesc>
                <S.EmptySpace />
                <S.ProjectDesc {...useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5)}>
                  LEARN
                  <S.ProjectDescTexts style={{ marginTop: '0.5rem' }}>
                    <S.ProjectTextInDesc>
                      <S.ProjectTextInDescContainer
                        {...useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.8)}
                      >
                        파일 구조 설계 및 기한관리를 할 수 있게 되었음.
                        <br />
                        간소화와 성능 끌어올리는 코드 작성법을 알게됨.
                      </S.ProjectTextInDescContainer>
                      <br />
                      <S.ProjectTextInDescContainer
                        {...useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.8)}
                      >
                        Firebase CRUD 방법을 익혔음. Create, Read, Update, Delete
                      </S.ProjectTextInDescContainer>
                    </S.ProjectTextInDesc>
                  </S.ProjectDescTexts>
                </S.ProjectDesc>
                <S.EmptySpace />
                <S.ProjectDesc {...useScrollFadeIn('up', 1, 0.5)}>
                  사용 기술
                  <S.ProjectDescTexts style={{ marginTop: '0.5rem' }}>
                    <S.ProjectTextInDesc {...useScrollFadeIn('up', 1, 0.7)}>
                      <S.ProjectTextInDescContainer>
                        React.js, emotion styled-component, Typescript, Firebase, Vite
                      </S.ProjectTextInDescContainer>
                    </S.ProjectTextInDesc>
                  </S.ProjectDescTexts>
                </S.ProjectDesc>
                <S.ProjectDesc {...useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5)}>
                  INFO
                  <S.ProjectDescTexts style={{ marginTop: '0.5rem' }}>
                    <S.ProjectTextInDesc>
                      {invQInfoArr.map((infoValue, idx) => {
                        return (
                          <S.ProjectTextInDescContainer
                            {...useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.3)}
                            key={idx}
                          >
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
                <S.EmptySpace />

                <S.ProjectFeatures {...useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5)}>
                  FEATURES
                </S.ProjectFeatures>
                {InvArr.map((val, idx) => {
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
                          <S.ResponsiveImgContainer
                            {...useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5)}
                            widthValue="23%"
                          >
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
                              {val.Responsive3 ? (
                                <S.FeatureImg
                                  style={{ marginLeft: '2rem' }}
                                  src={val.Responsive3}
                                  alt="모바일 버전 이미지"
                                />
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
                        status를 사용하여 실시간 데이터를 다루고 firebase의 전체적인 CRUD 흐름을
                        익혔음.
                        <br />
                      </S.ProjectTextInDescContainer>
                      <S.ProjectTextInDescContainer>
                        이번 프로젝트로 skyplanner를 개발할 때 보다 코딩 실력이 많이 늘었다는 것을
                        느꼈음.
                        <br />
                        개발하면서 너무 즐거웠고 에러가 나고 이를 해결하는 과정조차 재밌게 코딩을
                        즐겼다.
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
