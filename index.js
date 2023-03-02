import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const modifiedColorTheme = extendTheme({
  colors: {
    white: '#FFFAFA'
  }
})

// extendTheme - это функция предоставляемая библиотекой chakraUI для react, которая позволяет расширять/модифицировать обьект темы по умолчанию(изменить какой-нибуть свойство или вовсе добавить новое свойство).

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={modifiedColorTheme}>
    <App />
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
