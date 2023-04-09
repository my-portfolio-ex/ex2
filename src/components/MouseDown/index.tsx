import React from 'react';
import * as S from './styled';

export const MouseDown: React.FC = () => {
  return (
    <>
      <S.ScrollDown>
        <S.Chevrons>
          <S.ChevronDown></S.ChevronDown>
          <S.ChevronDown></S.ChevronDown>
        </S.Chevrons>
      </S.ScrollDown>
      <h4 style={{ fontSize: '10px', marginTop: '50px' }}>천천히 스크롤</h4>
    </>
  );
};
