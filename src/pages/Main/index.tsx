import React, { SyntheticEvent, useEffect, useState } from 'react';

import * as S from './styled';
import { useScrollFadeIn } from '@/hooks';
import { useNavigate } from 'react-router';

export const MainPage: React.FC = () => {
  const [introduce, setIntroduce] = useState(false);
  const [project, setProject] = useState(false);
  const [anyClick, setAnyClick] = useState(false);
  const scrollAnimated = {
    0: useScrollFadeIn<HTMLHeadingElement>('down', 1, 0.2),
    1: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0.2),
    2: useScrollFadeIn<HTMLHeadingElement>('up', 1.4, 1.5),
  };
  const navigate = useNavigate();
  const SelectOnClick = (event: SyntheticEvent) => {
    setAnyClick(true);
    if (event.currentTarget.innerHTML.includes('프로젝트')) {
      setProject(true);
      setTimeout(() => {
        navigate('/project');
      }, 500);
      setIntroduce(false);
    } else {
      setProject(false);
      setIntroduce(true);
    }
  };

  return (
    <S.MainWrapper anyClick={anyClick}>
      <S.LeftSection
        introduce={introduce}
        project={project}
        onClick={introduce ? () => console.log(false) : SelectOnClick}
      >
        <S.LeftTitle
          {...scrollAnimated[1]}
          introduce={introduce}
          project={project}
          clicked={anyClick}
        >
          소개
        </S.LeftTitle>
      </S.LeftSection>
      <S.RightSection
        introduce={introduce}
        project={project}
        onClick={project ? () => console.log(false) : SelectOnClick}
      >
        {anyClick ? (
          <></>
        ) : (
          <S.RightTitle
            {...scrollAnimated[0]}
            introduce={introduce}
            project={project}
            clicked={anyClick}
          >
            프로젝트
          </S.RightTitle>
        )}
        {project ? <></> : <></>}
      </S.RightSection>
    </S.MainWrapper>
  );
};
