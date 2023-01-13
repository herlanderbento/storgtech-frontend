import styled from 'styled-components'

export const NewsLetterSection = styled.section`
  padding: 70px 15px 80px;
  background-color: ${(props) => props.theme['white-500']};
`

export const InputCard = styled.div`
  display: flex;
  background-color: ${(props) => props.theme['white-default']};

  padding: 0.75rem;

  box-shadow: 0 0.375rem 1.5rem 0 rgb(140 152 164 / 13%);
  border-radius: 0.5rem;

  .input-card-form {
    position: relative;
  }

  .input-group {
    margin-right: 1rem;
  }
  .form-control,
  .input-group-prepend {
    border: 0;
    background: transparent;

    svg {
      color: var(--text);
    }
  }

  .input-group-prepend {
    margin-left: 5px;
  }

  .form-control {
    box-shadow: none;
    outline: none;
    padding: 0.75rem 5px;
    color: ${(props) => props.theme['gray-500']};
    font-size: 1rem;

    &::placeholder {
      font-size: 1rem;
      color: ${(props) => props.theme['gray-500']};
    }

    &:focus {
      outline: none !important;
      box-shadow: none !important;
    }
  }

  button {
    padding: 0.75rem;
    font-size: 1rem;
    flex: 0 0 22%;
    text-align: center;

    svg {
      display: none;
    }

    @media (max-width: 647px) {
      span {
        display: none;
      }

      svg {
        display: block;
      }
    }
  }
`
