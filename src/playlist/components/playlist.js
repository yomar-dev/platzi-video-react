import React from 'react';
import Media from './media';
import './playlist.css';

function Playlist(props){
    const { data } = props
    console.log(data);

    return (
        <div className="Playlist">
            {
                props.playlist.map((item) => {
                    return <Media {...item} key={item.id} />
                })
            }
        </div>
    )
}

export default Playlist;