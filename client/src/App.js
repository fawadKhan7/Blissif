import React from 'react';
import BlissifyToast from './components/BlissifyToast';
import AppRoutes from './components/router/AppRoutes';

const App = () => {

  return (
    <>
      <AppRoutes />
      <BlissifyToast />
    </>
  );
};

export default App;
