var React = require('react-native');
var NavigationBar = require('./_NavBar.js');
var {
  View,
  Text,
  StyleSheet
} = React;

var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');

var Buttons = require('./styledComponents/_buttons')
var TextInput = require('./styledComponents/_textinput')
var Title = require('./styledComponents/_title')
var SubTitle = require('./styledComponents/_subtitle')
var Container = require('./layouts/_container')
var Signin = require('./styledComponents/authentication/signin')

module.exports = React.createClass({
  componentWillMount: function() {
    Parse.initialize("YXgmq0uVmORIGXzItFngreBExRwaFM5DXwRqLjP3", "mZ4naEEVUiFLoiAF0uqwleYB48rh7kFpApX6p7GX");

  },
render: function() {
  return (
    <Container>
      <NavigationBar/>
      <Signin />
    </Container>
  );
}
});

var styles =  StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  }
});
