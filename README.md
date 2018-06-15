# Curso de React - Platzi Videos

### Para crear una app de forma rápida hay que ejecutar el siguiente comando: <br>
`create-react-app nombre_app`

### Configuración de webpack: 

> Desarrollo: `webpack.dev.config.js` <br>
> Producción: `webpack.config.js` <br>

### Instalar React y react DOM: <br>
`npm install react react-dom --save`


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


### Ciclo de vida de los componentes: <br><br>

#### Montado: El momento en que el componente entra en escena.

**constructor:** Método llamado antes de que el componente sea montado (componente aun no se ve). <br>

- Podemos iniciar el estado
- Enlazar eventos (bind).
- Es el primer metodo que se llama al instanciar un componente. <br><br>


**componentWillMount:** Método llamado inmediatamente antes de que el componente se vaya a montar (componente aun no se ve). <br>

- Podemos hacer un setState()
- No hacer llamados a un API o suscripción a eventos. <br><br>


**render:** Método que contiene todos los elementos a renderizar (estructura del componente). <br>

- Contiene JSX en el return.
- Puedes calcular propiedades nCompleto = name + lastName. <br><br>

**componentDidMount:** Método llamado luego de montarse el componente (el componente ya esta en la pantalla). <br>

- Solo se lanza una vez.
- Enlazar (bind) de eventos.
- Es el primer método que se llama al instanciar un componente.
- Aqui podemos utilizar APIs (Navegador o Datos Externos). <br><br>


#### Actualización

**componentWillReceiveProps:** Método llamado al recibir nuevas propiedades que sirve para actualizar el estado con base a las nuevas propiedades. <br>

**shouldComponentUpdate:** Método que condiciona si el componente se debe volver a renderizar, es utilizado para optimizar el rendimiento. <br>

**componentWillUpdate:** Método llamado antes de re-renderizar un componente, es utilizado para optimizar el rendimiento. <br>

**render:** Método que realiza el re-render. <br>

**componentDidUpdate:** Método llamado luego del re-render. <br><br>


#### Desmontado

**componentWillUnmount:** Método llamado antes de que el componente sea retirado de la aplicación. <br>

**componentDidCatch:** Método llamado cuando ocurre un error al renderizar el componente, el manejo de errores solamente ocurre en componentes hijos. <br><br>


Dependencia que me permite validar el tipo de las propiedades: `npm install prop-types --save` <br><br>

**Portales:** Es la manera en la que podemos renderizar componentes fuera del contenedor principal de la aplicación (`<divid="App"></div>`). <br><br>

El caso de uso mas común son las ventanas modal, para crear un portal, se debe importar el metodo createPortal de react-dom: <br>
`import { createPortal} from'react-dom';` <br><br>

El metodo **createPortal()** recibe dos parametros, al igual que con render es Lo que se va a renderizar y donde se va a renderizar: <br>

```javascript
class ModalContainer extends Component{
  render() {
    return (
      createPortal(<Component />, document.getElementById('component-container'))
    )
  }
}
```


### Enlaces de interes:

(https://reactjs.org/docs/handling-events.html)[Eventos React] <br>
(https://reactjs.org/docs/handling-events.html)[Manejo de enventos] <br>
(https://reactjs.org/docs/state-and-lifecycle.html)[Ciclo de vida de los componentes - Doc oficial ReactJS] <br>
(https://rangle.github.io/react-training/react-summary/)[Ciclo de vida de los componentes] <br>