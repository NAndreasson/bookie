var NewInvoiceRow = React.createClass({

  render: function() {
    return (
      <tr>
        <td><input type="text" placeholder="Description" value={this.props.desc}/></td>
        <td><input type="number" value={this.props.row.units} /></td>
        <td><input type="number" value={this.props.row.price} /></td>
      </tr>
    );
  }
});
