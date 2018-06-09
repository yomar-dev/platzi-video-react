import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends PureComponent{
    state = {
        author: 'Ronaldinho'
    }
    /*constructor(props){
        super(props);
        this.state = {
            author: props.author
        }
    }*/

    handleClick = (event) => {
        /**
         * Cambiar el estado de una propiedad
         */
        this.setState({
            author: 'Yomar Miranda'
        })
    }
    
    render(){
        const { title, author, cover } = this.props

        return(
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img className="Media-image" src={cover} />
                    <h3>{title}</h3>
                    <p>{author}</p>
                </div>
            </div>
        )
    }
}

Media.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    cover: PropTypes.string,
    type: PropTypes.oneOf(['video', 'audio'])
}

export default Media;