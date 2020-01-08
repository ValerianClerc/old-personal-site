import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Sticky = styled.div`
    position: fixed;
    top: 20%;
    width: 100%;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 4rem;
  padding: 0 4rem;
  margin: 2rem 0;

  ${MEDIA.TABLET`
    display: block;
  `};
`;



export const Text = styled.div`
`