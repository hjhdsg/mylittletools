import React from 'react';

const Audio = (props) => {
    const {src,title} = props
    return (
        <div>
            <h2>{title}</h2>
            <audio src={src} controls></audio>
        </div>
    );
}

export default Audio;
