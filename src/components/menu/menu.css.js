import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Sticky = styled.div`
  position: fixed;
  top: 25%;
  border: 2px black solid;
  border-radius: 0 20% 20% 0;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 4rem;
  padding: 0 4rem;
  margin: 3rem 0;

  ${MEDIA.TABLET`
    display: block;
  `};
`;
