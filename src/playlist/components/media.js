import React, { Component } from 'react';

class Media extends Component{
    render(){
        const styles = {
            container: {
                fontSise: 14,
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