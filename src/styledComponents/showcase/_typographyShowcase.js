var React = require('react-native');
var {
  StyleSheet,
  View,
  Text
} = React;
var Title = require('../_title')
var SubTitle = require('../_subtitle')

module.exports = React.createClass({
render: function() {
  return (
    <View style={styles.container}>
    <Title> I too will be a title, some day</Title>
    <SubTitle> I too will be a Sub title, some day</SubTitle>
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
