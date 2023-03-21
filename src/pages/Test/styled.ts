import styled from '@emotion/styled';

export const Container = styled.div`
  width: 90%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  text-align: center;
  .center .slick-center .project {
    transform: scale(1.3);
    z-index: 10000;
  }
`;

export const h1 = styled.h1`
  font-size: 1.9rem;
`;
export const p = styled.p`
  width: 28rem;
  margin: 0 auto;
  padding: 1rem 0;
  font-size: 0.9rem;
`;

export const green = styled.span`
  color: green;
  margin: 0 10px 0 10px;
`;

export const Slide = styled.div``;

//components
export const SliderComp = styled.div``;

export const ProjectContainer = styled.div`
  width: 270px;
  height: 270px;
  background: #ffffff;
  margin: auto;
  padding: 0 0.5rem;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
`;
