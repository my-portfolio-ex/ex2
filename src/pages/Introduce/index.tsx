import React, { useEffect, useRef, useState } from 'react';
import * as S from './styled';
import * as SS from '../Test/styled';

import { useScrollFadeIn } from '@/hooks';
import { Global } from '@emotion/react';
import { MyInfoComponent, PropsConsComponent } from '@/components/introduce';

import MyPictureJPG from '@/assets/mypicture.jpg';
import Lazy from '../../components/test/index';

import { useToast } from '@hanseo0507/react-toast';

interface InfoDataArrProps {
  DataTitle: string;
  DateData: string[];
  Data: string[];
}

interface SkillArrProps {
  SkillName: string;
  SkillStatus: number;
  SkillImgSrc: string;
  RotateLevel: number;
  borderColor: string;
}

export const IntroducePage: React.FC = () => {
  const scrollhorizontalAnimation = {
    0: useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.5),
    1: useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.5),
    2: useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.5),
    3: useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.5),
    4: useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.5),
    5: useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.5),
    6: useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.5),
    7: useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.5),
    8: useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.5),
    9: useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.5),
    10: useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.5),
    11: useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.5),
    12: useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.5),
    13: useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.5),
    14: useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.5),
    15: useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.5),
    16: useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.5),
    17: useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.5),
    18: useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.5),
    19: useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.5),
    20: useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.5),
    21: useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.5),
    22: useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.5),
    23: useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.5),
    24: useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.5),
    25: useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.5),
    26: useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.5),
  };

  const introAnimation = {
    0: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5),
    1: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.7),
  };

  const contentAnimation = {
    0: useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.5),
    1: useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.7),
    2: useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.9),
    3: useScrollFadeIn<HTMLHeadingElement>('left', 1, 1.1),
    4: useScrollFadeIn<HTMLHeadingElement>('left', 1, 1.3),
    5: useScrollFadeIn<HTMLHeadingElement>('left', 1, 1.5),
  };

  const outerDivRef = useRef(null);

  const g = [
    { title: '소개', id: '#myself', animation: 0 },
    { title: '장단점', id: '#propscons', animation: 1 },
    { title: '성장과정', id: '#growth', animation: 2 },
    { title: '정보', id: '#info', animation: 3 },
  ];
  const [blur, setBlur] = useState(false);
  const handleMouseOver = () => {
    setBlur(true);
  };

  const infoDataArr: InfoDataArrProps[] = [
    {
      DataTitle: '학력사항',
      DateData: ['2021 ~ 2023'],
      Data: ['한세사이버보안고등학교 졸업'],
    },
    {
      DataTitle: '경력',
      DateData: ['2023. 11 ~ '],
      Data: ['모요에서 재직중'],
    },
    {
      DataTitle: '프로젝트',
      DateData: ['2022. 06', '2023. 03'],
      Data: ['LawLearn', 'GreenCash'],
    },
    {
      DataTitle: '수상',
      DateData: ['2022. 07'],
      Data: ['교내해커톤 한세톤 대상 수상'],
    },
    {
      DataTitle: 'SKILLS',
      DateData: [],
      Data: [],
    },
  ];
  const SkillArr: SkillArrProps[] = [
    {
      SkillName: 'React',
      borderColor: '#2471ff',
      RotateLevel: 3,
      SkillStatus: 80,
      SkillImgSrc:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
    },
    {
      SkillName: 'NextJS',
      borderColor: '#676767',
      RotateLevel: 3,
      SkillStatus: 70,
      SkillImgSrc: 'https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo.png',
    },
    {
      SkillName: 'JavaScript',
      borderColor: '#e6ff00',
      RotateLevel: 3,
      SkillStatus: 85,
      SkillImgSrc: 'https://t1.daumcdn.net/cfile/tistory/21221F4258E793521D',
    },
    {
      SkillName: 'TypeScript',
      borderColor: '#807eff',
      RotateLevel: 3,
      SkillStatus: 70,
      SkillImgSrc:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
    },
    {
      SkillName: 'AWS',
      borderColor: '#000',
      RotateLevel: 2,
      SkillStatus: 0,
      SkillImgSrc: 'https://hoing.io/storage/2021/10/amazon-web-services-logo-3_750.png',
    },
  ];
  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const onClicked = () => {
    setClicked(!clicked);
    setClicked2(false);
  };
  const onClicked2 = () => {
    setClicked2(!clicked2);
    setClicked(false);
  };
  const handleCopyClipBoard = (text: string) => {
    try {
      navigator.clipboard.writeText(text);
      toast.success('클립보드에 복사했어요!');
    } catch (error) {
      toast.error('어디선가 에러가 있어요!');
    }
  };
  const { toast } = useToast();
  return (
    <S.IntroduceWrapper>
      <Global styles={SS.styles} />
      <S.IntroducePageSection>
        <S.gotoButtonContainer>
          <S.gotoButtonDiv>
            {g.map((cTitle, idx) => {
              return (
                <div key={idx} style={{ display: 'flex', margin: '4px 0 4px 0' }}>
                  <S.gotoButton
                    data-info={JSON.stringify(g)}
                    onMouseOver={handleMouseOver}
                    onMouseLeave={() => setBlur(false)}
                    href={cTitle.id}
                  ></S.gotoButton>
                  <div {...useScrollFadeIn<HTMLHeadingElement>('left', 1, 0.5)}>
                    <S.gotoHoverText
                      onMouseOver={() => setBlur(true)}
                      onMouseLeave={() => setBlur(false)}
                      href={cTitle.id}
                    >
                      {cTitle.title}
                    </S.gotoHoverText>
                  </div>
                </div>
              );
            })}
          </S.gotoButtonDiv>
        </S.gotoButtonContainer>
        <S.IntroduceDataSection blurBoolean={blur}>
          <S.IntroduceContainer style={{ width: '85vw' }} widthBool={true}>
            <S.IntroduceIntro>
              <S.IntroduceIntroName {...introAnimation[0]}>박준희</S.IntroduceIntroName>
              <S.IntroduceIntroTitle {...introAnimation[1]}>자기소개</S.IntroduceIntroTitle>
            </S.IntroduceIntro>
          </S.IntroduceContainer>
        </S.IntroduceDataSection>
        <S.IntroduceDataSection blurBoolean={blur} id="myself">
          <S.IntroduceContent>소개</S.IntroduceContent>
          <S.IntroduceContainer widthBool={true}>
            <MyInfoComponent ImgSrc={MyPictureJPG} dataArray={infoDataArr} skillArray={SkillArr} />
          </S.IntroduceContainer>
        </S.IntroduceDataSection>
        <S.IntroduceDataSection blurBoolean={blur} id="propscons">
          <S.IntroduceContent>장단점</S.IntroduceContent>
          <S.IntroduceContainer widthBool={true}>
            <SS.codepen flexDirectionSet="column">
              <S.EmojiContainer>
                <S.Emoji>😀</S.Emoji>
                <S.EmojiText>스크롤 해주세요</S.EmojiText>
              </S.EmojiContainer>
              <SS.codepen flexDirectionSet="row">
                <SS.c marginTopValue="50vw">
                  <PropsConsComponent
                    text="계획적으로"
                    textDescription="할 일을 시간단위로 계획하여 효율적으로 끝낼 수 있다."
                  />
                </SS.c>
                <SS.c marginTopValue="100vw">
                  <PropsConsComponent
                    text="열정적으로"
                    textDescription="배움과 맡은 일에 열정적으로 최선을 다 한다."
                  />
                </SS.c>
                <SS.c marginTopValue="150vw">
                  <PropsConsComponent
                    text="주도적으로"
                    textDescription="스스로 해야 할 일을 찾고, 하고자 하는 것을 포기하지 않고 끝낸다."
                  />
                </SS.c>
                <SS.c marginTopValue="200vw"></SS.c>
              </SS.codepen>
            </SS.codepen>
            <SS.codepen flexDirectionSet="column">
              <S.EmojiContainer style={{ marginTop: '10vw' }}>
                <S.Emoji>😐</S.Emoji>
              </S.EmojiContainer>
              <SS.codepen flexDirectionSet="row">
                <SS.c marginTopValue="50vw">
                  <PropsConsComponent
                    text="완벽하게"
                    textDescription="하고자 하는 일을 완벽하게 끝내려고 많은 시간을 소요할 때가 있다."
                  />
                </SS.c>
                <SS.c marginTopValue="80vw"></SS.c>
              </SS.codepen>
            </SS.codepen>
          </S.IntroduceContainer>
        </S.IntroduceDataSection>
        <S.IntroduceDataSection blurBoolean={blur} id="growth">
          <S.IntroduceContent>성장과정</S.IntroduceContent>
          <S.IntroduceContainer widthBool={true}>
            <S.SeeTip>프로젝트는 눌러서 개발중 또는 완성된 결과를 보실 수 있습니다🙂</S.SeeTip>
            <S.growupPre ref={outerDivRef}>
              <S.EventBoxContainer>
                <S.EventBox marginValue="0.5rem" {...scrollhorizontalAnimation[0]}>
                  <S.EventBoxText>ITQ한글 A등급 취득</S.EventBoxText>
                </S.EventBox>
                <S.EventBox marginValue="4.5rem" {...scrollhorizontalAnimation[1]}>
                  <S.EventBoxText>정보처리기능사 취득</S.EventBoxText>
                </S.EventBox>
                <S.EventBox marginValue="14.8rem" {...scrollhorizontalAnimation[4]}>
                  <S.EventBoxText>고등학교 입학</S.EventBoxText>
                </S.EventBox>
                <S.EventBox marginValue="11.5rem" {...scrollhorizontalAnimation[6]}>
                  <S.EventBoxText>네트워크 관리사 2급 취득</S.EventBoxText>
                </S.EventBox>
                <S.EventBox marginValue="2.5rem" {...scrollhorizontalAnimation[10]}>
                  <S.EventBoxText>ITQ엑셀 A등급 취득</S.EventBoxText>
                </S.EventBox>
                <S.EventBox marginValue="2.5rem" {...scrollhorizontalAnimation[12]}>
                  <S.EventBoxText>리눅스마스터 2급 취득</S.EventBoxText>
                </S.EventBox>
                <S.EventBox marginValue="7.3rem" {...scrollhorizontalAnimation[14]}>
                  <S.EventBoxA href="https://lawlearn.site" target="_blank">
                    LawLearn 프로젝트 시작
                  </S.EventBoxA>
                </S.EventBox>
                <S.EventBox marginValue="1.7rem" {...scrollhorizontalAnimation[16]}>
                  <S.EventBoxText>교내해커톤 1위수상</S.EventBoxText>
                </S.EventBox>

                <S.EventBox marginValue="7.5rem" {...scrollhorizontalAnimation[20]}>
                  <S.EventBoxA
                    onClick={() => alert('langtudy로 이동합니다')}
                    href="https://langtudy.vercel.app"
                    target="_blank"
                  >
                    LawLearn 완성 및 배포 || Langtudy 프로젝트 시작
                  </S.EventBoxA>
                </S.EventBox>
                <S.EventBox marginValue="5.2rem" {...scrollhorizontalAnimation[22]}>
                  <S.EventBoxA href="https://greencash.vercel.app" target="_blank">
                    GreenCash 프로젝트 시작
                  </S.EventBoxA>
                </S.EventBox>
                <S.EventBox marginValue="17.2rem" {...scrollhorizontalAnimation[25]}>
                  <S.EventBoxA href="https://moyoplan.com" target="_blank">
                    모요 입사
                  </S.EventBoxA>
                </S.EventBox>
              </S.EventBoxContainer>
              <S.horizontalLine>
                <S.horizontalPoint eachLeft="89px" />
                <S.horizontalPoint eachLeft="8.5%" />
                <S.horizontalPoint eachLeft="18.2%" />
                <S.horizontalPoint eachLeft="27%" />
                <S.horizontalPoint eachLeft="33.4%" />
                <S.horizontalPoint eachLeft="38.8%" />
                <S.horizontalPoint eachLeft="46.9%" />
                <S.horizontalPoint eachLeft="52.4%" />
                <S.horizontalPoint eachLeft="59.8%" />
                <S.horizontalPoint eachLeft="65.2%" />
                <S.horizontalPoint eachLeft="72.6%" />
                <S.horizontalPoint eachLeft="83.6%" />
              </S.horizontalLine>
              <S.EventBoxDateContainer>
                <S.EventBoxDate marginValue="" {...scrollhorizontalAnimation[2]}>
                  2019.03.14
                </S.EventBoxDate>
                <S.EventBoxDate marginValue="11.5rem" {...scrollhorizontalAnimation[3]}>
                  2019.07.18
                </S.EventBoxDate>
                <S.EventBoxDate marginValue="20.2rem" {...scrollhorizontalAnimation[5]}>
                  2021.03.02
                </S.EventBoxDate>
                <S.EventBoxDate marginValue="17.7rem" {...scrollhorizontalAnimation[7]}>
                  2021.08.17
                </S.EventBoxDate>

                <S.EventBoxDate marginValue="11.5rem" {...scrollhorizontalAnimation[11]}>
                  2021.12.02
                </S.EventBoxDate>
                <S.EventBoxDate marginValue="10rem" {...scrollhorizontalAnimation[13]}>
                  2021.12.31
                </S.EventBoxDate>
                <S.EventBoxDate marginValue="16.3rem" {...scrollhorizontalAnimation[15]}>
                  2022.06
                </S.EventBoxDate>
                <S.EventBoxDate marginValue="9.7rem" {...scrollhorizontalAnimation[17]}>
                  2022.07.21
                </S.EventBoxDate>

                <S.EventBoxDate marginValue="15.3rem" {...scrollhorizontalAnimation[21]}>
                  2022.12
                </S.EventBoxDate>
                <S.EventBoxDate marginValue="10rem" {...scrollhorizontalAnimation[23]}>
                  2023.01
                </S.EventBoxDate>
                <S.EventBoxDate marginValue="15.2rem" {...scrollhorizontalAnimation[24]}>
                  2023.03
                </S.EventBoxDate>
                <S.EventBoxDate marginValue="24.2rem" {...scrollhorizontalAnimation[26]}>
                  2023.09
                </S.EventBoxDate>
              </S.EventBoxDateContainer>
            </S.growupPre>
          </S.IntroduceContainer>
        </S.IntroduceDataSection>
        <S.IntroduceDataSection blurBoolean={blur} id="info">
          <S.IntroduceContent>정보</S.IntroduceContent>
          <S.IntroduceContainer widthBool={true}>
            <S.InfoContainer>
              <S.UseTip>눌러서 확인해보세요!</S.UseTip>
              <S.TopMenu>
                <S.InfoGithub ClickBool={clicked} onClick={onClicked}>
                  <S.InfoName ClickBool={clicked}>github</S.InfoName>
                </S.InfoGithub>
                <S.InfoMail ClickBool={clicked2} onClick={onClicked2}>
                  <S.InfoName2 ClickBool={clicked2}>메일</S.InfoName2>
                </S.InfoMail>
              </S.TopMenu>
              <S.BottomMenu>
                {clicked ? (
                  <>
                    <S.EmailTip>클릭해서 이동</S.EmailTip>
                    <S.GithubScreen href="https://github.com/alpha0212" target="_blank">
                      <img style={{ width: "100%" }} alt="my github" src="https://i.ibb.co/TwcVy3M/image.png" />
                    </S.GithubScreen>
                  </>
                ) : (
                  <></>
                )}
                {clicked2 ? (
                  <>
                    <S.EmailTip>클릭해서 복사</S.EmailTip>
                    <S.EmailClipBoard onClick={() => handleCopyClipBoard('qkrwnsgml312@gmail.com')}>
                      <S.Email>qkrwnsgml312@gmail.com</S.Email>
                    </S.EmailClipBoard>
                  </>
                ) : (
                  <></>
                )}
              </S.BottomMenu>
            </S.InfoContainer>
          </S.IntroduceContainer>
        </S.IntroduceDataSection>
      </S.IntroducePageSection>
    </S.IntroduceWrapper>
  );
};
