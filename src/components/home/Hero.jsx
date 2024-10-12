import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { bannerData } from "../../data/data";
import { Container } from "../../styles/styles";
import { BaseLinkWhite } from "../../styles/button";
import { breakpoints, defaultTheme } from "../../styles/themes/default";
import CustomNextArrow from "../common/CustomNextArrow";
import CustomPrevArrow from "../common/CustomPrevArrow";
import '../../styles/hero.css'

import shapeImg from "../../assets/img/shape/shape-03.png"
import shapeImgTwo from "../../assets/img/shape/shape-01.png";
import shapeImgThere from "../../assets/img/shape/shape-02.png";
import shapeImgFour from "../../assets/img/shape/slider-shape-6.png";
import shapeImgFive from "../../assets/img/shape/shape-04.png";
import sliderCardImgOne from "../../assets/img/shape/slider-card-1.webp";
import sliderCardImgTwo from "../../assets/img/shape/slider-card-2.webp";
import sliderCardImgThere from "../../assets/img/shape/slider-card-3.webp";
import sliderCardImgFour from "../../assets/img/shape/slider-card-4.webp";

const SectionHeroWrapper = styled.section`
    margin-bottom: 20px;
`;

const HeroSliderWrapper = styled.div`
  .custom-prev-arrow {
    left: 30px !important;
    background-color: ${defaultTheme.color_white};
    svg {
      color: ${defaultTheme.color_outerspace};
    }

    @media (max-width: ${breakpoints.md}) {
      left: 16px !important;
    }
  }

  .custom-next-arrow {
    right: 30px !important;
    background-color: ${defaultTheme.color_white};
    svg {
      color: ${defaultTheme.color_outerspace};
    }

    @media (max-width: ${breakpoints.md}) {
      right: 16px !important;
    }
  }
`;

const HeroSliderItemWrapper = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${defaultTheme.color_black_04};
  }

  img {
    display: block;
  }
`;

const HeroSlideContent = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1100px;
  z-index: 10;

  .btn {
    height: 42px;
    min-width: 120px;
    margin-top: 20px;
    @media (max-width: ${breakpoints.md}) {
      margin-top: 12px;
    }
  }

  .container {
    max-width: 840px;
    margin-left: 0;

    @media (max-width: ${breakpoints.xxl}) {
      margin-left: 80px;
    }
    @media (max-width: ${breakpoints.md}) {
      margin-left: 16px;
      margin-right: 16px;
    }
    @media (max-width: ${breakpoints.sm}) {
      margin: 0;
      text-align: center;
    }
  }

  .hero-text-top {
    font-size: 32px;

    @media (max-width: ${breakpoints.lg}) {
      font-size: 26px;
    }
  }

  .hero-text-large {
    font-size: 68px;
    letter-spacing: 0.315px;
    line-height: 1.2;
    margin-bottom: 20px;

    @media (max-width: ${breakpoints.lg}) {
      font-size: 60px;
    }
    @media (max-width: ${breakpoints.lg}) {
      font-size: 48px;
    }
    @media (max-width: ${breakpoints.lg}) {
      font-size: 36px;
    }
    @media (max-width: ${breakpoints.lg}) {
      font-size: 32px;
    }
  }

  .hero-text-bottom {
    font-size: 26px;
    margin-bottom: 24px;

    @media (max-width: ${breakpoints.lg}) {
      font-size: 20px;
    }
  }

  .hero-btn {
    font-size: 18px;
    height: 46px;
    min-width: 160px;
  }
`;

const Hero = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <SectionHeroWrapper >
      <HeroSliderWrapper >
        <img className="shape-3 d-none d-xxl-block" src={shapeImg} style={{ width: 'auto', height: 'auto' }} alt="img not found" />
        <div className="col-xl-6 col-lg-6 col-md-6 animateHero" >
          <div className="hero-right position-relative">
            <img data-depth="0.2" className="shape shape-1" src={shapeImgTwo} style={{ width: 'auto', height: 'auto' }} alt="shape" />
            <img data-depth="0.2" className="shape-2" src={shapeImgThere} style={{ width: 'auto', height: 'auto' }} alt="shape" />
            <img data-depth="0.2" className="shape-6" src={shapeImgFour} style={{ width: 'auto', height: 'auto' }} alt="shape" />
            <div className="shape-4">
              <img className="" src={shapeImgFive} style={{ width: 'auto', height: 'auto' }} alt="shape" />
              <h5 className="hero-shape-text">Top Rated Instructors</h5>
            </div>
            <div className="shape-5">
              <div className="course-card">
                <img src={sliderCardImgOne} style={{ width: 'auto', height: 'auto' }} alt="img not found" />
                <img src={sliderCardImgTwo} style={{ width: 'auto', height: 'auto' }} alt="img not found" />
                <img src={sliderCardImgThere} style={{ width: 'auto', height: 'auto' }} alt="img not found" />
                <img src={sliderCardImgFour} style={{ width: 'auto', height: 'auto' }} alt="img not found" />
                <span>
                  <i className="far fa-plus"></i>
                </span>
              </div>
              <h5>
                More than <span>21,500+</span> students enrolled around the
                world
              </h5>
            </div>
          </div>
        </div>
        <Slider
          nextArrow={<CustomNextArrow />}
          prevArrow={<CustomPrevArrow />}
          {...settings}
        >
          {bannerData?.map((banner) => {
            return (
              <HeroSliderItemWrapper key={banner.id}>
                <img src={banner.imgSource} className="object-fit-cover" />
                <HeroSlideContent className="flex items-center w-full h-full">
                  <Container className="container text-white">
                    <p className="hero-text-top font-bold italic">
                      {banner.topText}
                    </p>
                    <h2 className="hero-text-large font-extrabold">
                      {banner.titleText}
                    </h2>
                    <p className="hero-text-bottom font-semibold uppercase">
                      {banner.bottomText}
                    </p>
                    <BaseLinkWhite to={banner.buttonLink} className="hero-btn">
                      {banner.buttonText}
                    </BaseLinkWhite>
                  </Container>
                </HeroSlideContent>


              </HeroSliderItemWrapper>
            );
          })}
        </Slider>

      

      </HeroSliderWrapper>
      
    </SectionHeroWrapper>
  );
};

export default Hero;
