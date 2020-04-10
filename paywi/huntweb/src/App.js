import React,{Component} from 'react';
import './estilo.css';

import Header from './componentes/header';
import Main from './pages/main';

const App = ()=> (
    <div className="App">
     <Header />
     <Main/>
    </div>
  );
export default App;
