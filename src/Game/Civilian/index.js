import React, {useState} from 'react';
import numeral from "numeral";

const Civilian = (props) => {
	const { civilian } = props;
	return (
		<div className="civilian__wrapper">Civilian Count = {numeral(civilian).format('(0 a)')}</div>
	);
};

export default Civilian;
