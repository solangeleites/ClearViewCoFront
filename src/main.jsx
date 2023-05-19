import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import { MenuProvider } from './context/Context';


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
        <MenuProvider>

  <Provider store={store}>
    <PersistGate persistor={persistor}>
  <React.StrictMode>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
  </PersistGate>
  </Provider>
  </MenuProvider>

  </>
  )
