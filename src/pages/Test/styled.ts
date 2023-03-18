import styled from '@emotion/styled';
import Slider from 'react-slick';
export const TestCode = styled(Slider)`
  .slider {
    margin: 20px auto;
    text-align: center;
  }
  .slider div {
    margin-right: 5px;
  }

  .slick-slide {
    width: 300px;
    height: 100px;
    opacity: 0.6;
    width: 20px;
    background: red;
    margin-left: 20px;
  }

  .slick-center {
    width: 600px;
    height: 100px;
    display: block;
    max-width: 10% !important;
    max-height: 20% !important;
    opacity: 1;
  }

  .slick-current {
    width: 600px;
    height: 100px;
  }
`;
