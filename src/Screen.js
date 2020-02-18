import React, {PureComponent} from 'react';
import {
	View,
	Text,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {
	Button
} from './Button.js';


import {
	generalStyle
} from './styles.js';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import {
	buttonPress
} from './actions.js';

class BottomScreen extends React.Component{
	constructor(props){
		super(props);
	}

	pressed(value){
		this.props.parentProps.buttonPress(value);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return false;
 	}

	render(){
		return(
			<View
				style={[generalStyle.childContainer, generalStyle.numberButtonContainer]}>
					<View
						style={generalStyle.childButtonNumberContainer}>
							<View
								style={generalStyle.childButtonNumberColumnContainer}>
									<View
										style={generalStyle.childButtonContainer}>
											<Button 
												containerStyle={generalStyle.buttonContainerStyle}
												style={generalStyle.buttonStyle}
												onPress={() => {this.pressed("7")}}
												title="7"/>
									</View>
									<View
										style={generalStyle.childButtonContainer}>
											<Button 
												containerStyle={generalStyle.buttonContainerStyle}
												style={generalStyle.buttonStyle}
												onPress={() => {this.pressed("4")}}
												title="4"/>
									</View>
									<View
										style={generalStyle.childButtonContainer}>
											<Button 
												containerStyle={generalStyle.buttonContainerStyle}
												style={generalStyle.buttonStyle}
												onPress={() => {this.pressed("1")}}
												title="1"/>
									</View>
									<View
										style={generalStyle.childButtonContainer}>
											<Button 
												containerStyle={generalStyle.buttonContainerStyle}
												style={generalStyle.buttonStyle}
												onPress={() => {this.pressed("C")}}
												title="C"/>
									</View>
							</View>
							<View
								style={generalStyle.childButtonNumberColumnContainer}>
									<View
										style={generalStyle.childButtonContainer}>
											<Button 
												containerStyle={generalStyle.buttonContainerStyle}
												style={generalStyle.buttonStyle}
												onPress={() => {this.pressed("8")}}
												title="8"/>
									</View>
									<View
										style={generalStyle.childButtonContainer}>
											<Button 
												containerStyle={generalStyle.buttonContainerStyle}
												style={generalStyle.buttonStyle}
												onPress={() => {this.pressed("5")}}
												title="5"/>
									</View>
									<View
										style={generalStyle.childButtonContainer}>
											<Button 
												containerStyle={generalStyle.buttonContainerStyle}
												style={generalStyle.buttonStyle}
												onPress={() => {this.pressed("2")}}
												title="2"/>
									</View>
									<View
										style={generalStyle.childButtonContainer}>
											<Button 
												containerStyle={generalStyle.buttonContainerStyle}
												style={generalStyle.buttonStyle}
												onPress={() => {this.pressed("0")}}
												title="0"/>
									</View>
							</View>
							<View
								style={generalStyle.childButtonNumberColumnContainer}>
									<View
										style={generalStyle.childButtonContainer}>
											<Button 
												containerStyle={generalStyle.buttonContainerStyle}
												style={generalStyle.buttonStyle}
												onPress={() => {this.pressed("9")}}
												title="9"/>
									</View>
									<View
										style={generalStyle.childButtonContainer}>
											<Button 
												containerStyle={generalStyle.buttonContainerStyle}
												style={generalStyle.buttonStyle}
												onPress={() => {this.pressed("6")}}
												title="6"/>
									</View>
									<View
										style={generalStyle.childButtonContainer}>
											<Button 
												containerStyle={generalStyle.buttonContainerStyle}
												style={generalStyle.buttonStyle}
												onPress={() => {this.pressed("3")}}
												title="3"/>
									</View>
									<View
										style={generalStyle.childButtonContainer}>
											<Button 
												containerStyle={generalStyle.buttonContainerStyle}
												style={generalStyle.buttonStyle}
												onPress={() => {this.pressed(".")}}
												title="."/>
									</View>
							</View>
					</View>
					<View
						style={generalStyle.childButtonOperatorContainer}>
							<View
								style={generalStyle.childOperatorContainer}>
									<Button 
										containerStyle={generalStyle.buttonContainerStyle}
										style={generalStyle.buttonStyle}
										onPress={() => {this.pressed("/")}}
										title="/"/>
							</View>
							<View
								style={generalStyle.childOperatorContainer}>
									<Button 
										containerStyle={generalStyle.buttonContainerStyle}
										style={generalStyle.buttonStyle}
										onPress={() => {this.pressed("*")}}
										title="*"/>
							</View>
							<View
								style={generalStyle.childOperatorContainer}>
									<Button 
										containerStyle={generalStyle.buttonContainerStyle}
										style={generalStyle.buttonStyle}
										onPress={() => {this.pressed("+")}}
										title="+"/>
							</View>
							<View
								style={generalStyle.childOperatorContainer}>
									<Button 
										containerStyle={generalStyle.buttonContainerStyle}
										style={generalStyle.buttonStyle}
										onPress={() => {this.pressed("-")}}
										title="-"/>
							</View>
							<View
								style={generalStyle.childOperatorContainer}>
									<Button 
										containerStyle={generalStyle.buttonContainerStyle}
										style={generalStyle.buttonStyle}
										onPress={() => {this.pressed("=")}}
										title="="/>
							</View>
					</View>
			</View>
		);
	}
}


class Screen extends React.Component{
	constructor(props){
		super(props);
	}


	render(){
		return(
			<SafeAreaView
				style={generalStyle.mainContainer} forceInset={{ top: 'always' }}>
				<View
					style={[generalStyle.childContainer]}>
						<Text
							style={generalStyle.numberView}>{this.props.button.showText}</Text>
				</View>
				<BottomScreen parentProps={this.props}/>
			</SafeAreaView>
		);
	}
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    buttonPress,
  }, dispatch)
);
const mapStateToProps = (state) => {
  const { button } = state
  return { button }
};

export default connect(mapStateToProps,mapDispatchToProps)(Screen);