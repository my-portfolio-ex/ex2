import React from 'react';

import * as S from './styled';
import Slider from 'react-slick';

// Import Swiper styles

export const Test: React.FC = () => {
  const settings = {
    className: 'center',
    touchMove: true,
    centerMode: true,
    dots: true,
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
      <S.h1>
        Recent<S.green>Projects</S.green>
      </S.h1>
      <S.p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quisquam. Officia facere
        omnis blanditiis voluptas dicta mollitia atque veritatis modi reiciendis aperiam? Omnis
        quae, voluptatibus qui iure dignissimos nulla adipisci?
      </S.p>
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
