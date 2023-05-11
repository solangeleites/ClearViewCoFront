import { Route } from 'react-router-dom';
import Header from './components/header/Header';
import Layout from './components/layout/Layout';
import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <Router />
      <GlobalStyles />
    </>
  );
}
export default App;
