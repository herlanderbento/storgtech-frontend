import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: '#2BD0C9',
  secondary: '#263C57',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  padding: 0.625rem 1rem;

  border: 0;
  border-radius: 0.25rem;

  ${(props) => {
    return `background-color: ${buttonVariants[props.variant]};   color: ${
      props.theme['white-default']
    }
      `
  }};
`
