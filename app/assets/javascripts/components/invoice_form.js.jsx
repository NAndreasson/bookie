var InvoiceForm = React.createClass({

  getInitialState: function() {
    return {
      rows: [
      { desc: '', price: 0, units: 0 }
      ]
    };
  },

  newRow: function() {
    console.log('New Row');
    var rows = this.state.rows;
    rows.push({ desc: '', price: 0, units: 0 });

    this.setState({ rows: rows });
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var invoice = {
      customer: this.refs.customer.getDOMNode().value.trim(),
      invoice_date: this.refs.invoice_date.getDOMNode().value.trim(),
      last_pay_date: this.refs.last_pay_date.getDOMNode().value.trim(),
    };

    $.post('/invoices.json', { invoice: invoice }, function() {
      console.log('Response', arguments);
    });

  },

  sendFormToServer: function() {
    // ajax to server
  },

  render: function() {

    var invoiceRows = this.state.rows.map(function(invoiceRow, index) {
      return <NewInvoiceRow key={index} row={invoiceRow} />;
    });

    return (
      <form onSubmit={ this.handleSubmit }>

        <input type="text" placeholder="Customer" ref="customer" />
        <label>Last pay date</label>
        <input type="date" ref="last_pay_date" />

        <input type="button" value="New row" onClick={ this.newRow } />
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

        <button type="submit">Submit</button>
      </form>
    );
  }
});
