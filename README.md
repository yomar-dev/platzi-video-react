# Curso de React - Platzi Videos

### Para crear una app de forma rápida hay que ejecutar el siguiente comando: <br>
`create-react-app nombre_app`

### Configuración de webpack: 

> Desarrollo: `webpack.dev.config.js` <br>
> Producción: `webpack.config.js` <br>

### Instalar React y react DOM: `npm install react react-dom --save`


### Dar estilos a los componentes: <br>

```javascript
import React, { Component } from 'react';

class Media extends Component{
    render(){
        const styles = {
            container: {
                fontSize: 14,
                background: '#eee',
                border: '1px solid #bbb',
                boxSizing: 'border-box',
                color: '#222',
                fontFamily: 'sans-serif',
                padding: '1em',
                width: '260px'  
            },
            image: {
                width: '100%'
            }
        }
        return(
            <div style={styles.container}>
                <div>
                    <img style={styles.image} src="https://as01.epimg.net/futbol/imagenes/2017/01/24/internacional/1485279498_238373_1485280097_sumario_normal.jpg" width={260} height={160} />
                    <h3>El día que el Barca recuperó la sonrisa</h3>
                    <p>Ronaldinho</p>
                </div>
            </div>
        )
    }
}

export default Media;
```
> **Nota:** Hay que tener en cuenta que para poder asignarle el atributo `class` a los elementos `HTML` hay que utilizar `className` debido a que `class` es una palabra reservada de `Javascript` y por ende causaria conflictos.


Dependencia que me permite validar el tipo de las propiedades: `npm install prop-types --save` <br>


### Enlaces de interes:

[https://reactjs.org/docs/handling-events.html](Eventos React) <br>