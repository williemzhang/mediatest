import { 
	BUTTON_PRESS 
} from './constants.js';

import { combineReducers } from 'redux';

const initialState = {
	pressedButton: [],
	showText: "0",
};

const buttonPressed = (state = initialState, action) => {
	switch(action.type) {
		case BUTTON_PRESS:
            var pressedArr = Object.assign([],state.pressedButton);
            var lastIndex = 0;
        	var operatorSign = ['/','-','*','+'];

            if(pressedArr.length > 0){
            	lastIndex = pressedArr.length - 1;
            }

            var showText = state.showText;
            if(action.payload == "C"){
            	pressedArr = [];
            	showText = "0";
            } else if(action.payload == "="){
            	if(operatorSign.includes(pressedArr[lastIndex])){
            		pressedArr.splice(lastIndex,1);
            	}
            	var total = 0;
            	var lastValue = 0;
            	var subtotal = 0;
            	if(pressedArr.length > 1){
            		if(operatorSign.includes(pressedArr[lastIndex-1])){
            			switch(pressedArr[lastIndex-1]){
            				case "/":
        						var newVal = parseFloat(pressedArr[lastIndex-2] / pressedArr[lastIndex]);
	    						pressedArr.splice(lastIndex-2, 3);
	    						pressedArr.push(newVal);
            					break;
            				case "*":
        						var newVal = parseFloat(pressedArr[lastIndex-2] * pressedArr[lastIndex]);
	    						pressedArr.splice(lastIndex-2, 3);
	    						pressedArr.push(newVal);
            					break;
            			}
            		}
            		for (var i = 0; i < pressedArr.length; i++) {
            				//console.log(pressedArr[i]);
            				if(i == 0){
            					lastValue = pressedArr[i];
            				} else {
            					switch(pressedArr[i]){
		            				case "-":
		            					lastValue = parseFloat(lastValue) - parseFloat(pressedArr[i+1]);
		            					console.log(lastValue);
		            					break;
		            				case "+":
		            					lastValue = parseFloat(lastValue) + parseFloat(pressedArr[i+1]);
		            					console.log(pressedArr[i+1]);
		            					break;
		            				case "/":
		            					lastValue = parseFloat(lastValue) / parseFloat(pressedArr[i+1]);
		            					console.log(lastValue);
		            					break;
		            				case "*":
		            					lastValue = parseFloat(lastValue) * parseFloat(pressedArr[i+1]);
		            					console.log(lastValue);
		            					break;

		            			}
            				}
	            				
            				//console.log(total);

            			
            			
	            	}
	            	showText=lastValue;
            	} else {
            		if(pressedArr.length > 0){
            			showText=pressedArr[0];
            		} else {
            			showText=0;
            		}
            		
            	}
            	


            	
            	pressedArr = [];
            } else {
            	if(operatorSign.includes(action.payload) && operatorSign.includes(pressedArr[lastIndex]) && pressedArr.length > 0){
            		pressedArr[lastIndex] = action.payload;
            	} else if(!operatorSign.includes(action.payload) && !operatorSign.includes(pressedArr[lastIndex]) && pressedArr.length > 0){
            		if(pressedArr.length > 0){
            			pressedArr[lastIndex] = pressedArr[lastIndex]+action.payload;
            			showText = pressedArr[lastIndex];
            		}
            	} else {
            		if(operatorSign.includes(action.payload)){
            			if(pressedArr.length == 0){
            				pressedArr.push("0");
            				showText = "0";
            			} else if(pressedArr.length > 2){
            				if(operatorSign.includes(pressedArr[lastIndex-1])){
	            				var newVal = 0;
		        				switch(pressedArr[lastIndex-1]){
		        					case "*":
		        						newVal = parseFloat(pressedArr[lastIndex-2] * pressedArr[lastIndex]);
			    						pressedArr.splice(lastIndex-2, 3);
			    						pressedArr.push(newVal);
		        						break;
		        					case "/":
		        						newVal = parseFloat(pressedArr[lastIndex-2] / pressedArr[lastIndex]);
			    						pressedArr.splice(lastIndex-2, 3);
			    						pressedArr.push(newVal);
		        						break;
		        				}	
	            			}
            			}
            			pressedArr.push(action.payload);
            		} else { 
            			if(pressedArr.length == 0 && action.payload == "."){
            				action.payload = "0.";
            			}
            			pressedArr.push(action.payload);
            			showText = action.payload;
            		}
            	}
            }
            console.log(pressedArr);
			return {
				...state,
				pressedButton:pressedArr,
				showText: showText
			};
		default:
			return state;
	}
}

export default combineReducers({
  button: buttonPressed,
});