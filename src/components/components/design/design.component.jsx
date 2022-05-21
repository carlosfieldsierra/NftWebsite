import React, { useCallback, useContext, useRef,useState } from 'react';
import { Sun, Moon, Download, Bold } from 'react-feather';
import GitHubButton from 'react-github-button';
import PropTypes from 'prop-types';
import WebFont from 'webfontloader';
import logo from '../assets/moneyStack.png';
import moneyDesign from '../assets/moneyDesign.png';
import outline from '../assets/cashOutline.png';
import MoneyStack from './moneyStack'
import MoneyPrint1 from './moneyPrint1'
import MoneyPrint2 from './moneyPrint2'
import MoneyPrint3 from './moneyPrint3'
import MoneyPrint4 from './moneyPrint4'
import MoneyStripe from './moneyStripe'
import MoneyHands from './moneyHands'
import MoneyDesign from './moneyDesign'
import MoneyRing from './moneyRing'
import CircleIcon from './circleIcon'
import Credit from '../assets/creditCard.png';
import '../../qualified.css';
import computer from '../../images/Asset 9.png';
import exit from '../../images/exit.png';
import cardDesign from '../../images/jinx card _press here_-14.png';
import { downloadImage, deleteImageFromArray } from './design.util';
import SettingsContext from '../../contexts/settings.context';
import DraggableComponent from '../draggable/draggable.component';
import Heading from '../heading/heading.component';
import SubHeading from '../sub-heading/sub-heading.component';
import FrameImage from '../frame-image/frame-image.component';
import { Typography } from '@mui/material';
import ColorPicker from '../color-picker/colorpicker.component2'
import { useNavigate } from "react-router-dom";

import './design.styles.scss';



const MoneyPrint = ({number,primary,secondary}) => {
	const numberStr = `${number}`

	if (numberStr.length===1){
		return <MoneyPrint1 color={secondary} color2={primary}/>
	}
	else if (numberStr.length===2){
		return <MoneyPrint2 color={secondary} color2={primary}/>
	}
	else if (numberStr.length===3){
		return <MoneyPrint3 color={secondary} color2={primary}/>
	}
	else{
		return <MoneyPrint4 color={secondary} color2={primary}/>
	}
}

const NumberStyle = ({number,background}) => {
	const numberStr = `${number}`
	
	if (numberStr.length===1){
		return (
			<>	
			<div style={{position: 'relative', top: -1640, left: 116, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
				<text className='font-face-gm' style={{color:background,fontSize:200/5,WebkitTextStrokeWidth:'2px',WebkitTextStrokeColor:'black'}}>{number<0?0:number}</text>
			</div>
			<div style={{position: 'relative', top: -1688, left: 623, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
				<text className='font-face-gm' style={{color:background,fontSize:200/5,WebkitTextStrokeWidth:'2px',WebkitTextStrokeColor:'black'}}>{number<0?0:number}</text>
			</div>
			</>
		)
	}
	else if (numberStr.length===2){
		return (
			<>	
			<div style={{position: 'relative', top: -1640, left: 116-26, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
				<text className='font-face-gm' style={{color:background,fontSize:200/5,WebkitTextStrokeWidth:'2px',WebkitTextStrokeColor:'black'}}>{number<0?0:number}</text>
			</div>
			<div style={{position: 'relative', top: -1688, left: 623-26, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
				<text className='font-face-gm' style={{color:background,fontSize:200/5,WebkitTextStrokeWidth:'2px',WebkitTextStrokeColor:'black'}}>{number<0?0:number}</text>
			</div>
			</>
		)
	}
	else if (numberStr.length===3){
		return (
			<>	
			<div style={{position: 'relative', top: -1640, left: 116-26-26, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
				<text className='font-face-gm' style={{color:background,fontSize:200/5,WebkitTextStrokeWidth:'2px',WebkitTextStrokeColor:'black'}}>{number<0?0:number}</text>
			</div>
			<div style={{position: 'relative', top: -1688, left: 623-26-26, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
				<text className='font-face-gm' style={{color:background,fontSize:200/5,WebkitTextStrokeWidth:'2px',WebkitTextStrokeColor:'black'}}>{number<0?0:number}</text>
			</div>
			</>
		)
	}
	else{
		return (
			<>	
			<div style={{position: 'relative', top: -1640, left: 116-26-26-26, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
				<text className='font-face-gm' style={{color:background,fontSize:200/5,WebkitTextStrokeWidth:'2px',WebkitTextStrokeColor:'black'}}>{number<0?0:number}</text>
			</div>
			<div style={{position: 'relative', top: -1688, left: 623-26-26-26, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
				<text className='font-face-gm' style={{color:background,fontSize:200/5,WebkitTextStrokeWidth:'2px',WebkitTextStrokeColor:'black'}}>{number<0?0:number}</text>
			</div>
			</>
		)
	}
	 
}






const Design = ({ toggleMode, currentMode: { value }, updateSettings, defaultSettings,nextOne}) => {
	const settings = useContext(SettingsContext);
	const capture = useRef();
	
	
	// console.log(defaultSettings)
	// console.log(ColorPicker)
	
	const {
		background,
		color,
		headingFontSize,
		summaryFontSize,
		images,
		width,
		height,
		file_name,
		radius,
		borderColor,
		border,
		bgUrl,
		exportExt,
		font,
		overlay,
		primary,
		secondary,
		number,
		name,
	} = settings;

	const exportPic = async () => downloadImage(capture.current, width, height, exportExt,file_name);
	const deleteImage = (imageToDelete) => updateSettings(images, deleteImageFromArray(images, imageToDelete));

	if (font) {
		try {
			WebFont.load({ google: { families: [font] } });
		} catch {}
	}

	const containerStyle = {
		background,
		color,
		boxShadow: `rgba(28, 28, 28, ${overlay}) 0px 0px 0px 2000px inset`,
		fontFamily: `${font}`,
		width: `${width}px`,
		height: `${height}px`,
		borderRadius: `${radius}px`,
		border: `${border}px solid ${borderColor}`,
		backgroundImage: `url("${bgUrl}")`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
	};
	const headingStyle = { fontSize: `${headingFontSize}px` };
	const summaryStyle = { fontSize: `${summaryFontSize}px` };

	// const { primary,  primaryColor } = defaultSettings2;
	// const { secondary, secondaryColor } = defaultSettings2;
	const history = useNavigate();
	return (
		<>

			{/* <div className="toolbar" style={{zIndex:100}}>
				<button className="toggle-mode" onClick={toggleMode}>
					{value ? <Sun size="14" /> : <Moon size="14" />}
				</button>
				
				

				<div className="stargazers">
					<GitHubButton type="stargazers" namespace="pjijin" repo="Cover-Image-Generator" />
				</div>
			</div> */}

			<div style={{zIndex:3,position:'absolute',height:'100%',width:'100%',backgroundColor:'black'}}>
			<div class='exitButtonDiv' onClick={()=>{ history('/', { replace: true });}}>
				<img class='exitButton' src={exit} />
			</div>


			<div className="container">
        	<img src={computer} className="image" />
        	{/*<img src={swirlGif} className="overlay3"/>*/}
		<div className="overlay4">
			<Typography
				gutterBottom
				style={{ fontFamily: "MyFont", color: "black" }}
			>
				Introducing
			</Typography>
		</div>
		<div className='overlay5'>
			<Typography
				gutterBottom
				style={{ fontFamily: "MyFont", color: "black" }}
			>
				The Jinxed Club - VIP Pass
			</Typography>
		</div>
        <div className="overlay3">
			<div onClick={exportPic}>
				<img className="download" src={cardDesign} />
			</div>
			
			

		</div>
    </div>
			</div>



			<div style={{zIndex:2,position:'absolute'}}>
				<div className="center" ref={capture}>
					
					<div className="design-frame" style={containerStyle}>
						<div>
							{/* <img src={logo} alt="Logo" width="851" height="283.5" style={{zIndex:1}}/>
							<div style={{position: 'relative', top: -290, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
								<h1>00</h1>
							</div>
							<div style={{position: 'relative', top: -160, left: 810, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
								<h1>00</h1>
							</div>
							<div style={{position: 'relative', top: -427.5, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
								<img src={outline} alt="Outline" width="851" height="283.5" style={{zIndex:2}}/>
							</div> */}
							{/* <div style={{position:'absolute' ,left:100}}> */}
							{/* <MoneyStack color={primary}/> */}
							{/* </div> */}
							{/* <div style={{position:'relative',top:-289}}>
								
								<MoneyPrint primary={primary} secondary={secondary} number={number}/>
							</div> */}
							{/* <div style={{position:'relative',top:-590}}>
								<MoneyStripe color={"white"}/>
							</div> */}
							{/* <div style={{position:'relative',top:-860}}>
								<MoneyHands color={primary} color2={secondary}/>
							</div> */}

							{/* <div style={{position:'relative',top:-1149}}>
								<CircleIcon color={background}/>
							</div> */}

							{/* <div style={{position:'relative',top:-1436}}>
								<MoneyRing color={primary}/>
							</div> */}

							
							
							{/* <div style={{position: 'relative', top: -1685, left: 195, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
								<text className='font-face-gm' style={{color:background,fontSize:200/5,WebkitTextStrokeWidth:'2px',WebkitTextStrokeColor:'black'}}>{number<0?0:number}</text>
							</div> */}

							{/* <div style={{position: 'relative', top: -1733, left: 705, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
								<text className='font-face-gm' style={{color:background,fontSize:200/5,WebkitTextStrokeWidth:'2px',WebkitTextStrokeColor:'black'}}>{number<0?0:number}</text>
							</div> */}
							{/* <NumberStyle number = {number} background={background}/> */}

							
							
							
							<div style={{position:'relative',top:0}}>
								<img src={Credit} alt="MoneyDesign" width="578" height="367.25" style={{zIndex:1}}/>
							</div>

							<div style={{position:'relative',top:1930,left:20}}>
								<Heading stringValue={nextOne}/>
							</div>

							
							
							
							<div className="image-wrapper"  style={{marginTop:-2144,marginLeft:375}}>
							{/* style={{position:'relative',top:0}} */}
							{/* top:284,right:-350 */}
								{images.map((image) => (
									<FrameImage image={image} key={image} deleteImage={deleteImage} />
								))}
							</div>
							
							
						</div>
						
						
						{/* <div className="capture">
							
							<DraggableComponent>
								<Heading headingStyle={headingStyle} />
							</DraggableComponent>

							<DraggableComponent>
								<SubHeading summaryStyle={summaryStyle} />
							</DraggableComponent>

							<div className="image-wrapper">
								{images.map((image) => (
									<FrameImage image={image} key={image} deleteImage={deleteImage} />
								))}
							</div>
						</div> */}
					</div>
				</div>
			</div>
			
		</>
	);
};

Design.propTypes = {
	handleChange: PropTypes.func,
	defaultSettings: PropTypes.object,
	changeSettings: PropTypes.func
};
export default Design;
