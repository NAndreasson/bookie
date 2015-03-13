var NewInvoiceRow = React.createClass({

  delete: function(ev) {
    ev.preventDefault();

    this.props.onDelete(this.props.row.id);
  },

  render: function() {
    return (
      <tr>
        <td><input type="text" placeholder="Description" value={this.props.desc} /></td>
        <td><input type="number" value={this.props.row.units} /></td>
        <td><input type="number" value={this.props.row.price} /></td>
        <td><button className="delete" onClick={this.delete}>X</button></td>
      </tr>
    );
  }

});
