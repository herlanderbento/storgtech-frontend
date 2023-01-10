import styled from 'styled-components'

export const HomeSection = styled.section`
  width: 100%;
  height: 140vh;

  padding-top: 12rem;

  background-color: ${(props) => props.theme['white-default']};

  align-items: flex-start !important;

  .home__section__left,
  .home__section__right {
    position: relative;
  }

  .pt__86 {
    padding-top: 5.375rem;
  }

  .home__section__left {
    h1 {
      font-size: 2.875rem;
      font-family: 'Mochiy Pop One', sans-serif;

      color: ${(props) => props.theme['dark-default']};
      line-height: 1.5;

      padding-left: 14rem;

      span {
        color: ${(props) => props.theme['green-500']};
      }
    }

    img {
      position: absolute;
      width: 1000px;
      height: 485px;
      left: -120px;

      object-fit: cover;

      border-radius: 0px 0.75rem 0.75rem 0px;
    }

    .ellipse__btn {
      position: absolute;
      bottom: -10rem;
      left: 30rem;
      display: flex;
      width: 6rem;
      height: 6rem;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 120px;
      border: 0;

      z-index: 10;

      background-color: ${(props) => props.theme['green-500']};
    }
  }

  .home__section__right {
    p {
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 2.5;

      color: ${(props) => props.theme['gray-700']};
    }

    .button__get__in__touch {
      margin-top: 1.375rem;
      padding: 1rem 1.75rem !important;
    }

    &__items {
      margin-left: 4.25rem;
      padding: 1rem 0;

      border-bottom: 1px solid ${(props) => props.theme['gray-100']};

      &:last-child {
        border-bottom: 0;
      }

      h4 {
        font-size: 2.5rem;
        font-family: 'Mochiy Pop One', sans-serif;
        font-weight: 400;

        margin: 0;

        text-transform: lowercase;

        color: ${(props) => props.theme['dark-default']};

        span {
          color: ${(props) => props.theme['green-500']};
          font-size: 1.875rem;
        }
      }

      p {
        font-size: 0.875rem;
        font-weight: 500;

        margin: 0;
      }
    }
  }
`
