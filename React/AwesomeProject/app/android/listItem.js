import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

export default class ListItem extends Component{
    render(){
        return(
            <View>
                <TouchableHighlight>
                    <Text> {this.props.name}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}