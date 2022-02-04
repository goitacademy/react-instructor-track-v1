import React from 'react';
import ReactDOM from 'react-dom';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <Example1 />
  </React.StrictMode>,
  document.getElementById('root'),
);
