import styled from 'styled-components'

export const ProjectsSection = styled.section`
  margin-top: 4rem;
  padding: 40px 15px 30px;

  width: 100%;
  min-height: 120vh;
  background-color: ${(props) => props.theme['blue-700']};

  /* background: url(/images/icons/background-about-us.png) no-repeat; */

  /* 
  @media screen and (min-width: 1280px) {
    height: 100vh;
  } */

  .mt__20 {
    margin-top: 60px;
  }

  .projects__section__left,
  .projects__section__right {
    padding: 1rem;
    z-index: 200;
  }

  .projects__title {
    padding-top: 4.75rem;

    font-size: 1.25rem;
    font-weight: 700;

    color: ${(props) => props.theme['green-500']};
  }

  .projects__subtitle {
    font-size: 2.6rem;
    font-family: 'Mochiy Pop One';
    font-weight: 400;
    line-height: 58px;

    color: ${(props) => props.theme['white-default']};
  }

  .projects__description {
    font-weight: 400;
    font-size: 1rem;
    line-height: 28px;

    padding-top: 4.75rem;

    color: ${(props) => props.theme['gray-400']};
  }

  .slick-track {
    display: flex;
    gap: 1rem;
  }

  .slick-slide:nth-child(2n) {
    padding-top: 3.125rem !important;
  }

  .project__content__items {
    width: 267px;
    height: 307px;
  }

  .project__content__items__imghvr {
    border-radius: 0.36rem;
  }

  .imghvr,
  .imghvr-reveal-right {
    cursor: pointer;
    &::before {
      background-color: rgb(43, 208, 201, 0.5) !important;
    }
    figcaption {
      background-color: rgb(43, 208, 201, 0.5) !important;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .project__title {
        font-size: 1.5rem;
      }

      .project__description {
        font-style: normal !important;
      }
    }
  }
`
