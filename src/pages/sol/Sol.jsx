import React from 'react';
import { Outlet } from 'react-router-dom';
import { Card, Image, Description, Price } from './SolStyled';
import SolLMV from '../../components/losMasVendidos/SolLMV';
import { Products } from '../../data/Products';

const Sol = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: '1000px',
          gap: '50px',
        }}
      >
        <SolLMV productos={Products} />
      </div>
    </>
  );
};

export default Sol;
