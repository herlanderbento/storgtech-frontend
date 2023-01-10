import styled from 'styled-components'

export const OurServicesContainer = styled.section`
  padding: 60px 15px 40px;

  width: 100%;
  max-height: 100vh;

  .mb__40 {
    margin-bottom: 30px !important;
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
    line-height: 28px;
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
    padding: 25px 30px 30px;
    border-radius: 5px;
    border-color: #e6e9ef;

    h3 {
      font-size: 1.125rem;
      font-weight: 500;
      margin: 1rem 0;

      color: ${(props) => props.theme['blue-700']};
    }

    p {
      font-size: 0.875rem;
    }
  }
`
