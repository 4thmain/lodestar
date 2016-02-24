var React = require('react-native');
var NavigationBar = require('./_NavBar.js');
var {
  StyleSheet,
  Navigator
} = React;

var NavigationBar = require('./_NavBar.js');
var Container = require('./layouts/_container');
var ListView = require('./styledComponents/_list');
var ButtonsShowcase = require('./styledComponents/showcase/_buttonsShowcase')
var ListsShowcase = require('./styledComponents/showcase/_listShowcase')
var SpinnerShowcase = require('./styledComponents/showcase/_spinnerShowcase')
var TypographyShowcase = require('./styledComponents/showcase/_typographyShowcase')
var FormShowcase = require('./styledComponents/showcase/_formShowcase')

var ROUTES = {
  list: ListView,
  ////// Showcase Components
  buttons: ButtonsShowcase,
  lists: ListsShowcase,
  spinner:SpinnerShowcase,
  typography: TypographyShowcase,
  forms: FormShowcase

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
