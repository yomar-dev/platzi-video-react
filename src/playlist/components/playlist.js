import React, { Component } from 'react';
import Media from './media';

class Playlist extends Component{
    render(){
        const { data } = this.props
        const playlist = data.categories[0].playlist
        console.log(data);

        return (
            <div>
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