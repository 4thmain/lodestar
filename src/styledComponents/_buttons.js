var React = require('react-native');
var {
  StyleSheet,
  TouchableHighlight,
  View,
  Text
} = React;


module.exports = React.createClass({
render: function() {
  return (
    <View style={styles.container}>
      <TouchableHighlight
      underlayColor="#70C2C1"
      style={[styles.button,styles.primary]}
      onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableHighlight>
    </View>
  );
}
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:2,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    borderWidth: 1,
    borderColor: '#CC0000',
    height: 36,
    width: 200,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
   },
   text: {
    color: '#fff'
   },

   primary: {
    backgroundColor: '#70C2C1',
    borderColor: '#54C7C3'
   },
   danger: {
    backgroundColor: '#CB5D55',
    borderColor: '#CB5D55',
   },
   secondary: {
    borderColor: '#727d82',
   },
   secondarytext: {
    color: '#5f686c'
   }
 });
