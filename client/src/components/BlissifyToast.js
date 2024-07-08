import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import { useTheme } from '../theme/themeContext';

const ToastComponent = styled(ToastContainer)`
.Toastify__toast {
  background: ${({ theme }) => theme.colors.background} !important;
  color: ${({ theme }) => theme.colors.text} !important;
  font-family: ${({ theme }) => theme.fonts.main} !important;
  border-radius: 10px !important;
}

.Toastify__progress-bar {
  background: ${({ theme }) => theme.colors.primary} !important;
}
`;


const BlissifyToast = () => {
  const { theme } = useTheme()
  return (
    <ToastComponent
      theme={theme}
      position="top-right"
      autoClose={3500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover />
  )
}

export const notify = (message) => toast(message)

export default BlissifyToast