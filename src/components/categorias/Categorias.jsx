import React from 'react';
import {
  Container,
  Section,
} from './CategoriasStyled';
import CardCat from './CardCat';
import {Categories} from '../../data/Categories.js';


const Categorias = () => {
  return (
    <Section>
      <Container>
 {Categories.map(category => (
  <CardCat  key={category.id} {...category}/>
 ))}
      </Container>
    </Section>
  );
};

export default Categorias;
