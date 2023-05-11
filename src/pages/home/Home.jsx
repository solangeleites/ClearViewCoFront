import React from 'react';
import Header from '../../components/header/Header';
import {
  Container,
  Section,
  Title,
  ContainerLinks,
  LinkItem,
} from './HomeStyled';
import { Outlet } from 'react-router-dom';
import Categorias from '../../components/categorias/Categorias'
import Garantias from '../../components/garantias/Garantias';
import Newsletter from '../../components/newsletter/Newsletter';

const Home = () => {
  return (
    <>
      <Header />
      <Section>
        <Title>LOS MAS VENDIDOS</Title>
        <ContainerLinks>
          <LinkItem to="/">SOL</LinkItem>
          <LinkItem to="recetados">RECETADOS</LinkItem>
        </ContainerLinks>
        <Container>
          <Outlet />
        </Container>
      </Section>

 <Categorias />

<Garantias />

<Newsletter />

    </>
  );
};

export default Home;
