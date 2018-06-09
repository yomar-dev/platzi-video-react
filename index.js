import React from 'react';
import { render } from 'react-dom';
import Media from './src/playlist/components/media';
import data from './src/api.json';

const app = document.getElementById('app');

render(<Media title="El día que el Barca recuperó la sonrisa" author="Ronaldinho" image="https://as01.epimg.net/futbol/imagenes/2017/01/24/internacional/1485279498_238373_1485280097_sumario_normal.jpg" />, app);