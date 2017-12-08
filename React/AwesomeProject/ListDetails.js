import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { View, Text, Button,ListView,StyleSheet,TouchableOpacity,TextInput, CheckBox } from 'react-native';

export class ListDetails extends Component<{}> {


	constructor(props){
		super(props);

		this.state={
			navigation:this.props.navigation.state.params.navigation,
			question:this.props.navigation.state.params.question,
		}
	}

	questionTextChanged(value){
		this.state.navigation.navigate('List',{ navigation:this.state.navigation, oldquestion: this.state.question,newquestion:value });
	}

	render() {
	    return (
	      	<View>
				<TextInput>{this.state.question.question}</TextInput>
				<View style={styles.oneLine}>
					<CheckBox />
					<TextInput
						style={{height: 40, width: 310}}
						value={this.state.question.answer1}
					/>
				</View>
				<View style={styles.oneLine}>
					<CheckBox />
					<TextInput
						style={{height: 40, width: 310}}
						value={this.state.question.answer2}
					/>
				</View>
				<View style={styles.oneLine}>
					<CheckBox />
					<TextInput
						style={{height: 40, width: 310}}
						value={this.state.question.answer3}
					/>
				</View>
	        </View>


	    );
	}
}
/*
	showDetails(question){
		this.state.navigation.navigate('Details',{ navigation:navigation})};

	}*/


const styles = StyleSheet.create(
    {
        mainView: {
            paddingTop: 20
        },
        oneLine:{
            flexDirection: 'row',
            alignSelf: 'stretch'
        }
    }

);


