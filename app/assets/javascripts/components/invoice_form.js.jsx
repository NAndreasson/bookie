var InvoiceForm = React.createClass({

  sendFormToServer: function() {
    // ajax to server
  },

  render: function() {
    return (
      <form className="invoice">
        <input type="text" placeholder="Customer" />
        <input type="date" />
        <button type="submit">Submit</button>
      </form>
    );
  }
});
