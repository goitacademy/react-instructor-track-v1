import React from 'react';
import ReactDOM from 'react-dom';
import { Example1 } from './components/Example1';
import { Example2 } from './components/Example2';
import { Example3 } from './components/Example3';
import { Example4 } from './components/Example4';
import { Example5 } from './components/Example5';
import 'modern-normalize/modern-normalize.css';
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <Example1 />
    {/* <Example2 /> */}
    {/* <Example3 /> */}
    {/* <Example4 /> */}
    {/* <Example5 /> */}
  </React.StrictMode>,
  document.getElementById('root'),
);
