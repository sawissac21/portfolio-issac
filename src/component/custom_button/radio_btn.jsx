import React from 'react'
import "./css/radio.css";

function RadioButton({selected,onClick,refit}) {
	const isSelected = selected?"radio-switch-on":"radio-switch-off";
	const switchClass = `radio-switch ${isSelected}`;
	const clickHandle = ()=>{
		onClick(!selected);
	}
	return (
		<React.Fragment>
			<div className="radio-btn" onClick={clickHandle} ref={refit}>
				<div className={switchClass}></div>
			</div>
		</React.Fragment>
	)
}

export default React.memo(RadioButton);
