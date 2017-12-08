import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { View, Text, Button,ListView,StyleSheet,TouchableOpacity } from 'react-native';

const questions=[
    {quizEntry:{
        question: 'Which is the heavier metal?',
        answer1: 'Silver',
        answer2:'Gold',
        answer3: 'Uranium',
        correct1: '',
        correct2: '(Correct)',
        correct3: ''
    }},
    {quizEntry: {
        question: 'Which is the coldest location in the earth?',
        answer1: 'Africa',
        answer2: 'Australia',
        answer3: 'East Antarctica',
        correct1: '',
        correct2: '',
        correct3: '(Correct)'
    }},
    {quizEntry: {
        question: 'Which is the fastest animal on the land?',
        answer1: 'Dog',
        answer2: 'Horse',
        answer3: 'Cheetah',
        correct1: '',
        correct2: '',
        correct3: '(Correct)'
    }},

]

export class ListScreen extends Component<{}> {

	constructor(props){
		super(props);

		 const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

		this.state={
			navigation:this.props.navigation.state.params.navigation,
			dataSource: ds.cloneWithRows(questions),
			oldquestion:this.props.navigation.state.params.oldquestion,
			newquestion:this.props.navigation.state.params.newquestion,
		}

	}

	showDetails(question){
		this.state.navigation.navigate('Details',{ navigation:this.state.navigation, question: question.quizEntry });

	}

	renderRow(question,sectionId,rowId,highlightRow){
		return(
			<TouchableOpacity
				underlayColor="blue"
				onPress={()=>this.showDetails(question)}
			>
				<View style={styles.row}>
					<Text style={styles.rowText}>{question.quizEntry.question}</Text>
				</View>
			</TouchableOpacity>
		);
	}

	render() {
	    return (
	      	<View>
	        	<Text>Hello7, </Text>
	        	<Text>{this.props.navigation.state.params.user}</Text>
	        	<ListView
		        	dataSource={this.state.dataSource}
		        	renderRow={this.renderRow.bind(this)}
		      	/>
	      	</View>  	        
	    );
	}
}


const styles=StyleSheet.create({
	row:{
		flexDirection:'row',
		justifyContent:'center',
		padding:10,
		backgroundColor: '#f4f4f4',
		marginBottom:3
	},
	rowText:{
		flex:1
	}
});