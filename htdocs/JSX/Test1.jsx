//import React, {Component} from 'react';
//import ReactDOM from 'react-dom';

var Ostrich = React.createClass({
	render: function() {
		return (
			<div>
				Ostriches
			</div>
		);
	}
});

/*
function Peacock() {
	return (
		<div>
			Peacocks
		</div>
	);
}
export {Peacock};
*/
/*
export function Emu() {
	return (
		<div>
			Emus
		</div>
	);
}

Rhea = function() {
	return (
		<div>
			Rhea
		</div>
	);
}
export {Rhea};
*/
ReactDOM.render(<Ostrich />, document.getElementById("test"));