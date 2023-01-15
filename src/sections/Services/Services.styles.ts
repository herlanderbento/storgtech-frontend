import styled from 'styled-components'

export const OurServicesContainer = styled.section`
  padding: 60px 15px;

  width: 100%;
  clear: both;

  @media screen and (min-width: 1280px) {
    height: 140vh;
    margin-top: 5.5rem;
  }

  @media screen and (min-width: 1440px) {
    height: 120vh;
  }

  .mb__40 {
    margin-bottom: 20px !important;
  }

  .our__services__section__left,
  .our__services__section__right {
    padding: 1rem;
    z-index: 200;
  }

  .our__services__title {
    padding-top: 4.75rem;

    font-size: 1.25rem;
    font-weight: 700;

    color: ${(props) => props.theme['green-500']};
  }

  .our__services__subtitle {
    font-size: 2.5rem;
    font-family: 'Mochiy Pop One';
    font-weight: 400;
    line-height: 58px;

    color: ${(props) => props.theme['dark-default']};
  }

  .our__services__description {
    font-weight: 400;
    font-size: 1rem;
  }

  .our__services__section__right {
    padding-top: 4.75rem;

    .paragraph__01,
    .paragraph__02 {
      font-size: 0.875rem;
      color: ${(props) => props.theme['dark-default']};
    }
  }

  .our__services__items {
    width: 100%;
    height: 100%;
    position: relative;
    border: 1px solid;
    padding: 25px 30px;
    border-radius: 5px;
    border-color: #e6e9ef;

    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
      font-size: 1.125rem;
      font-weight: 500;
      margin: 1rem 0;

      color: ${(props) => props.theme['blue-700']};
    }

    p {
      font-size: 0.875rem;
      margin: 0;
    }
  }
`
