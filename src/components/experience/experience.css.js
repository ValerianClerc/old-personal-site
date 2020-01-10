import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 2rem 2rem 4rem;
  margin-right: 10em;
`;

export const Circle = styled.div`
  border-radius: 50%;
  background-color: #000;
  width: 30px;
  height: 30px;
  left: 18%;
  position: absolute;
  margin-left: -15px;
  z-index: 1;
`;

export const Item = styled.div`
  /* left: 47%; */
  /* position: absolute; */
`;

export const Wrapper = styled.div`
  ::before {
    left: 18%;
    margin: auto auto auto -5px;
    content: '';
    position: absolute;
    top: -10px;
    height: 100%;
    width: 10px;
    background: #000;
    z-index: 0;
  }
  position: relative;
  padding: 1em 0;
  margin-top: 2em;
  margin-bottom: 2em;

  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-auto-rows: auto;
  grid-gap: 4rem;
`;
