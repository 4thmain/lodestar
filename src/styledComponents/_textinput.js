var React = require('react-native');
var {
  TextInput,
  StyleSheet
} = React;

module.exports = React.createClass({
  render: function() {
    return (
      <TextInput
      style={styles.input}
      secureTextEntry={this.props.issecure}
      onChangeText={this.props.onChangeText}
      value ={this.props.value}
      />
    );
  }
});

var styles = StyleSheet.create({
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center',
  }
});
