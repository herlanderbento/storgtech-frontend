import styled from 'styled-components'

export const ContactsSection = styled.section`
  background-color: ${(props) => props.theme['white-default']};
  padding: 80px 15px;

  margin-bottom: 4rem;

  .contacts__section__items {
    background-color: ${(props) => props.theme['blue-700']};

    padding: 1rem;
    height: 80vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
  }

  .contacts__title {
    padding: 2.5rem 0 0.75rem 0;

    font-size: 1.25rem;
    font-weight: 700;

    color: ${(props) => props.theme['white-default']};
  }

  .contacts__subtitle {
    font-size: 2.5rem;
    font-family: 'Mochiy Pop One';
    font-weight: 400;
    line-height: 58px;

    color: ${(props) => props.theme['white-default']};
  }

  .contacts__description {
    color: ${(props) => props.theme['white-default']};
    opacity: 0.6;
  }

  .contacts__header {
    text-align: center;

    padding: 3.75rem 0;
  }

  .form__contacts {
    background-color: ${(props) => props.theme['white-default']};
    padding: 1.875rem;

    box-shadow: 0px 50px 50px -30px rgb(148 165 143 / 27%);

    .form-control {
      border-radius: 0;
      padding: 1.25rem;

      background-color: ${(props) => props.theme['white-500']};
      color: ${(props) => props.theme['gray-500']};

      font-size: 1rem;

      &::placeholder {
        color: ${(props) => props.theme['gray-500']} !important;
      }

      &:focus {
        box-shadow: none;
      }
    }

    .form-group:not(:last-child) {
      padding-bottom: 1.25rem;
    }

    .btn__send__message {
      padding: 1rem 2.75rem;
    }
  }
`
