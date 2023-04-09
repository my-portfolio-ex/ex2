import React from 'react';
import * as S from '../prosCons/styled';

interface PropsAndConsData {
  text: string;
  textDescription: string;
}

export const PropsConsComponent: React.FC<PropsAndConsData> = ({ text, textDescription }) => {
  return (
    <S.PropsConsElement>
      <S.ElementTitle>{text}</S.ElementTitle>
      <S.ElementDescContainer>
        <S.ElementDesc>{textDescription}</S.ElementDesc>
      </S.ElementDescContainer>
    </S.PropsConsElement>
  );
};
