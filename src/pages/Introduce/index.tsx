import React from 'react';
import * as S from './styled';

import { useScrollFadeIn } from '@/hooks';

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
  };

  const introAnimation = {
    0: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.5),
    1: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.7),
  };

  return (
    <S.IntroduceWrapper>
      <S.IntroducePageSection>
        <S.IntroduceDataSection>
          <S.IntroduceContainer widthBool={true}>
            <S.IntroduceIntro>
              <S.IntroduceIntroName {...introAnimation[0]}>박준희</S.IntroduceIntroName>
              <S.IntroduceIntroTitle {...introAnimation[1]}>자기소개</S.IntroduceIntroTitle>
            </S.IntroduceIntro>
          </S.IntroduceContainer>
        </S.IntroduceDataSection>
        <S.IntroduceDataSection>
          <S.IntroduceContent>간단소개</S.IntroduceContent>
          <S.IntroduceContainer widthBool={true}>
            <S.simpleContainer>
              <S.simpleTextContainer>
                <S.simpleIntroduceTitle>이름:</S.simpleIntroduceTitle>
                <S.simpleIntroduce> 박준희</S.simpleIntroduce>
              </S.simpleTextContainer>
              <S.simpleTextContainer>
                <S.simpleIntroduceTitle>성별:</S.simpleIntroduceTitle>
                <S.simpleIntroduce> 남자</S.simpleIntroduce>
              </S.simpleTextContainer>
              <S.simpleTextContainer>
                <S.simpleIntroduceTitle>생년월일:</S.simpleIntroduceTitle>
                <S.simpleIntroduce> 2005. 02. 12</S.simpleIntroduce>
              </S.simpleTextContainer>
              <S.simpleTextContainer>
                <S.simpleIntroduceTitle>한 줄 소개:</S.simpleIntroduceTitle>
                <S.simpleIntroduce>
                  아이디어를 창출하여 소통하고 사용자 경험을 우선으로 하는 개발자
                </S.simpleIntroduce>
              </S.simpleTextContainer>
            </S.simpleContainer>
          </S.IntroduceContainer>
        </S.IntroduceDataSection>
        <S.IntroduceDataSection>
          <S.IntroduceContent>장단점</S.IntroduceContent>
          <S.IntroduceContainer widthBool={true}></S.IntroduceContainer>
        </S.IntroduceDataSection>
        <S.IntroduceDataSection>
          <S.IntroduceContent>성장과정</S.IntroduceContent>
          <S.IntroduceContainer widthBool={true}>
            <S.SeeTip>프로젝트는 눌러서 개발중 또는 완성된 결과를 보실 수 있습니다🙂</S.SeeTip>
            <S.growupPre>
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
                <S.EventBox marginValue="10rem" {...scrollhorizontalAnimation[6]}>
                  <S.EventBoxText>네트워크 관리사 2급 취득</S.EventBoxText>
                </S.EventBox>
                <S.EventBox marginValue="7rem" {...scrollhorizontalAnimation[8]}>
                  <S.EventBoxText>skyplanner 프로젝트 시작</S.EventBoxText>
                </S.EventBox>
                <S.EventBox marginValue="2rem" {...scrollhorizontalAnimation[10]}>
                  <S.EventBoxText>ITQ엑셀 A등급 취득</S.EventBoxText>
                </S.EventBox>
                <S.EventBox marginValue="2rem" {...scrollhorizontalAnimation[12]}>
                  <S.EventBoxText>리눅스마스터 2급 취득</S.EventBoxText>
                </S.EventBox>
                <S.EventBox marginValue="20rem" {...scrollhorizontalAnimation[14]}>
                  <S.EventBoxText>LawLearn 프로젝트 시작</S.EventBoxText>
                </S.EventBox>
                <S.EventBox marginValue="1rem" {...scrollhorizontalAnimation[16]}>
                  <S.EventBoxText>교내해커톤 1위수상</S.EventBoxText>
                </S.EventBox>
                <S.EventBox marginValue="1rem" {...scrollhorizontalAnimation[18]}>
                  <S.EventBoxText>skyplanner 완성</S.EventBoxText>
                </S.EventBox>
                <S.EventBox marginValue="6.8rem" {...scrollhorizontalAnimation[20]}>
                  <S.EventBoxText>LawLearn 완성 및 배포 || Langtudy 프로젝트 시작</S.EventBoxText>
                </S.EventBox>
                <S.EventBox marginValue="4rem" {...scrollhorizontalAnimation[22]}>
                  <S.EventBoxText>GreenCash 프로젝트 시작</S.EventBoxText>
                </S.EventBox>
              </S.EventBoxContainer>
              <S.horizontalLine>
                <S.horizontalPoint />
                <S.horizontalPoint style={{ left: '8.5%' }} />
                <S.horizontalPoint style={{ left: '18.6%' }} />
                <S.horizontalPoint style={{ left: '27%' }} />
                <S.horizontalPoint style={{ left: '35.4%' }} />
                <S.horizontalPoint style={{ left: '41.3%' }} />
                <S.horizontalPoint style={{ left: '46.9%' }} />
                <S.horizontalPoint style={{ left: '60.2%' }} />
                <S.horizontalPoint style={{ left: '65.6%' }} />
                <S.horizontalPoint style={{ left: '70.1%' }} />
                <S.horizontalPoint style={{ left: '77.5%' }} />
                <S.horizontalPoint style={{ left: '82.7%' }} />
                <S.horizontalPoint style={{ left: '90.1%' }} />
              </S.horizontalLine>
              <S.EventBoxDateContainer>
                <S.EventBoxDate marginValue="" {...scrollhorizontalAnimation[2]}>
                  2019.03.14
                </S.EventBoxDate>
                <S.EventBoxDate marginValue="11.3rem" {...scrollhorizontalAnimation[3]}>
                  2019.07.18
                </S.EventBoxDate>
                <S.EventBoxDate marginValue="20.8rem" {...scrollhorizontalAnimation[5]}>
                  2021.03.02
                </S.EventBoxDate>
                <S.EventBoxDate marginValue="16.3rem" {...scrollhorizontalAnimation[7]}>
                  2021.08.17
                </S.EventBoxDate>
                <S.EventBoxDate marginValue="17.2rem" {...scrollhorizontalAnimation[9]}>
                  2021.12
                </S.EventBoxDate>
                <S.EventBoxDate marginValue="11rem" {...scrollhorizontalAnimation[11]}>
                  2021.12.02
                </S.EventBoxDate>
                <S.EventBoxDate marginValue="9.6rem" {...scrollhorizontalAnimation[13]}>
                  2021.12.31
                </S.EventBoxDate>
                <S.EventBoxDate marginValue="29rem" {...scrollhorizontalAnimation[15]}>
                  2022.06
                </S.EventBoxDate>
                <S.EventBoxDate marginValue="9.5rem" {...scrollhorizontalAnimation[17]}>
                  2022.07.21
                </S.EventBoxDate>
                <S.EventBoxDate marginValue="7.4rem" {...scrollhorizontalAnimation[19]}>
                  2022.08
                </S.EventBoxDate>
                <S.EventBoxDate marginValue="15rem" {...scrollhorizontalAnimation[21]}>
                  2022.12
                </S.EventBoxDate>
                <S.EventBoxDate marginValue="9.7rem" {...scrollhorizontalAnimation[23]}>
                  2023.01
                </S.EventBoxDate>
                <S.EventBoxDate marginValue="15rem" {...scrollhorizontalAnimation[24]}>
                  2023.03
                </S.EventBoxDate>
              </S.EventBoxDateContainer>
            </S.growupPre>
          </S.IntroduceContainer>
        </S.IntroduceDataSection>
        <S.IntroduceDataSection>
          <S.IntroduceContent>경험</S.IntroduceContent>
          <S.IntroduceContainer widthBool={true}></S.IntroduceContainer>
        </S.IntroduceDataSection>
        <S.IntroduceDataSection>
          <S.IntroduceContent>기술</S.IntroduceContent>
          <S.IntroduceContainer widthBool={true}></S.IntroduceContainer>
        </S.IntroduceDataSection>
        <S.IntroduceDataSection>
          <S.IntroduceContent>연락처</S.IntroduceContent>
          <S.IntroduceContainer widthBool={true}></S.IntroduceContainer>
        </S.IntroduceDataSection>
      </S.IntroducePageSection>
    </S.IntroduceWrapper>
  );
};
