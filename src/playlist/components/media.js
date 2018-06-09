import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends Component{
    render(){
        const { title, author, image } = this.props

        return(
            <div className="Media">
                <div className="Media-cover">
                    <img className="Media-image" src={image} width={260} height={160} />
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
    image: PropTypes.string
}

export default Media;