import React from 'react';
import Lazy from '@components/test/index';
import * as S from './styled';
import { styles } from './styled';
import { Global } from '@emotion/react';
export const Test: React.FC = () => {
  return (
    <>
      <Global styles={styles} />
      <S.codepen flexDirectionSet="">
        <S.c marginTopValue="0">C</S.c>
        <S.c marginTopValue="50vw">O</S.c>
        <S.c marginTopValue="150vw">D</S.c>
        <S.c marginTopValue="250vw">E</S.c>
        <S.c marginTopValue="350vw">P</S.c>
        <S.c marginTopValue="450vw">E</S.c>
        <S.c marginTopValue="550vw">N</S.c>
        <S.c marginTopValue="650vw"></S.c>
      </S.codepen>
    </>
  );
};
