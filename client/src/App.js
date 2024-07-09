import React from 'react';
import BlissifyToast from './components/atoms/BlissifyToast';
import AppRoutes from './components/router/AppRoutes';
import { SidebarProvider } from './context/sidebarContext';

const App = () => {

  return (
    <SidebarProvider>
      <AppRoutes />
      <BlissifyToast />
    </SidebarProvider>
  );
};

export default App;
