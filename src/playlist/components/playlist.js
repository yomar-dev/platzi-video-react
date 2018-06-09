import React, { Component } from 'react';
import Media from './media';
import './playlist.css';

class Playlist extends Component{
    render(){
        const { data } = this.props
        const playlist = data.categories[0].playlist
        console.log(data);

        return (
            <div className="Playlist">
                {
                    playlist.map((item) => {
                        return <Media {...item} key={item.id} />
                    })
                }
            </div>
        )
    }
}

export default Playlist;