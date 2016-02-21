var React = require('react-native');
var {
  ListView,
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} = React;


module.exports = React.createClass({
  render: function() {
    return (
    <TouchableHighlight
    style={styles.rowView}
    underlayColor={'#fcfcfc'}
    onPress={this.props.handlePress}
    >
    <Text style={styles.row}>{this.props.data}</Text>
    </TouchableHighlight>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
},
rowView: {
  borderColor: '#ccc',
  borderBottomWidth: 0.5,
  marginLeft: 10
},
row: {
  fontSize: 20,
  lineHeight: 40,
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: 4,
  paddingBottom: 8,
  borderColor: '#333333',
  borderBottomWidth: 0.5,
}
});
