var React = require('react-native');
var {
  StyleSheet,
  TouchableHighlight,
  View,
  Text
} = React;
var Buttons = require('../_buttons')

module.exports = React.createClass({
render: function() {
  return (
    <View style={styles.container}>
    <Text>Buttons are used for form submissions or general calls to action.
    </Text>
    <Buttons text= {'click me'} type = {'primary'} />
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
