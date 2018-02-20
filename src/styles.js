import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    item: {
        backgroundColor: 'white',
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,
        padding: 10
    },
    image: {
        width: 100,
        height: 100
    },
    description: {
        flexDirection: 'column',
        padding: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    list: {
        backgroundColor: '#CCC',
        flexDirection: 'column',
    }
});

module.exports = styles;