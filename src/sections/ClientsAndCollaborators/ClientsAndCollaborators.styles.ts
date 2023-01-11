import styled from 'styled-components'

export const ClientesAndCollaboratorsSection = styled.section`
  padding: 20px 15px 60px;

  height: 65vh;

  @media screen and (min-width: 1440px) {
    padding-bottom: 90px;
    height: 74vh;
  }

  .clients__and__collaborators__header {
    padding-top: 1rem;
  }

  .clients__and__collaborators__title {
    padding-top: 2.5rem;

    font-size: 1.25rem;
    font-weight: 700;

    color: ${(props) => props.theme['green-500']};
  }

  .clients__and__collaborators__subtitle {
    font-size: 2.5rem;
    font-family: 'Mochiy Pop One';
    font-weight: 400;
    line-height: 58px;

    color: ${(props) => props.theme['dark-default']};
  }

  .mt__40 {
    margin-top: 40px;
  }

  .clients__and__collaborators__items {
    position: relative;
  }

  .slick-track {
    display: flex;
    gap: 1rem;
  }
`
