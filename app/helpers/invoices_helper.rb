module InvoicesHelper

  def total_price(price, units)
    number_to_currency(price * units)
  end
end
