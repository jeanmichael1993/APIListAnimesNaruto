import React from 'react';

function hoc(Component) {
  return function CarregandoAnimes({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Carregando dados
      </p>
    );
  };
}
export default hoc;