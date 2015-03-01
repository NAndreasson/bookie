var InvoiceForm = React.createClass({

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

    console.log('Handle submit');
  },

  sendFormToServer: function() {
    // ajax to server
  },

  render: function() {
    return (
      <form className="invoice" onSubmit={ this.handleSubmit }>
        <input type="text" placeholder="Customer" ref="customer" />
        <input type="date" ref="invoice_date" />
        <input type="date" ref="last_pay_date" />
        <button type="submit">Submit</button>
      </form>
    );
  }
});
