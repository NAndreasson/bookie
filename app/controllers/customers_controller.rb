class CustomersController < ApplicationController

  def index

  end

  def new
    @customer = Customer.new
  end

end