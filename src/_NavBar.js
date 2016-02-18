import NavigationBar from 'react-native-navigation-bar';
var React = require('react-native');

module.exports = React.createClass({
  render:  function() {
    return(
      <NavigationBar
        title={'Lodestar'}
        height={44}
        titleColor={'#fff'}
        backgroundColor={'#2B3940'}
        leftButtonIcon={''}
        leftButtonTitle={'Back'}
        leftButtonTitleColor={'#fff'}
        onLeftButtonPress={'onBackHandle'}
        rightButtonIcon={''}
        rightButtonTitle={'Forward'}
        rightButtonTitleColor={'#fff'}
        onRightButtonPress={'onForwardHandle'}
      />
    );
  }
});
