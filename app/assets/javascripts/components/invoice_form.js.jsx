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
      last_pay_date: this.refs.last_pay_date.getDOMNode().value.trim(),
      invoice_rows: this.state.rows
    };

    $.post('/invoices.json', { invoice: invoice }, function() {
      console.log('Response', arguments);
    });

  },

  render: function() {

    return (
      <form onSubmit={ this.handleSubmit }>

        <div className="test">

          <div className="customer">
            <label>Customer</label>
            <input type="text" placeholder="Customer" ref="customer" />
          </div>
          <div className="meck">
            <label>Last pay date</label>
            <input type="date" ref="last_pay_date" />
          </div>

      </div>

      <div className="rows">
        <input type="button" value="New row" onClick={ this.newRow } />
        <RowsSection rows={this.state.rows} />
      </div>

      <button type="submit" onClick={ this.handleSubmit }>Submit</button>
      </form>
    );
  }
});
