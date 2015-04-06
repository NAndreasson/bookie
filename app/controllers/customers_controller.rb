class CustomersController < ApplicationController

  before_action :set_customer, only: [:show]

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

  def show
  end

  private

  def set_customer
    @customer = Customer.find(params[:id])
  end

  def customer_params
    params.require(:customer).permit(:name, :street, :postnr, :city)
  end

end