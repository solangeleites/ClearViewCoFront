import React from 'react';
import { Products } from '../../data/Products';
import RecetadosLMV from '../../components/losMasVendidos/RecetadosLMV';

const Recetados = () => {



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
<RecetadosLMV  producto = {Products}/>
      </div>
    </>
  );
};

export default Recetados;
