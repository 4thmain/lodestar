var React = require('react-native');
var {
  StyleSheet,
  View,
} = React;

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
      {this.props.children}
      </View>
    )
  }
});

var styles = StyleSheet.create ({
  container: {
  flex: 1,
  },
})
