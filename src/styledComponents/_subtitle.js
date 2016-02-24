import React, {
  StyleSheet,
  Text,
} from 'react-native';


module.exports = React.createClass({
  render: function() {
    return (
        <Text style={styles.subtitle}>
        {this.props.children}
        </Text>
    );
  }
});
var styles = StyleSheet.create({
  subtitle: {
    fontSize: 16,
    lineHeight: 16,
    textAlign: 'center',
    color: '#333333', // this style is overwritten by the one below. true css style.
    marginBottom: 5,
    color: '#5e8396'

  },
 });
