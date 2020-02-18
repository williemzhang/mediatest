import React from 'react';
import {
	TouchableOpacity,
	Text,
} from 'react-native';

function ButtonObject(props) {
	console.log("render "+props.title+" at "+ new Date());
	return(
	  	<TouchableOpacity style={props.containerStyle} onPress={props.onPress}>
	  		<Text style={props.style}>{props.title}</Text>
	  	</TouchableOpacity>
	);
}

export const Button = React.memo(ButtonObject);