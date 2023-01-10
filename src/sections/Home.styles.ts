import styled from 'styled-components'

export const HomeSection = styled.section`
  width: 100%;
  height: 100vh;

  padding-top: 12rem;

  background-color: ${(props) => props.theme['white-default']};

  align-items: flex-start !important;

  .home__section__left,
  .home__section__right {
    position: relative;
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
  }
`
