import React from 'react';
import styled from 'styled-components';
import Vaga from './Vaga';

const ListaVagasContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ListaVagas = () => (
  <ListaVagasContainer>
    <Vaga titulo="Vaga 1" link="#"/>
    <Vaga titulo="Vaga 2" link="#"/>
    <Vaga titulo="Vaga 3" link="#"/>
  </ListaVagasContainer>
);

export default ListaVagas;
