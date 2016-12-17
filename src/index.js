import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router,browserHistory } from 'react-router'
import routes from './routes'
require('./styles/index.css');

if(process.env.NODE_ENV==='production'){
    console.log('production')
} else{
    console.log('dev');
}

render(
    <Router routes={routes} history={browserHistory} />,
    document.getElementById('root')
);
