var React = require('react-native');
var NavigationBar = require('./_NavBar.js');
var {
  StyleSheet,
  Navigator
} = React;

var NavigationBar = require('./_NavBar.js');
var Container = require('./layouts/_container');
var ListView = require('./styledComponents/_list');
var Buttons = require('./styledComponents/_buttons')

var ROUTES = {
  list: ListView,
  button: Buttons,
};

module.exports = React.createClass({

  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  },

  render: function() {
    return(
      <Container>
        <NavigationBar />
        <Navigator
        initialRoute={{name: 'list'}}
        renderScene={this.renderScene}
        configureScene={() => {return Navigator.SceneConfigs.FloatFromRight;}}
        />
      </Container>
    )
  },
});
