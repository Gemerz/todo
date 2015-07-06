/**
 * @jsx React.DOM
 */

var React = require('react');
var mui = require('../mui');
var RaisedButton = mui.RaisedButton;
//var ThemeManager = new mui.Styles.ThemeManager();

var Login = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render: function() {
    return (
        <RaisedButton label="Default" />
    );
  }

  //_onSave: function (title) {
  //  if (!title.trim()) return;
  //  taskStore.create(title);
  //}
});

module.exports = Login;
