import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
   // content: {
  // //     backgroundColor: 'white'
 //   },
    // TASKS screen name.
    screenContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'ghostwhite'
    },
    notificationText: {
        fontSize: 26,
        fontWeight: 'bold',
        //backgroundColor: 'yellow'
    },
    // Tasks list styling.
    list: {
        marginTop: 20,
        backgroundColor: 'ghostwhite',
    },
    item: {
        alignItems: 'stretch',
        padding: 12,
        //marginTop: 2, 
        borderWidth: 0.2,
        //borderStyle: 'dashed',
        //borderRadius: 5,
    },
    // Input Textbox.
    addItemContainer: {
        backgroundColor: 'lightgrey',
        paddingTop: 6,

    },
    input: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        //borderRadius: 15,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'stretch',
        backgroundColor: '#fff',
    },
    buttonStyle: {
        backgroundColor: 'skyblue',
        margin: 10,
        padding: 5,
        borderRadius: 50
    },
    // TEXT
    titleText: {
        backgroundColor: 'grey'
    },
    title: {
        backgroundColor: 'red'
    },

})
