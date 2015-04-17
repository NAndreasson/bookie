var EditInvoiceForm = React.createClass({

  getInitialState: function() {
    var invoice = this.props.invoice;

    return {
      rows: invoice.invoice_row
    };
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var invoice = this.props.invoice;
    var invoiceId = invoice.id;

    var updatedInvoice = {
      customer_id: this.refs.customer.getDOMNode().value.trim(),
      last_pay_date: this.refs.last_pay_date.getDOMNode().value.trim(),
      invoice_rows: this.state.rows
    };

    $.ajax('/invoices/' + invoiceId + '.json', {
      type: 'PUT',
      data: {
        invoice: updatedInvoice
      }
    }, function() {
      console.log('Response', arguments);
    });

  },

  handleDelete: function(id) {
    var rows = this.state.rows;
    delete rows[id];

    this.setState({ rows: rows });
  },

  handleUpdate: function(data) {
    var rows = this.state.rows;
    rows[data.id] = data;

    this.setState({ rows: rows });
  },

  render: function() {
    var invoice = this.props.invoice;
    var customerId = invoice.customer_id;

    var customers = this.props.customers.map(function(customer) {
      return <option value={customer.id}>{customer.name}</option>
    });

    return (
      <form>

        <div className="test">

          <div className="customer-name">
            <label>Customer</label>
            <select defaultValue={customerId} ref="customer">
              {customers}
           </select>

          </div>
          <div className="meck">
            <label>Last pay date</label>
            <input type="date" ref="last_pay_date" defaultValue={invoice.last_pay_date} />
          </div>

      </div>

      <div className="rows">
        <input type="button" value="New row" onClick={ this.newRow } />
        <RowsSection rows={this.state.rows} onDelete={ this.handleDelete } onUpdate={ this.handleUpdate }/>
      </div>

      <button type="submit" onClick={ this.handleSubmit }>Save Edits</button>
      </form>
    );
  }
});
