var React = require('react-native');
var {
  StyleSheet,
  TouchableHighlight,
  View,
  Text
} = React;
var TextInput = require('../_textinput')
var Buttons = require('../_buttons')

module.exports = React.createClass({
render: function() {
  return (
    <View style={styles.container}>
    <Text>User Name</Text>
    <TextInput />
    <Text>Password</Text>
    <TextInput issecure={true}/>
    <Buttons text= {'click me'} type = {'primary'} />
    </View>
  );
}
});

var styles = StyleSheet.create({
  container: {
    marginTop: 64,
    padding:12,
    justifyContent: 'center',
    alignItems: 'center'
  }
   });
