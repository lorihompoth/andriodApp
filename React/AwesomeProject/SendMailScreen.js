import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { View, Text, Button,Linking,TextInput , StyleSheet, CheckBox, } from 'react-native';


export class SendMailScreen extends Component<{}> {

	constructor(props) {
	    super(props);
	    this.state = {
            question: '',
            answer1: '',
            answer2: '',
            answer3: '',
			correct1: '',
			correct2: '',
			correct3: '',
	    	email: ''
	    };
	 }

	sendMailButtonClick(){
		url='mailto:'
		url+=this.state.email;
		url+='?subject=Quiz Question&body=';
		url+=this.state.question + '\n\n';
		url+=this.state.answer1;
        url+=this.state.correct1 + '\n';
		url+=this.state.answer2;
        url+=this.state.correct2 + '\n'
		url+=this.state.answer3;
        url+=this.state.correct3 + '\n'
	 	Linking.openURL(url);
	}

    questionTextChanged(value){
        this.setState({question:value});
    }
    answer1TextChanged(value){
        this.setState({answer1:value});
    }
    answer2TextChanged(value){
        this.setState({answer2:value});
    }
    answer3TextChanged(value){
        this.setState({answer3:value});
    }

	emailTextChanged(value){
		this.setState({email:value});
	}

	render() {
	    return (
	      <View style={styles.mainView}>
	        <Text>Create a quiz: </Text>
			  <TextInput
				  style={{height: 40}}
				  placeholder="Question"
				  onChangeText={(text) => this.questionTextChanged(text)}
			  />
			  <View style={styles.oneLine}>
				  <CheckBox onChange = {() => this.setState({correct1: ' (Correct)'})}/>
				  <TextInput
					  style={{height: 40, width: 310}}
					  placeholder="Answer 1"
					  onChangeText={(text) => this.answer1TextChanged(text)}
				  />
			  </View>

			  <View style={styles.oneLine}>
				  <CheckBox onChange = {() => this.setState({correct1: ' (Correct)'})}/>
				  <TextInput
					  style={{height: 40, width: 310}}
					  placeholder="Answer 1"
					  onChangeText={(text) => this.answer1TextChanged(text)}
				  />
			  </View>

			  <View style={styles.oneLine}>
				  <CheckBox onChange = {() => this.setState({correct1: ' (Correct)'})}/>
				  <TextInput
					  style={{height: 40, width: 310}}
					  placeholder="Answer 1"
					  onChangeText={(text) => this.answer1TextChanged(text)}
				  />
			  </View>
			  <TextInput
				  style={{height: 40}}
				  placeholder="Email"
				  onChangeText={(text) => this.emailTextChanged(text)}
			  />

	        
	        <Button
	        	onPress={this.sendMailButtonClick.bind(this)}
			  	title="Send"
			  	color="#841584"
			  	accessibilityLabel="Learn more about this purple button"
			/> 
	      </View> 
	    );
	}
}

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

