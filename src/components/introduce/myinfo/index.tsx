import React from 'react';

import * as S from './styled';

interface MyInfoProps {
  DataTitle: string;
  DateData: string[];
  Data: string[];
}

interface SkillProps {
  SkillName: string;
  SkillStatus: number;
  SkillImgSrc: string;
  RotateLevel: number;
  borderColor: string;
}

interface Props {
  dataArray: MyInfoProps[];
  skillArray: SkillProps[];
  ImgSrc: string;
}

export const MyInfoComponent: React.FC<Props> = ({ ImgSrc, dataArray, skillArray }) => {
  return (
    <S.MyInfoContainer>
      <S.MyInfoLeftContainer>
        <S.HelloContainer>
          <S.HelloMedium>안녕하세요.</S.HelloMedium>
          <S.HelloPointBold>
            <S.HelloPointBoldText>학습력, 기획력, 창의력</S.HelloPointBoldText>
          </S.HelloPointBold>
          <S.HelloMedium>그리고 열정을 가진 FE 개발자</S.HelloMedium>
          <S.HelloBold>박준희입니다.</S.HelloBold>
        </S.HelloContainer>
        <S.MyInfoImg alt="증명사진" src={ImgSrc} />
        <S.MyInfoButtonContainer>
          <S.MyInfoButton href="https://github.com/alpha0212" target="_blank">
            <S.MyInfoButtonLogo
              alt="github"
              src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
            />
          </S.MyInfoButton>
          <S.MyInfoButton href="/project">
            <S.MyInfoButtonText>프로젝트</S.MyInfoButtonText>
          </S.MyInfoButton>
        </S.MyInfoButtonContainer>
      </S.MyInfoLeftContainer>
      <S.MyInfosContainer>
        {dataArray.map((Info, i) => {
          return (
            <>
              <S.MyInfoTitleContainer
                marginBottomValue={Info.DataTitle === 'SKILLS' ? '30px' : '70px'}
                key={i}
              >
                <S.CirclePoint />
                <S.CirclePointText>{Info.DataTitle}</S.CirclePointText>

                {Info.DataTitle === 'SKILLS' ? <></> : <S.VerticalLine />}

                <S.InfoDateContainer>
                  <S.InfoDateLineContainer>
                    <S.InfoDates>
                      {Info.DateData.map((date, i) => {
                        return <S.InfoDate key={i}>{date}</S.InfoDate>;
                      })}
                    </S.InfoDates>
                    <S.InfoDateTexts>
                      {Info.Data.map((data, i) => {
                        return <S.InfoDateText key={i}>{data}</S.InfoDateText>;
                      })}
                    </S.InfoDateTexts>
                  </S.InfoDateLineContainer>
                </S.InfoDateContainer>
              </S.MyInfoTitleContainer>
              {Info.DataTitle === 'SKILLS' ? (
                <>
                  <S.SkillContainer>
                    {skillArray.map((skill, i) => {
                      return (
                        <S.SkillSort key={i}>
                          <S.SkillCircle
                            borderColor={skill.borderColor}
                            rotateValue={skill.RotateLevel}
                          >
                            <S.SkillingCircle src={skill.SkillImgSrc}></S.SkillingCircle>
                          </S.SkillCircle>
                          <S.SkillName>{skill.SkillName}</S.SkillName>
                        </S.SkillSort>
                      );
                    })}
                  </S.SkillContainer>
                </>
              ) : (
                <></>
              )}
            </>
          );
        })}
      </S.MyInfosContainer>
    </S.MyInfoContainer>
  );
};
