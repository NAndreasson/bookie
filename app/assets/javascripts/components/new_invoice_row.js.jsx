var NewInvoiceRow = React.createClass({

  render: function() {
    return (
      <tr>
        <td><input type="text" placeholder="Description" value={this.props.desc}/></td>
        <td><input type="number" value={this.props.units} /></td>
        <td><input type="number" value={this.props.price} /></td>
      </tr>
    );
  }
});
