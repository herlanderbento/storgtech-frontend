import styled from 'styled-components'

export const TagButtonFilter = styled.button`
  border: 0;
  padding: 0.5rem 1rem;

  background-color: transparent;
  color: ${(props) => props.theme['gray-400']};

  text-transform: capitalize;
  font-weight: 400;

  &.active {
    color: ${(props) => props.theme['white-default']};
    font-weight: 700;
  }
`
