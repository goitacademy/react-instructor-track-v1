import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import Example1 from './components/Example1';
// import Example2 from './components/SignupForm/SignupForm';
// import Example3 from './components/Counter/Counter';
// import Example4 from './components/Example4';
// import Example5 from './components/Clock/Clock';
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Example1 />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root'),
);
