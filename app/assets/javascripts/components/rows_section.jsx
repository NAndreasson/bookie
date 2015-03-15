var RowsSection = React.createClass({

  render: function() {
    var invoiceRows = [];
    var rows = this.props.rows;

    for (var key in rows) {
      invoiceRows.push(
        <NewInvoiceRow
          key={key}
          row={rows[key]}
          onDelete={ this.props.onDelete }
          onUpdate={ this.props.onUpdate }
        />
        );
    }

    return (
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Units</th>
              <th>Price</th>
              <th className="delete"></th>
            </tr>
          </thead>
          <tbody>
            {invoiceRows}
          </tbody>
        </table>
    );
  }
});
