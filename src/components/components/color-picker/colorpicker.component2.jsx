import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { CirclePicker, SketchPicker, TwitterPicker } from 'react-color';
import { XCircle } from 'react-feather';
import useOuterClickNotifier from '../../hooks/useOuterClickNotifier';
import './colorpicker.styles.scss';
import MoneyStack from '../design/moneyStack'
import MoneyHands from '../design/moneyHands'

const ColorPicker = ({ changeSettings, name, defaultValue }) => {
	const [toggle, setToggle] = useState(false);
	const [current, setCurrent] = useState(false);
	const innerRef = useRef(null);
	const [returnHex,setReturnHex] = useState('transparent');
	const showColorPicker = () => setToggle(!toggle);

	const myColors = ['#F9D4F3', '#D6D2F7','#F7F4C3','#C7DBE8','#52C57E','#CB5271','#86E3CE','#D0E6A5','#FFDD94','#FA897B','#CCABD8','#FFBE88']

	const updateSettigs = ({ hex }) => {
		changeSettings(name, hex);
		setCurrent(hex);
		setReturnHex(hex)
	};

	useOuterClickNotifier(e => {
		if (toggle) setToggle(!toggle);
	}, innerRef);

	return (
		<div>
			<div className="color-picker">
				<div className="swatch" onClick={showColorPicker}>
					<div className="color" style={{ background: current || defaultValue }} />
					{toggle && <XCircle size="14" />}
				</div>
				<div className="picker" ref={innerRef}>
					{toggle && <CirclePicker colors={myColors} onChange={updateSettigs} triangle="hide" />}
				</div>
				{/* <div style={{position:'absolute',top:0}}>
					<MoneyStack color={returnHex}/>
				</div> */}
				{/* <div style={{position:'absolute',top:0}}>
					<MoneyHands color={returnHex} color2={"transparent"}/>
				</div> */}
			</div> 
		</div>
	);
};

ColorPicker.propTypes = {
	changeSettings: PropTypes.func,
	name: PropTypes.string,
	defaultValue: PropTypes.string
};




export default ColorPicker;
