var React = require('react-native');
var Parse = require('parse/react-native');
var {
  Text,
  View,
  StyleSheet
} = React;

var Title = require('../_title')
var TextInput = require('../_textinput')
var Buttons = require('../_buttons')

module.exports = React.createClass({

  getInitialState: function() {
    return {
      username: '',
      password: '',
      errorMessage: '',
      passwordConformation: ''
    };
  },
  render: function(){
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
          <Text>Password Conformation:</Text>
          <TextInput
          issecure={true}
          Value={this.state.password}
          onChangeText={(text) => this.setState({passwordConformation: text})}
          />
          <Buttons text={'Sign Up Now'} onPress={this.onSignUpPress}
          />
          <Text>{this.state.errorMessage}</Text>
          <Buttons text={'I have an account'} onPress={this.onSigninPress}
          />
      </View>
    );
  },
  onSignUpPress: function() {
    if (this.state.password !== this.state.passwordConformation) {
      this.setState({errorMessage: 'Password Mismatch, try again'});
    }
    else {
      var user = new Parse.User();
      user.set('username',this.state.username);
      user.set('password',this.state.password);
      user.signUp(null, {
        success: (user) => { console.log(user);

          this.props.navigator.immediatelyResetRouteStack([{name:'main'}]);
        },
        error: (user,error) => {this.setState({errorMessage: error.message});}
      });
    }
  },
  onSigninPress: function() {
    this.props.navigator.pop();
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
});
