import React from 'react';
// import { Move } from 'react-feather';
import './heading.styles.scss';


let maxChars = 10;
let currentChars = 0;



const Heading = (props) => (
	
	<div className="movable heading" style={{position: 'relative', top: -2006, left: ((3404/128)/2)+10, right: 0, bottom: 0}}>
		{/* <p className="handle">
			<Move size="19" />
		</p> */}
		<h3 className='font-face-gm' style={{fontSize:30,color:'white',fontFamily:'Cubano'}} contentEditable maxlength={10} suppressContentEditableWarning > 
			{props.stringValue}
		</h3>
	</div>
);

export default Heading;
