var React = require('react-native');
var {
  ListView,
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} = React;


module.exports = React.createClass({
  _handlePress: function() {
    console.log(this.props)
    this.props.handlePress(this.props.data.toLowerCase())
  },

  render: function() {
    return (
    <TouchableHighlight
    style={styles.rowView}
    underlayColor={'#fcfcfc'}
    onPress={this._handlePress}
    >
    <Text style={styles.row}>{this.props.rowid}. {this.props.data}</Text>
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
