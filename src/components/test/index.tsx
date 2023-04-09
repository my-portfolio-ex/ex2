import styled from '@emotion/styled';
import * as React from 'react';

interface ILazyImage {
  src: string;
  alt: string;
}

const Lazy: React.FC<ILazyImage> = ({ src, alt }): JSX.Element => {
  // state
  const [isLoading, setIsLoading] = React.useState<boolean>(false); // 실제 화면에 보여지고 있는지 여부를 확인

  // ref
  const imgRef = React.useRef<HTMLImageElement>(null); // 이미지 태그 요소
  const observer = React.useRef<IntersectionObserver>(); // IntersectionObserver 변수

  // useEffect
  React.useEffect(() => {
    observer.current = new IntersectionObserver(intersectionOberserver); // 인스턴스 생성
    imgRef.current && observer.current.observe(imgRef.current); // 이미지 태그 관찰 시작
  }, []);

  // IntersectionObserver 설정
  const intersectionOberserver = (
    entries: IntersectionObserverEntry[],
    io: IntersectionObserver
  ) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 관찰되고 있는 entry가 보여지게 된 다면
        io.unobserve(entry.target); // 관찰 종료
        setIsLoading(true); // 로딩 체크
      }
    });
  };
  /*
  <Loader>
        <SvgLoader height="50" width="50" viewBox="0 0 100 100">
          <BG cx="50" cy="50" r="45"></BG>
          <SvgAnimated cx="50" cy="50" r="45"></SvgAnimated>
        </SvgLoader>
      </Loader>
      */
  return (
    // 화면에 보여지기 전이라면 NoImage, 화면에 보여지고 있다면 src에 해당하는 이미지
    <img
      alt={alt}
      ref={imgRef}
      src={isLoading ? src : ''}
      style={{ width: '100%', height: '100%', borderRadius: '10px' }}
    />
  );
};

export const Loader = styled.div`
  display: flex;
  position: relative;
  align-content: space-around;
  justify-content: center;
`;
export const SvgLoader = styled.svg`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  fill: none;
  stroke-width: 5px;
  stroke-linecap: round;
  stroke: rgb(64, 0, 148);
`;
export const BG = styled.circle`
  stroke-width: 8px;
  stroke: rgb(207, 205, 245);
`;
export const SvgAnimated = styled.circle`
  stroke-dasharray: 242.6;
  animation: fill-animation 1s cubic-bezier(1, 1, 1, 1) 0s infinite;
  @keyframes fill-animation {
    0% {
      stroke-dasharray: 40 242.6;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 141.3;
      stroke-dashoffset: 141.3;
    }
    100% {
      stroke-dasharray: 40 242.6;
      stroke-dashoffset: 282.6;
    }
  }
`;
export default Lazy;
