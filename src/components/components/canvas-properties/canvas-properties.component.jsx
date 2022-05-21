import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Toggle } from 'react-powerplug';
import { Plus, Minus, Settings } from 'react-feather';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';


import LabelOption from '../label-option/label-option.component';
import NumberInput from '../number-input/number-input.component';
import ColorPicker from '../color-picker/colorpicker.component';
import ColorPicker2 from '../color-picker/colorpicker.component2';
import './canvas-properties.styles.scss';


const CanvasProperties = ({ handleChange, defaultSettings, changeSettings, massUpdateSettings }) => {
	const [radius, setRadius] = useState(defaultSettings.radius);
	const [width, setWidth] = useState(defaultSettings.width);
	
	const [height, setHeight] = useState(defaultSettings.height);
	const { border, borderColor } = defaultSettings;
	
	const { background, backgroundColor } = defaultSettings;
	
	const [number, setNumber] = useState(defaultSettings.number);
	
	// const { primary, setPrimary } = 'red';
	
	// const handleChangeComplete = (color) => {
	// 	// this.setPrimary(color);
	// 	console.log();
	//   };


	const handleBlog = async e => {
		let widthVal;
		let heightVal;
		if (e.target.value === 'dev') {
			widthVal = ['1000'];
			heightVal = ['420'];
		} else if (e.target.value === 'hashnode') {
			widthVal = ['800'];
			heightVal = ['420'];
		} else if (e.target.value === 'medium') {
			widthVal = ['1000'];
			heightVal = ['500'];
		}
		setWidth(widthVal);
		setHeight(heightVal);
		massUpdateSettings({ width: widthVal, height: heightVal });
	};

	const handleValueInputChange = e => {
		if (e.target.name === 'number') {
			let number = [e.target.value];
			setNumber(number<0?0:number);
			changeSettings('number', number);
		} else {
			let height = [e.target.value];
			setHeight(height);
			changeSettings('height', height);
		}
	};

	return (
		<Toggle initial={true}>
			{({ on, toggle }) => (
				<>
					<div className="toggle" onClick={toggle} checked={on}>
						<h5>
							{on ? <Minus size="12" /> : <Plus size="12" />} <Settings size="12" /> Properties
						</h5>
					</div>
					{on && (
						<div className="options-toggle">



							<LabelOption name="Placement">
								<select onChange={handleBlog} name="Blog">
									<option value="dev">Twitter Banner</option>
									{/* <option value="hashnode">HashNode</option>
									<option value="medium">Medium</option> */}
								</select>
							</LabelOption>

							

							<LabelOption name="Number">
								<NumberInput
									handleChange={handleValueInputChange}
									name="number"
									defaultValue={0}
									value={number}
								/>
							</LabelOption>

							{/* <LabelOption name="Width">
								<NumberInput
									handleChange={handleValueInputChange}
									name="width"
									defaultValue={3404/4}
									value={width}
								/>
							</LabelOption>

							<LabelOption name="Height">
								<NumberInput
									handleChange={handleValueInputChange}
									name="height"
									defaultValue={1134/4}
									value={height}
								/>
							</LabelOption> */}

							{/* <div>
								<h5>Filename</h5>
								<input
										type="url"
										value={defaultSettings.file_name}
										placeholder="Download file name"
										onChange={(e) => {
											changeSettings("file_name", e.target.value);
										}}
										name="file_name"
									/>
							</div> */}

							

							{/* <LabelOption name="Border">
								<NumberInput handleChange={handleChange} name="border" defaultValue={border} />
							</LabelOption>

							<LabelOption name="Border Color">
								<ColorPicker
									defaultValue={borderColor}
									changeSettings={changeSettings}
									name="borderColor"
								/>
							</LabelOption> */}

							<LabelOption name="Background Color">
								<ColorPicker
									defaultValue={backgroundColor}
									changeSettings={changeSettings}
									name="background"
								/>
							</LabelOption>

							<LabelOption name="Primary Color">
								<ColorPicker2
									defaultValue={backgroundColor}
									changeSettings={changeSettings}
									name="primary"
								/>
							</LabelOption>

							<LabelOption name="Secondary Color">
								<ColorPicker2
									defaultValue={backgroundColor}
									changeSettings={changeSettings}
									name="secondary"
								/>
							</LabelOption>

							<LabelOption name="Format">
								<select onChange={handleChange} name="exportExt">
									<option value="png">PNG</option>
									<option value="jpeg">JPG</option>
									{/* <option value="svg">SVG</option> */}
								</select>
							</LabelOption>

							{/* <div>
								<h5>Border Radius</h5>
								<InputRange
									className="slider"
									maxValue={100}
									minValue={0}
									value={radius}
									onChange={value => {
										setRadius(value);
										changeSettings('radius', value);
									}}
								/>
							</div> */}
						</div>
					)}
				</>
			)}
		</Toggle>
	);
};

CanvasProperties.propTypes = {
	handleChange: PropTypes.func,
	defaultSettings: PropTypes.object,
	changeSettings: PropTypes.func
};

export default CanvasProperties;
