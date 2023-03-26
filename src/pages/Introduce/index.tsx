import React from 'react';
import * as S from './styled';

export const IntroducePage: React.FC = () => {
  return (
    <S.IntroduceWrapper>
      <S.IntroducePageSection>
        <S.IntroduceDataSection>
          <S.IntroduceContainer widthBool={true}>
            <S.IntroduceIntro>
              <S.IntroduceIntroName>박준희</S.IntroduceIntroName>
              <S.IntroduceIntroTitle>자기소개</S.IntroduceIntroTitle>
            </S.IntroduceIntro>
          </S.IntroduceContainer>
        </S.IntroduceDataSection>
        <S.IntroduceDataSection>
          <S.IntroduceContent>간단소개</S.IntroduceContent>
          <S.IntroduceContainer widthBool={true}></S.IntroduceContainer>
        </S.IntroduceDataSection>
        <S.IntroduceDataSection>
          <S.IntroduceContent>장단점</S.IntroduceContent>
          <S.IntroduceContainer widthBool={true}></S.IntroduceContainer>
        </S.IntroduceDataSection>
        <S.IntroduceDataSection>
          <S.IntroduceContent>성장과정</S.IntroduceContent>
          <S.IntroduceContainer widthBool={true}></S.IntroduceContainer>
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
          <S.IntroduceContent>마무리</S.IntroduceContent>
          <S.IntroduceContainer widthBool={true}></S.IntroduceContainer>
        </S.IntroduceDataSection>
      </S.IntroducePageSection>
    </S.IntroduceWrapper>
  );
};
