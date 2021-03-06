import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { CirclePicker, TwitterPicker } from 'react-color';
import { XCircle } from 'react-feather';
import useOuterClickNotifier from '../../hooks/useOuterClickNotifier';
import './colorpicker.styles.scss';

const ColorPicker = ({ changeSettings, name, defaultValue }) => {
	const [toggle, setToggle] = useState(false);
	const [current, setCurrent] = useState(false);
	const innerRef = useRef(null);

	const showColorPicker = () => setToggle(!toggle);

	const myColors = ['#F9D4F3', '#D6D2F7','#F7F4C3','#C7DBE8','#52C57E','#CB5271']

	const updateSettigs = ({ hex }) => {
		changeSettings(name, hex);
		setCurrent(hex);
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
