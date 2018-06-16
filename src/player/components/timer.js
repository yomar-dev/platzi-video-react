import React from 'react';
import './timer.css';

function formattedTime(secs){
	const minutes = parseInt(secs / 60, 10);
	const seconds = parseInt(secs % 60, 10);

	return `${minutes}:${seconds}`;
}

function Timer(props){
	return(
		<div className="Timer">
			<p>
				<span>{formattedTime(props.currentTime)} / {formattedTime(props.duration)}</span>
			</p>
		</div>
	)
}

export default Timer;