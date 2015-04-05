class CustomersController < ApplicationController

  def index
    @customers = Customer.all
  end

  def new
    @customer = Customer.new
  end

  def create
    @customer = Customer.new(customer_params)
    @customer.save
    redirect_to action: "index"
  end

  private

  def customer_params
    params.require(:customer).permit(:name, :street, :postnr, :city)
  end

end