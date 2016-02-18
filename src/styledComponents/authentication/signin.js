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
      error: ''
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
          secure={true}
          value={this.state.password}
          onChangeText={(text) => this.setState({password: text})}
          />
          <Buttons text={'Sign In'} onPress={this.onPress}
          />
          <Text>{this.state.error}</Text>
      </View>
    );
  },
  onPress: function() {
    Parse.User.logIn("this.state.username", "this.state.password", {
      success: (user) =>  {
    // Do stuff after successful login.
    console.log(user);
  },
    error: function(user, error) {
    // The login failed. Check error to see why.
    this.setState({error: error.message});
  }
});
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
