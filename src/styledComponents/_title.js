import React, {
  StyleSheet,
  Text,
  View
} from 'react-native';

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {this.props.children}
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center'
  },
  title: {
    fontSize: 15,
    lineHeight: 24,
    textAlign: 'center',
    fontWeight: '100',
    color: 'gray'
  },
 });
