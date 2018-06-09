import React from 'react';

function HomeLayout(props){
    return (
        <section>
            Hello World!!
            {props.children}
        </section>
    )
}

export default HomeLayout