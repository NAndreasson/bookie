var NewInvoiceRow = React.createClass({

  getInitialState: function() {
    return {
      id: this.props.row.id,
      desc: this.props.row.desc || '',
      units: this.props.row.units || 0,
      price: this.props.row.price || 0
    };
  },

  delete: function(ev) {
    ev.preventDefault();

    this.props.onDelete(this.props.row.id);
  },

  _changeDesc: function(ev) {
    this.setState({
      desc: ev.target.value
    }, function() {
      this.emitUpdate();
    });
  },

  _changePrice: function(ev) {
    this.setState({
      price: ev.target.value
    }, function() {
      this.emitUpdate();
    });
  },

  _changeUnits: function(ev) {
    this.setState({
      units: ev.target.value
    }, function() {
      this.emitUpdate();
    });
  },

  emitUpdate: function() {
    this.props.onUpdate(this.state);
  },

  render: function() {
    return (
      <tr>
        <td><input type="text" onChange={this._changeDesc} placeholder="Description" value={this.state.desc} /></td>
        <td><input type="number" onChange={this._changeUnits} value={this.state.units} /></td>
        <td><input type="number" onChange={this._changePrice} value={this.state.price} /></td>
        <td><button className="delete" onClick={this.delete}>X</button></td>
      </tr>
    );
  }

});
