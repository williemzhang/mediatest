import {
	StyleSheet
} from 'react-native';

export const generalStyle = StyleSheet.create({
  	mainContainer:{
	    padding: 10,
	    display: "flex",
	    flexDirection: "column",
	    flexWrap:"nowrap",
  	},
  	childContainer:{
  		flex: 1,
  		flexBasis: "50%",
  		flexGrow: 0,
  	},
  	numberButtonContainer:{
  		display:"flex",
  		flexDirection: "row",
  		flexWrap: "nowrap",
  	},
  	childButtonNumberContainer:{
  		flex: 1,
  		flexBasis: "75%",
  		flexGrow: 0,
  		flexWrap: "wrap",
  		flexDirection: "row",

  	},
  	childButtonNumberColumnContainer:{
  		flex: 1,
  		flexBasis: "33%",
  		flexGrow: 0,
  		flexDirection: "column",
  	},
  	childButtonOperatorContainer:{
  		flexBasis: "25%",
  		flexGrow: 0,
  		flexDirection:"column",
  	},
  	childOperatorContainer:{
  		padding:10,
  		flexBasis: "20%",
  		flexGrow: 0,
  	},
  	childButtonContainer:{
  		flexBasis: "25%",
  		flexGrow: 0,
  		padding:10,
  	},
  	buttonContainerStyle:{
  		flex: 1,
  		padding: 10,
  		backgroundColor: '#dee0df',
  		justifyContent: 'center',
  		alignItems: 'center',
  		borderRadius: 10,
  	},
  	buttonStyle:{
  		color: 'black',
  		fontWeight: 'bold',
  		fontSize: 20,
  	},
  	numberView:{
  		bottom:0,
  		right:0,
  		position: "absolute",
  		marginBottom:20,
  		marginRight:20,
  		fontSize: 60,
  		fontWeight:"bold"
  	}


 })