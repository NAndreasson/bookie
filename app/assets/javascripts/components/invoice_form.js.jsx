var InvoiceForm = React.createClass({

  getInitialState: function() {
    var rows = {};

    var id = this.genId();
    rows[id] = {
      id: id,
      desc: '', price: 0, units: 0
    };

    return {
      rows: rows
    };
  },

  genId: function() {
    // Stolen / borrowed (choose one) from Facebook TodoMVC example
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);

    return id;
  },

  newRow: function() {
    var rows = this.state.rows;

    var id = this.genId();
    rows[id] = {
      id: id,
      desc: '', price: 0, units: 0
    };

    this.setState({ rows: rows });
  },

  handleSubmit: function(e) {
    e.preventDefault();

    console.log(this.refs.customer.getDOMNode().value.trim());

    var invoice = {
      customer_id: this.refs.customer.getDOMNode().value.trim(),
      last_pay_date: this.refs.last_pay_date.getDOMNode().value.trim(),
      invoice_rows: this.state.rows
    };

    $.post('/invoices.json', { invoice: invoice }, function(data, sucess, xhr) {
      // go to resource view page
      window.location.href = xhr.getResponseHeader('Location');
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

    var customers = this.props.customers.map(function(customer) {
      return <option value={customer.id}>{customer.name}</option>
    });

    return (
      <form>

        <div className="test">

          <div className="customer-name">
            <label>Customer</label>
            <select ref="customer">
              {customers}
           </select>

          </div>
          <div className="meck">
            <label>Last pay date</label>
            <input type="date" ref="last_pay_date" />
          </div>

      </div>

      <div className="rows">
        <input type="button" value="New row" onClick={ this.newRow } />
        <RowsSection rows={this.state.rows} onDelete={ this.handleDelete } onUpdate={ this.handleUpdate }/>
      </div>

      <button type="submit" onClick={ this.handleSubmit }>Submit</button>
      </form>
    );
  }
});
