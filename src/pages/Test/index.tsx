import React from 'react';

import * as S from './styled';
import Slider from 'react-slick';

// Import Swiper styles

export const Test: React.FC = () => {
  const settings = {
    className: 'center',
    focusOnSelect: true,
    arrows: false,
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <S.Container>
      <S.Slide>
        <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val, idx) => {
            return (
              <S.SliderComp key={idx}>
                <S.ProjectContainer className="project">{val}</S.ProjectContainer>
              </S.SliderComp>
            );
          })}
        </Slider>
      </S.Slide>
    </S.Container>
  );
};
