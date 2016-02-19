var React = require('react-native');
var Parse = require('parse/react-native');
var {
  View,
  Text,
  StyleSheet,
  TextInput,
} = React;
var Title = require('../_title')
var TextInput = require('../_textinput')
var Buttons = require('../_buttons')

module.exports = React.createClass({

  getInitialState: function() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },

  render: function() {
    return(
      <View style={styles.container}>
        <Title>Signin </Title>
          <Text>UserName:</Text>

          <TextInput
          value={this.state.username}
          onChangeText={(text) => this.setState({username: text})}
          />

          <Text>Password:</Text>
          <TextInput
          issecure={true}
          Value={this.state.password}
          onChangeText={(text) => this.setState({password: text})}
          />
          <Buttons text={'Sign In'} onPress={this.onPress}
          />
          <Text>{this.state.errorMessage}</Text>
          <Buttons text={'Sign Up'} onPress={this.onPressSignup}
          />
      </View>
    );
  },
  onPress: function() {
    Parse.User.logIn(this.state.username, this.state.password, {
    success: (user) =>  {
      this.props.navigator.push({name: 'main'});
    },
    error: (data, error) => { this.setState({errorMessage: error.message})
    // The login failed. Check error to see why.
      }
    },
  );
  },

  onPressSignup: function() {
    this.props.navigator.push({name: 'signup'});
  },

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
