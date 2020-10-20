import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';


import Comp from './components/comp/mundoScript.jsx';
import mundoScript from './components/comp/mundoScript.jsx';

const container = document.getElementById('app');
let Test = 1488;
ReactDom.render(
    <div>
      <Comp name = {Test}/>
    </div>, 
    container
)