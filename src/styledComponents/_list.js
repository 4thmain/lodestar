var React = require('react-native');
var {
  ListView,
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} = React;
var ListItem = require('./_listitem.js');

module.exports = React.createClass({

  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(['Activity Indicator', 'Title','Input Box','Buttons',]),
    };
},
  render: function() {
    return (
      <View style={styles.container}>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        />
        </View>
      );
    },
    renderRow:function(rowData) {
      return <ListItem data = {rowData}
      handlePress = {this._handlePress} />;
    },
    _handlePress: function() {
      console.log('this be that');
      console.log(this.props.navigator);
      this.props.navigator.push({name: 'button'});
    }
});

  var styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop: 64,
  },
  rowView: {
    borderColor: '#ccc',
    borderBottomWidth: 0.5,
    marginLeft: 10
  },
  row: {
    fontSize: 20,
    lineHeight: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 1,
    paddingBottom: 8,
    borderColor: '#333333',
    borderBottomWidth: 0.5,
  }
});

// renderRow={(rowData) => <TouchableHighlight style={styles.rowView}><Text style={styles.row}>{rowData}</Text></TouchableHighlight>}
