import React, { SyntheticEvent, useEffect, useState } from 'react';

import * as S from './styled';

export const MainPage: React.FC = () => {
  const [introduce, setIntroduce] = useState(false);
  const [project, setProject] = useState(false);
  const [anyClick, setAnyClick] = useState(false);
  const SelectOnClick = (event: SyntheticEvent) => {
    setAnyClick(true);
    if (event.currentTarget.innerHTML.includes('프로젝트')) {
      setProject(true);
      setIntroduce(false);
    } else {
      setProject(false);
      setIntroduce(true);
    }
  };

  return (
    <S.MainWrapper anyClick={anyClick}>
      <S.LeftSection introduce={introduce} project={project} onClick={SelectOnClick}>
        <S.LeftTitle introduce={introduce} project={project} clicked={anyClick}>
          소개
        </S.LeftTitle>
      </S.LeftSection>
      <S.RightSection introduce={introduce} project={project} onClick={SelectOnClick}>
        {anyClick ? (
          <></>
        ) : (
          <S.RightTitle introduce={introduce} project={project} clicked={anyClick}>
            프로젝트
          </S.RightTitle>
        )}
        {project ? (
          ['프로젝트', 1, 2, 3, 4, 5].map((val: string | number, idx: number) => (
            <S.ProjectDataSection key={idx}>
              <S.ProjectDate>{val}</S.ProjectDate>
              <S.ProjectContainer></S.ProjectContainer>
            </S.ProjectDataSection>
          ))
        ) : (
          <></>
        )}
      </S.RightSection>
    </S.MainWrapper>
  );
};
