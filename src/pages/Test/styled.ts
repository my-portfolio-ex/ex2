import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const styles = css`
  span {
    position: sticky;
    top: calc(50% - 50px);
    height: 100px;
    display: inline-flex;
    align-items: center;
    margin-left: 2px;
    margin-right: 2px;
    font-size: 120px;
  }
`;

export const testContainer = styled.main`
  scroll-behavior: smooth;
`;

export const innerWrapper = styled.section`
  overflow-x: hidden;
`;

export const codepen = styled.div<{ flexDirectionSet: string }>`
  display: flex;
  flex-direction: ${(props) => props.flexDirectionSet};
  font-size: 60px;
  align-items: flex-start;
  color: #000;
  justify-content: center;
  margin: auto;
`;

export const c = styled.span<{ marginTopValue: string }>`
  margin-top: ${(props) => props.marginTopValue};
`;
