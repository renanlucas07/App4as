import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import styles from '../styles';

export default class Itens extends Component {
    render() {
        const {
            item,
            image,
            description
        } = styles;
        return(
            <View style={item}>
                <Image style={image} source={{uri: this.props.image }} />
                <View  style={description}>
                    <Text>{this.props.titulo}</Text>
                    <Text>{this.props.valor}</Text>
                    <Text>{this.props.local}</Text>
                    <Text>{this.props.data}</Text>
                </View>
            </View>
        );
    }
}