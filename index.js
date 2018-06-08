import React from 'react';
import { render } from 'react-dom';
import Media from './src/playlist/components/media';

const app = document.getElementById('app');
const saludo = <h1>Hello World!!</h1>

render(<Media />, app);