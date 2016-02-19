var React = require('react-native');
var NavigationBar = require('./_NavBar.js');
var {
  StyleSheet,
  Navigator
} = React;
var NavigationBar = require('./_NavBar.js');
var Container = require('./layouts/_container')

module.exports = React.createClass({
  render: function() {
    return(
      <Container>
        <NavigationBar />
      </Container>

    )
  },
});
