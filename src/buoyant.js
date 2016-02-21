var React = require('react-native');
var NavigationBar = require('./_NavBar.js');
var {
  StyleSheet,
  Navigator
} = React;

var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');

var Buttons = require('./styledComponents/_buttons')
var TextInput = require('./styledComponents/_textinput')
var Title = require('./styledComponents/_title')
var SubTitle = require('./styledComponents/_subtitle')
var Container = require('./layouts/_container')
var Signin = require('./styledComponents/authentication/signin')
var Signup = require('./styledComponents/authentication/signup')
var Main = require('./main')

var ROUTES = {
  signin: Signin,
  signup: Signup,
  main: Main,
};

module.exports = React.createClass({
  componentWillMount: function() {
    Parse.initialize("HX87j5jytlfPft3Sw1pupCrp20WSvDp76ezSkBJ9", "p2tUooJjCfKLY4K3MYygvgg19lnC3I7ccLrw59Q2");
  },

renderScene: function(route, navigator) {
  var Component = ROUTES[route.name];
  return <Component route={route} navigator={navigator} />;
},

render: function() {
  return (
      <Navigator
      initialRoute={{name: 'main'}}
      renderScene={this.renderScene}
      configureScene={() => {return Navigator.SceneConfigs.FloatFromRight;}}
      />
  );
}
});

var styles =  StyleSheet.create({
  container: {
    flex: 1,
  }
});
