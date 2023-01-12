import styled from 'styled-components'

import { AccordionItem, UncontrolledAccordion } from 'reactstrap'

export const FAQSection = styled.section`
  padding: 80px 15px;

  height: 100vh;

  .faq__header {
  }

  .faq__title {
    padding-top: 2.5rem;

    font-size: 1.25rem;
    font-weight: 700;

    color: ${(props) => props.theme['green-500']};
  }

  .faq__subtitle {
    font-size: 2.5rem;
    font-family: 'Mochiy Pop One';
    font-weight: 400;
    line-height: 58px;

    color: ${(props) => props.theme['dark-default']};
  }

  .pt__70 {
    padding-top: 70px;
  }
`

export const UncontrolledAccordionCustom = styled(UncontrolledAccordion)`
  border: 0 !important;
`

export const AccordionItemCustom = styled(AccordionItem)`
  border: 0 !important;
  border-radius: 0;

  &.active {
    background-color: transparent !important;
  }

  .accordion-button:not(.collapsed) {
    color: ${(pros) => pros.theme['green-500']} !important;
    background-color: transparent !important;
    box-shadow: none !important;
  }

  .accordion-button {
    border: 0 !important;
    font-family: 'Mochiy Pop One', sans-serif !important;
    font-style: normal !important;
    font-weight: 400 !important;
  }

  &:first-of-type .accordion-button {
    border-radius: 0 !important;
  }
`
