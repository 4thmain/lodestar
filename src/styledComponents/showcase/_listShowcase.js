var React = require('react-native');
var {
  ListView,
  View,
  Text,
  StyleSheet
} = React;
var ListItem = require('../_listitem.js');

module.exports = React.createClass({

  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(['a','big','house']),
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

    renderRow:function(rowData,sectionID,rowID) {
      return <ListItem data = {rowData} rowid = {rowID}/>;
    }
});

  var styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop: 64,
  }
  });
