import React from 'react';
import Media from './media';
import './playlist.css';

function Playlist(props){
    const { data } = props
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

export default Playlist;