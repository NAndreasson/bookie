var RowsSection = React.createClass({

  render: function() {

    var invoiceRows = this.props.rows.map(function(invoiceRow, index) {
      return <NewInvoiceRow key={index} row={invoiceRow} />;
    });

    return (
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Units</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {invoiceRows}
          </tbody>
        </table>
    );
  }
});
